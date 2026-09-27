// Original practice questions — NOT from Cambridge papers or school year-end exams.
// Scope: Cambridge IGCSE CS 0478-style, Chapters 1–6 only. Total 75 marks.
window.EXAM = {
  id: "sec3-cs-mock-p1",
  title: "Sec 3 Computer Science — Mock Paper 1",
  subtitle: "Theory (Chapters 1–6) · 75 marks · 1 hour 45 minutes",
  durationMinutes: 105,
  totalMarks: 75,
  questions: [
    {
      id: "q1",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "Which number system uses base 16?",
      options: ["Binary", "Denary", "Hexadecimal", "BCD"],
      answer: "Hexadecimal",
      markScheme: "Hexadecimal is base 16."
    },
    {
      id: "q2",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "How many different values can be represented with 4 bits?",
      options: ["4", "8", "15", "16"],
      answer: "16",
      markScheme: "2^4 = 16 values."
    },
    {
      id: "q3",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "Which device is typically an input device?",
      options: ["Monitor", "Speaker", "Microphone", "Projector"],
      answer: "Microphone",
      markScheme: "Microphone captures sound into the system."
    },
    {
      id: "q4",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "Parity checks are mainly used to…",
      options: ["Encrypt data", "Detect transmission errors", "Compress images", "Speed up the CPU"],
      answer: "Detect transmission errors",
      markScheme: "Parity is an error-detection method."
    },
    {
      id: "q5",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "Which type of software manages hardware and provides services to applications?",
      options: ["Utility software", "Application software", "System software / OS", "Compiler only"],
      answer: "System software / OS",
      markScheme: "The operating system is system software."
    },
    {
      id: "q6",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "HTTPS mainly protects data by using…",
      options: ["Compression", "Encryption", "Parity bits", "Virtual memory"],
      answer: "Encryption",
      markScheme: "HTTPS uses encryption (TLS)."
    },
    {
      id: "q7",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "In the fetch–decode–execute cycle, where is the next instruction address usually held?",
      options: ["MDR", "CIR", "Program Counter (PC)", "Accumulator only"],
      answer: "Program Counter (PC)",
      markScheme: "PC holds the address of the next instruction."
    },
    {
      id: "q8",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "Which is an example of an embedded system?",
      options: ["School file server", "Washing-machine controller", "Desktop used for gaming", "Cloud data centre"],
      answer: "Washing-machine controller",
      markScheme: "Embedded systems are dedicated controllers in devices."
    },
    {
      id: "q9",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "Lossy compression is most suitable for…",
      options: ["Executable program files", "Bank transaction logs", "Photographs where some detail loss is acceptable", "Encrypted password hashes"],
      answer: "Photographs where some detail loss is acceptable",
      markScheme: "Lossy is common for images/audio/video where exact rebuild is not required."
    },
    {
      id: "q10",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "Phishing is best described as…",
      options: ["Flooding a network to make it unavailable", "Tricking a user into revealing secrets via fake messages/sites", "Guessing passwords by trying many combinations", "Installing a keylogger through a USB worm"],
      answer: "Tricking a user into revealing secrets via fake messages/sites",
      markScheme: "Phishing uses deception to obtain credentials/data."
    },
    {
      id: "q11",
      section: "B",
      type: "short",
      marks: 2,
      prompt: "Convert the denary number 45 to binary. Show 8 bits.",
      answer: "00101101",
      accept: ["00101101", "101101", "10 1101", "0010 1101"],
      markScheme: "45 = 32+8+4+1 → 00101101 (1 for correct binary; 1 for 8-bit form / working)."
    },
    {
      id: "q12",
      section: "B",
      type: "short",
      marks: 2,
      prompt: "Convert the hexadecimal number 2F to denary.",
      answer: "47",
      accept: ["47"],
      markScheme: "2F = 2×16 + 15 = 47."
    },
    {
      id: "q13",
      section: "B",
      type: "short",
      marks: 2,
      prompt: "State what the letters CPU stand for.",
      answer: "Central Processing Unit",
      accept: ["central processing unit", "Central Processing Unit"],
      markScheme: "Central Processing Unit."
    },
    {
      id: "q14",
      section: "B",
      type: "written",
      marks: 4,
      prompt: "A sound clip is recorded using a sample rate of 44 000 Hz and a sample resolution of 16 bits, in mono.\n(a) Explain what is meant by sample rate. [2]\n(b) Explain what is meant by sample resolution. [2]",
      markScheme: "(a) Number of samples taken per second / how often the sound amplitude is measured. (b) Number of bits used to store each sample / precision of each sample value.",
      rubric: "Award marks for: sample rate = samples per second; resolution = bits per sample / detail of amplitude. Accept equivalent wording."
    },
    {
      id: "q15",
      section: "B",
      type: "written",
      marks: 4,
      prompt: "Describe two differences between RAM and ROM.",
      markScheme: "Any two clear differences, e.g. RAM volatile / ROM non-volatile; RAM read/write / ROM mainly read-only; RAM stores currently running data/programs / ROM stores bootstrap/firmware.",
      rubric: "1 mark per valid distinct difference (max 4 if well expanded as two pairs)."
    },
    {
      id: "q16",
      section: "B",
      type: "written",
      marks: 5,
      prompt: "Explain why a computer might use virtual memory.",
      markScheme: "When RAM is full / insufficient; part of secondary storage used as extension of RAM; allows larger programs/more processes to run (with possible slowdown).",
      rubric: "Look for: RAM shortage; use of disk/SSD as overflow; enables running larger workloads."
    },
    {
      id: "q17",
      section: "C",
      type: "written",
      marks: 6,
      prompt: "A company transmits sensor readings from a remote weather station to a city office.\n(a) Describe packet switching. [3]\n(b) Give one advantage and one disadvantage of using packet switching for this data. [3]",
      markScheme: "(a) Data split into packets; each packet may take different routes; reassembled at destination; packets contain address/sequence control info. (b) Adv: efficient use of network / robust if one path fails. Disadv: packets may arrive out of order / delay / overhead of headers.",
      rubric: "Packet switching definition marks + one valid advantage + one valid disadvantage."
    },
    {
      id: "q18",
      section: "C",
      type: "written",
      marks: 6,
      prompt: "Explain how checksums can be used to detect errors after data transmission.",
      markScheme: "Sender calculates value from data; value sent with data; receiver recalculates; compare values; mismatch indicates error.",
      rubric: "Process marks: calculate, transmit, recalculate, compare, conclude error if different."
    },
    {
      id: "q19",
      section: "C",
      type: "written",
      marks: 6,
      prompt: "A food factory uses an automated system with sensors and actuators to keep storage temperature between 2°C and 5°C.\n(a) Identify one suitable sensor and one suitable actuator for this system. [2]\n(b) Describe how the system could use feedback to maintain the temperature range. [4]",
      markScheme: "(a) Temperature sensor; cooling unit/heater/fan as actuator. (b) Continuously measure temperature; compare to set range; if too high activate cooling / if too low reduce cooling or heat; loop continues (feedback).",
      rubric: "Sensor+actuator; measure; compare to threshold; actuate; continuous loop/feedback."
    },
    {
      id: "q20",
      section: "C",
      type: "written",
      marks: 8,
      prompt: "Discuss two cyber security threats to an online school portal and a suitable protection method for each threat.",
      markScheme: "Examples: malware → antivirus/updates; phishing → user training/MFA; brute force → strong passwords/lockouts; DDoS → firewalls/filtering; SQL injection → input validation/parameterised queries. Must pair threat with matching protection.",
      rubric: "2 threats (1 each) + matching protection for each (1–2 each). Max 6."
    },
    {
      id: "q21",
      section: "C",
      type: "written",
      marks: 6,
      prompt: "High-level languages and assembly language are both used in software development.\n(a) Describe one advantage of high-level languages compared with assembly. [2]\n(b) Describe the role of a compiler. [2]\n(c) Describe the role of an interpreter. [2]",
      markScheme: "(a) Easier to write/read/maintain / portable across machines / fewer lines. (b) Translates whole source program into machine code before running / produces executable. (c) Translates and executes line-by-line / no separate full executable required.",
      rubric: "Advantage; compiler whole-program translation; interpreter line-by-line execution."
    },
    {
      id: "q22",
      section: "C",
      type: "written",
      marks: 6,
      prompt: "A museum is planning an augmented reality (AR) guide that places digital labels over exhibits viewed through a tablet.\n(a) Explain how AR differs from virtual reality (VR). [2]\n(b) Describe two ways the AR guide could help a visitor learn about an exhibit. [2]\n(c) Explain two limitations of using the guide during a museum visit. [2]",
      markScheme: "(a) AR adds digital content to a view of the real world; VR replaces the user's view with a simulated environment. (b) For example, labels can identify parts of an exhibit and an overlay can show how an object was used; award one mark for each distinct relevant learning benefit. (c) For example, a device or battery is required and the screen may distract from the real exhibit; award one mark for each explained limitation.",
      rubric: "AR versus VR; two distinct learning benefits; two explained limitations."
    },
    {
      id: "q23",
      section: "C",
      type: "written",
      marks: 8,
      prompt: "A photographer stores images as bitmaps.\n(a) Explain how an image is represented as a bitmap. [3]\n(b) The image width is 2000 pixels, height is 1000 pixels, and colour depth is 24 bits. Calculate the file size in megabytes (MB) before compression. Show your working. [3]\n(c) Explain one reason the photographer might still compress the image. [2]",
      markScheme: "(a) Image as grid of pixels; each pixel stored as binary colour value; colour depth = bits per pixel. (b) 2000×1000×24 bits = 48,000,000 bits = 6,000,000 bytes ≈ 5.72 MB (using 1024²) or 6 MB (using 1000²) — accept either with working. (c) Reduce storage / faster upload/download / email limits.",
      rubric: "Bitmap explanation; calculation with working; sensible compression reason."
    }
  ]
};
