(function () {
  const exam = window.EXAM;
  const STORAGE_LOCK = exam.id + "_started";

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

  function show(screen) {
    Object.values(screens).forEach((el) => el.classList.add("hidden"));
    screen.classList.remove("hidden");
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

  function markLocal(q, raw) {
    if (q.type === "mcq") {
      const ok = raw === q.answer;
      return { score: ok ? q.marks : 0, max: q.marks, method: "local", note: ok ? "Correct" : "Incorrect" };
    }
    if (q.type === "short") {
      const n = normalize(raw);
      const accept = [q.answer, ...(q.accept || [])].map(normalize);
      const ok = n !== "" && accept.some((a) => a !== "" &&
        new RegExp(`(^|[^a-z0-9])${escapeRegex(a)}(?=$|[^a-z0-9])`).test(n));
      return { score: ok ? q.marks : 0, max: q.marks, method: "local", note: ok ? "Correct" : "Incorrect" };
    }
    return null;
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateTimerUI() {
    const el = $("timer");
    el.textContent = formatTime(remainingSec);
    el.classList.toggle("warn", remainingSec <= 600 && remainingSec > 120);
    el.classList.toggle("danger", remainingSec <= 120);
  }

  function tick() {
    remainingSec -= 1;
    updateTimerUI();
    if (remainingSec <= 0) {
      remainingSec = 0;
      updateTimerUI();
      finishExam(true);
    }
  }

  function renderNav() {
    const nav = $("question-nav");
    nav.innerHTML = "";
    exam.questions.forEach((q, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = i + 1;
      if (i === currentIdx) b.classList.add("current");
      if (answers[q.id] && String(answers[q.id]).trim() !== "") b.classList.add("done");
      b.addEventListener("click", () => {
        saveCurrent();
        currentIdx = i;
        renderQuestion();
      });
      nav.appendChild(b);
    });
  }

  function renderQuestion() {
    const q = exam.questions[currentIdx];
    $("progress").textContent = `Question ${currentIdx + 1} of ${exam.questions.length} · Section ${q.section} · ${q.marks} mark${q.marks > 1 ? "s" : ""}`;
    const box = $("question-box");
    let body = `<div class="card"><div><span class="q-num">Q${currentIdx + 1}</span><span class="marks">[${q.marks}]</span></div>`;
    body += `<p>${q.prompt.replace(/\n/g, "<br>")}</p>`;
    const val = answers[q.id] || "";
    if (q.type === "mcq") {
      body += `<div class="options">`;
      q.options.forEach((opt, i) => {
        const id = `${q.id}_${i}`;
        const checked = val === opt ? "checked" : "";
        body += `<label for="${id}"><input type="radio" name="${q.id}" id="${id}" value="${opt.replace(/"/g, "&quot;")}" ${checked}> ${opt}</label>`;
      });
      body += `</div>`;
    } else if (q.type === "short") {
      body += `<input type="text" id="ans-input" value="${String(val).replace(/"/g, "&quot;")}" placeholder="Type your answer">`;
    } else {
      body += `<textarea id="ans-input" placeholder="Write your answer here">${String(val).replace(/</g, "&lt;")}</textarea>`;
    }
    body += `</div>`;
    box.innerHTML = body;
    renderNav();
  }

  function saveCurrent() {
    const q = exam.questions[currentIdx];
    if (q.type === "mcq") {
      const selected = document.querySelector(`input[name="${q.id}"]:checked`);
      answers[q.id] = selected ? selected.value : answers[q.id] || "";
    } else {
      const input = document.getElementById("ans-input");
      if (input) answers[q.id] = input.value;
    }
  }

  function startExam() {
    if (sessionStorage.getItem(STORAGE_LOCK) === "done") {
      alert("This attempt was already finished in this browser tab session. Refresh only starts a new attempt if you clear site data / use a new tab after closing.");
    }
    startedAt = Date.now();
    sessionStorage.setItem(STORAGE_LOCK, "running");
    show(screens.exam);
    renderQuestion();
    updateTimerUI();
    timerId = setInterval(tick, 1000);
  }

  function finishExam(auto) {
    if (submitted) return;
    submitted = true;
    saveCurrent();
    if (timerId) clearInterval(timerId);
    sessionStorage.setItem(STORAGE_LOCK, "done");
    show(screens.results);
    $("results-status").textContent = auto
      ? "Time is up — review your answers below."
      : "Review your answers below.";
    $("results-body").innerHTML = "";

    let total = 0;
    let autoMax = 0;
    let reviewMax = 0;
    const rows = [];
    for (let i = 0; i < exam.questions.length; i++) {
      const q = exam.questions[i];
      const raw = answers[q.id] || "";
      const result = markLocal(q, raw);
      if (result) {
        total += result.score;
        autoMax += q.marks;
      } else {
        reviewMax += q.marks;
      }
      rows.push({ q, raw, result, index: i });
    }

    let html = `<div class="card"><div class="score-big">${total} / ${autoMax}</div>
      <p class="meta">Automatically marked MCQ and short-answer marks only.</p>
      <p>${reviewMax} written/code marks need self-review using the suggested answers below. No overall 75-mark score is calculated.</p></div>`;

    rows.forEach(({ q, raw, result, index }) => {
      const cls = !result ? "partial" : result.score >= result.max ? "ok" : result.score > 0 ? "partial" : "wrong";
      html += `<div class="card">
        <div><span class="q-num">Q${index + 1}</span> <span class="marks ${cls}">${result ? result.score + "/" + result.max : "Self-review · " + q.marks + " marks"}</span></div>
        <p><strong>Your answer:</strong><br>${raw ? String(raw).replace(/</g, "&lt;").replace(/\n/g, "<br>") : "<em>(blank)</em>"}</p>
        <p><strong>Suggested model answer / mark-scheme points:</strong><br>${(q.markScheme || "").replace(/\n/g, "<br>")}</p>
        ${result?.note ? `<div class="feedback"><strong>Feedback:</strong> ${String(result.note).replace(/</g, "&lt;")}</div>` : ""}
      </div>`;
    });
    $("results-body").innerHTML = html;
  }

  $("btn-start").addEventListener("click", startExam);
  $("btn-prev").addEventListener("click", () => {
    saveCurrent();
    if (currentIdx > 0) {
      currentIdx -= 1;
      renderQuestion();
    }
  });
  $("btn-next").addEventListener("click", () => {
    saveCurrent();
    if (currentIdx < exam.questions.length - 1) {
      currentIdx += 1;
      renderQuestion();
    }
  });
  $("btn-submit").addEventListener("click", () => {
    if (confirm(`Submit ${exam.title} now? You cannot return to the questions after submitting.`)) {
      finishExam(false);
    }
  });

  $("exam-title").textContent = exam.title;
  $("exam-sub").textContent = exam.subtitle;
  show(screens.intro);
})();
