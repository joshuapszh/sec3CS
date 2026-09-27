(function () {
  const exam = window.EXAM;
  const STORAGE_KEY = exam.id + "_state";

  const $ = (id) => document.getElementById(id);
  const screens = {
    intro: $("screen-intro"),
    exam: $("screen-exam"),
    results: $("screen-results"),
  };

  let answers = {};
  let startedAt = null;
  let remainingSec = exam.durationMinutes * 60;
  let timerId = null;
  let currentIdx = 0;
  let submitted = false;
  let phase = "intro"; // intro | running | done

  function show(screen) {
    Object.values(screens).forEach((el) => el.classList.add("hidden"));
    screen.classList.remove("hidden");
    const timer = $("timer");
    if (timer) timer.classList.toggle("hidden", screen !== screens.exam);
  }

  function normalize(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function escapeHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function getParts(q) {
    if (Array.isArray(q.parts) && q.parts.length >= 2) {
      return q.parts.map((p) => ({
        id: String(p.id || p.label || "").replace(/[()]/g, "").toLowerCase(),
        label: p.label || "(" + (p.id || "") + ")",
        marks: p.marks,
      }));
    }
    if (q.type !== "written") return null;
    const found = [];
    const re = /\(([a-d])\)/gi;
    let m;
    while ((m = re.exec(q.prompt || ""))) {
      const id = m[1].toLowerCase();
      if (!found.some((p) => p.id === id)) {
        found.push({ id: id, label: "(" + id + ")" });
      }
    }
    return found.length >= 2 ? found : null;
  }

  function answerFilled(q) {
    const v = answers[q.id];
    if (v == null) return false;
    if (typeof v === "object") {
      return Object.values(v).some((x) => String(x || "").trim() !== "");
    }
    return String(v).trim() !== "";
  }

  function formatAnswerDisplay(q, raw) {
    const parts = getParts(q);
    if (parts && raw && typeof raw === "object") {
      return parts
        .map((p) => {
          const text = String(raw[p.id] || "").trim();
          return (
            "<p><strong>" +
            escapeHtml(p.label) +
            "</strong></p>" +
            (text
              ? '<pre class="pre">' + escapeHtml(text) + "</pre>"
              : "<p><em>(blank)</em></p>")
          );
        })
        .join("");
    }
    const text = raw == null ? "" : String(raw);
    if (!text.trim()) return "<p><em>(blank)</em></p>";
    return '<pre class="pre">' + escapeHtml(text) + "</pre>";
  }

  function markLocal(q, raw) {
    if (q.type === "mcq") {
      const ok = raw === q.answer;
      return { score: ok ? q.marks : 0, max: q.marks, method: "local", note: ok ? "Correct" : "Incorrect" };
    }
    if (q.type === "short") {
      const n = normalize(raw);
      const accept = [q.answer, ...(q.accept || [])].map(normalize);
      const ok =
        n !== "" &&
        accept.some(
          (a) =>
            a !== "" &&
            new RegExp("(^|[^a-z0-9])" + escapeRegex(a) + "(?=$|[^a-z0-9])").test(n)
        );
      return { score: ok ? q.marks : 0, max: q.marks, method: "local", note: ok ? "Correct" : "Incorrect" };
    }
    return null;
  }

  function formatTime(sec) {
    const total = Math.max(0, Math.floor(sec));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return (
      String(h).padStart(2, "0") +
      ":" +
      String(m).padStart(2, "0") +
      ":" +
      String(s).padStart(2, "0")
    );
  }

  function updateTimerUI() {
    const el = $("timer");
    if (!el) return;
    el.textContent = formatTime(remainingSec);
    el.classList.toggle("warn", remainingSec <= 600 && remainingSec > 120);
    el.classList.toggle("danger", remainingSec <= 120);
  }

  function persist() {
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          answers: answers,
          remainingSec: remainingSec,
          currentIdx: currentIdx,
          startedAt: startedAt,
          phase: phase,
        })
      );
    } catch (e) {}
  }

  function clearPersist() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(exam.id + "_started");
    } catch (e) {}
  }

  function loadPersist() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function tick() {
    remainingSec -= 1;
    if (remainingSec <= 0) {
      remainingSec = 0;
      updateTimerUI();
      persist();
      finishExam(true);
      return;
    }
    updateTimerUI();
    persist();
  }

  function startTimer() {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(tick, 1000);
  }

  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }

  function renderNav() {
    const nav = $("question-nav");
    nav.innerHTML = "";
    exam.questions.forEach((q, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = String(i + 1);
      if (i === currentIdx) b.classList.add("current");
      if (answerFilled(q)) b.classList.add("done");
      b.addEventListener("click", () => {
        saveCurrent();
        currentIdx = i;
        persist();
        renderQuestion();
      });
      nav.appendChild(b);
    });
  }

  function renderQuestion() {
    const q = exam.questions[currentIdx];
    $("progress").textContent =
      "Question " +
      (currentIdx + 1) +
      " of " +
      exam.questions.length +
      " · Section " +
      q.section +
      " · " +
      q.marks +
      " mark" +
      (q.marks > 1 ? "s" : "");
    const box = $("question-box");
    let body =
      '<div class="card"><div><span class="q-num">Q' +
      (currentIdx + 1) +
      '</span><span class="marks">[' +
      q.marks +
      "]</span></div>";
    body += '<div class="prompt">' + q.prompt.replace(/\n/g, "<br>") + "</div>";
    const val = answers[q.id];
    const parts = getParts(q);

    if (q.type === "mcq") {
      body += '<div class="options">';
      q.options.forEach((opt, i) => {
        const id = q.id + "_" + i;
        const checked = val === opt ? "checked" : "";
        body +=
          '<label for="' +
          id +
          '"><input type="radio" name="' +
          q.id +
          '" id="' +
          id +
          '" value="' +
          escapeHtml(opt) +
          '" ' +
          checked +
          "> " +
          escapeHtml(opt) +
          "</label>";
      });
      body += "</div>";
    } else if (q.type === "short") {
      body +=
        '<input type="text" id="ans-input" value="' +
        escapeHtml(val || "") +
        '" placeholder="Type your answer">';
    } else if (parts) {
      const obj = val && typeof val === "object" ? val : {};
      body += '<div class="parts">';
      parts.forEach((p) => {
        const tall = q.marks >= 6 ? " tall" : "";
        body +=
          '<div class="part-block"><label class="part-label" for="ans-part-' +
          p.id +
          '">Answer ' +
          escapeHtml(p.label) +
          (p.marks != null ? " [" + p.marks + "]" : "") +
          '</label><textarea class="ans-part' +
          tall +
          '" id="ans-part-' +
          p.id +
          '" data-part="' +
          p.id +
          '" placeholder="Write your answer for ' +
          escapeHtml(p.label) +
          '">' +
          escapeHtml(obj[p.id] || "") +
          "</textarea></div>";
      });
      body += "</div>";
    } else {
      const tall = q.marks >= 6 ? " tall" : "";
      body +=
        '<textarea id="ans-input" class="' +
        tall.trim() +
        '" placeholder="Write your answer here">' +
        escapeHtml(val || "") +
        "</textarea>";
    }
    body += "</div>";
    box.innerHTML = body;
    renderNav();
  }

  function saveCurrent() {
    if (phase !== "running") return;
    const q = exam.questions[currentIdx];
    if (!q) return;
    if (q.type === "mcq") {
      const selected = document.querySelector('input[name="' + q.id + '"]:checked');
      answers[q.id] = selected ? selected.value : answers[q.id] || "";
    } else {
      const parts = getParts(q);
      if (parts) {
        const obj = {};
        parts.forEach((p) => {
          const el = document.getElementById("ans-part-" + p.id);
          obj[p.id] = el ? el.value : (answers[q.id] && answers[q.id][p.id]) || "";
        });
        answers[q.id] = obj;
      } else {
        const input = document.getElementById("ans-input");
        if (input) answers[q.id] = input.value;
      }
    }
    persist();
  }

  function resetAttemptState() {
    stopTimer();
    answers = {};
    startedAt = null;
    remainingSec = exam.durationMinutes * 60;
    currentIdx = 0;
    submitted = false;
    phase = "intro";
    clearPersist();
    updateTimerUI();
  }

  function beginFreshAttempt() {
    resetAttemptState();
    startedAt = Date.now();
    phase = "running";
    submitted = false;
    persist();
    show(screens.exam);
    renderQuestion();
    updateTimerUI();
    startTimer();
  }

  function resumeAttempt(state) {
    answers = state.answers || {};
    remainingSec =
      typeof state.remainingSec === "number"
        ? state.remainingSec
        : exam.durationMinutes * 60;
    currentIdx = Math.min(
      Math.max(0, state.currentIdx || 0),
      exam.questions.length - 1
    );
    startedAt = state.startedAt || Date.now();
    submitted = false;
    phase = "running";
    show(screens.exam);
    renderQuestion();
    updateTimerUI();
    startTimer();
    persist();
  }

  function startExam() {
    const state = loadPersist();
    if (state && state.phase === "done") {
      if (
        confirm(
          "You already submitted this paper in this browser tab. Start a fresh attempt? Your previous answers on this device will be cleared."
        )
      ) {
        beginFreshAttempt();
      } else {
        phase = "done";
        submitted = true;
        answers = state.answers || {};
        showResults(false);
      }
      return;
    }
    if (state && state.phase === "running") {
      resumeAttempt(state);
      return;
    }
    beginFreshAttempt();
  }

  function showResults(auto) {
    stopTimer();
    show(screens.results);
    $("results-status").textContent = auto
      ? "Time is up — review your answers below."
      : "Review your answers below.";

    let total = 0;
    let autoMax = 0;
    let reviewMax = 0;
    const rows = [];
    for (let i = 0; i < exam.questions.length; i++) {
      const q = exam.questions[i];
      const raw = answers[q.id];
      const result = markLocal(q, typeof raw === "object" ? "" : raw || "");
      if (result) {
        total += result.score;
        autoMax += q.marks;
      } else {
        reviewMax += q.marks;
      }
      rows.push({ q: q, raw: raw, result: result, index: i });
    }

    let html =
      '<div class="card"><div class="score-big">' +
      total +
      " / " +
      autoMax +
      '</div><p class="meta">Automatically checked portion only (MCQ and exact short answers) — not a full 75-mark grade.</p><p>' +
      reviewMax +
      " written/code marks need self-review using the suggested answers below.</p>" +
      '<div class="actions"><button type="button" id="btn-new-attempt" class="secondary">Start a new attempt</button></div></div>';

    rows.forEach(function (row) {
      const q = row.q;
      const raw = row.raw;
      const result = row.result;
      const index = row.index;
      const cls = !result
        ? "partial"
        : result.score >= result.max
          ? "ok"
          : result.score > 0
            ? "partial"
            : "wrong";
      html +=
        '<div class="card"><div><span class="q-num">Q' +
        (index + 1) +
        '</span> <span class="marks ' +
        cls +
        '">' +
        (result
          ? result.score + "/" + result.max
          : "Self-review · " + q.marks + " marks") +
        "</span></div><p><strong>Your answer:</strong></p>" +
        formatAnswerDisplay(q, raw) +
        "<p><strong>Suggested model answer / mark-scheme points:</strong></p><pre class=\"pre\">" +
        escapeHtml(q.markScheme || "") +
        "</pre>" +
        (result && result.note
          ? '<div class="feedback"><strong>Feedback:</strong> ' +
            escapeHtml(result.note) +
            "</div>"
          : "") +
        "</div>";
    });
    $("results-body").innerHTML = html;
    const again = $("btn-new-attempt");
    if (again) {
      again.addEventListener("click", function () {
        if (confirm("Start a fresh attempt? Saved answers for this paper in this tab will be cleared.")) {
          beginFreshAttempt();
        }
      });
    }
  }

  function finishExam(auto) {
    if (submitted) return;
    saveCurrent();
    submitted = true;
    phase = "done";
    stopTimer();
    persist();
    showResults(auto);
  }

  $("btn-start").addEventListener("click", startExam);
  $("btn-prev").addEventListener("click", function () {
    saveCurrent();
    if (currentIdx > 0) {
      currentIdx -= 1;
      persist();
      renderQuestion();
    }
  });
  $("btn-next").addEventListener("click", function () {
    saveCurrent();
    if (currentIdx < exam.questions.length - 1) {
      currentIdx += 1;
      persist();
      renderQuestion();
    }
  });
  $("btn-submit").addEventListener("click", function () {
    if (
      confirm(
        "Submit " +
          exam.title +
          " now? You cannot return to the questions after submitting (you can start a new attempt from the results page)."
      )
    ) {
      finishExam(false);
    }
  });

  window.addEventListener("beforeunload", function (e) {
    if (phase === "running") {
      saveCurrent();
      persist();
      e.preventDefault();
      e.returnValue = "";
    }
  });

  // Autosave typed answers
  document.addEventListener("input", function (e) {
    if (phase !== "running") return;
    if (
      e.target &&
      (e.target.id === "ans-input" ||
        (e.target.classList && e.target.classList.contains("ans-part")))
    ) {
      saveCurrent();
    }
  });

  $("exam-title").textContent = exam.title;
  $("exam-sub").textContent = exam.subtitle;
  updateTimerUI();

  const existing = loadPersist();
  if (existing && existing.phase === "running") {
    resumeAttempt(existing);
  } else if (existing && existing.phase === "done") {
    answers = existing.answers || {};
    submitted = true;
    phase = "done";
    showResults(false);
  } else {
    show(screens.intro);
  }
})();