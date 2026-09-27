// Original practice questions — NOT from Cambridge papers or school year-end exams.
// Set 2. Total 75 marks.
window.EXAM = {
  "id": "sec3-cs-mock-p1-v2",
  "title": "Sec 3 Computer Science \u2014 Mock Paper 1 (Set 2)",
  "subtitle": "Theory (Chapters 1\u20136) \u00b7 75 marks \u00b7 1 hour 45 minutes \u00b7 Set 2",
  "durationMinutes": 105,
  "totalMarks": 75,
  "questions": [
    {
      "id": "q1",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "What is the denary value of binary 1100?",
      "options": [
        "10",
        "11",
        "12",
        "14"
      ],
      "answer": "12",
      "markScheme": "8+4=12."
    },
    {
      "id": "q2",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Which unit is typically used for measuring processor clock speed?",
      "options": [
        "Hz / GHz",
        "Pixels",
        "Mbps only",
        "Lumens"
      ],
      "answer": "Hz / GHz",
      "markScheme": "Clock speed measured in hertz (often GHz)."
    },
    {
      "id": "q3",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "USB flash memory is an example of\u2026",
      "options": [
        "Volatile RAM",
        "Optical storage",
        "Solid-state secondary storage",
        "A sensor"
      ],
      "answer": "Solid-state secondary storage",
      "markScheme": "Flash drives are solid-state secondary storage."
    },
    {
      "id": "q4",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Serial transmission sends bits\u2026",
      "options": [
        "Several bits at once on many wires",
        "One after another on a single path",
        "Only using light",
        "Only within the CPU ALU"
      ],
      "answer": "One after another on a single path",
      "markScheme": "Serial = sequential bits."
    },
    {
      "id": "q5",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "A firewall is mainly used to\u2026",
      "options": [
        "Compress videos",
        "Control network traffic in/out of a network",
        "Translate high-level code",
        "Increase colour depth"
      ],
      "answer": "Control network traffic in/out of a network",
      "markScheme": "Firewall filters/controls traffic."
    },
    {
      "id": "q6",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Which register holds the instruction currently being decoded/executed?",
      "options": [
        "PC",
        "MAR",
        "CIR / current instruction register",
        "Accumulator address bus"
      ],
      "answer": "CIR / current instruction register",
      "markScheme": "CIR holds current instruction."
    },
    {
      "id": "q7",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "An expert system is most closely related to which emerging technology area?",
      "options": [
        "Inkjet printing",
        "Artificial intelligence applications",
        "Parity generation",
        "Cloud storage cables"
      ],
      "answer": "Artificial intelligence applications",
      "markScheme": "Expert systems are an AI application."
    },
    {
      "id": "q8",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Lossless compression means\u2026",
      "options": [
        "Some data is permanently discarded",
        "Original data can be reconstructed exactly",
        "Images always become smaller than lossy",
        "Encryption is applied"
      ],
      "answer": "Original data can be reconstructed exactly",
      "markScheme": "Lossless = exact rebuild."
    },
    {
      "id": "q9",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Which is application software?",
      "options": [
        "Disk defragmenter",
        "Spreadsheet program",
        "Device driver",
        "BIOS"
      ],
      "answer": "Spreadsheet program",
      "markScheme": "Spreadsheet is application software."
    },
    {
      "id": "q10",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Two-factor authentication typically requires\u2026",
      "options": [
        "Only a username",
        "Two different types of evidence of identity",
        "A longer Ethernet cable",
        "Lossy compression"
      ],
      "answer": "Two different types of evidence of identity",
      "markScheme": "2FA = two factors."
    },
    {
      "id": "q11",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "Convert denary 100 to binary (show at least 7 bits).",
      "answer": "1100100",
      "accept": [
        "1100100",
        "01100100"
      ],
      "markScheme": "64+32+4=100 \u2192 1100100."
    },
    {
      "id": "q12",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "Convert denary 255 to hexadecimal.",
      "answer": "FF",
      "accept": [
        "FF",
        "ff",
        "0xFF"
      ],
      "markScheme": "255=15\u00d716+15 \u2192 FF."
    },
    {
      "id": "q13",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "State one use of hexadecimal in computing.",
      "answer": "MAC addresses / colour codes / memory dumps",
      "accept": [
        "mac",
        "colour",
        "color",
        "memory",
        "address",
        "html",
        "error"
      ],
      "markScheme": "e.g. colour codes, MAC addresses, memory dumps."
    },
    {
      "id": "q14",
      "section": "B",
      "type": "written",
      "marks": 4,
      "prompt": "Explain the difference between the Internet and the World Wide Web.",
      "markScheme": "Internet: global network of interconnected networks. WWW: service/system of linked hypertext documents/resources accessed via the Internet (browsers/URLs/HTTP).",
      "rubric": "Internet as network infrastructure; WWW as web service on top."
    },
    {
      "id": "q15",
      "section": "B",
      "type": "written",
      "marks": 4,
      "prompt": "Describe two roles of an operating system.",
      "markScheme": "Examples: memory management; file management; user interface; peripheral/device management; security/access control; multitasking/process management.",
      "rubric": "Two distinct OS roles with brief description."
    },
    {
      "id": "q16",
      "section": "B",
      "type": "written",
      "marks": 5,
      "prompt": "A bitmap image is 800 pixels wide, 600 pixels high, with a colour depth of 16 bits. Calculate the file size in kilobytes (KB) before compression. Show working.",
      "markScheme": "800\u00d7600\u00d716 = 7,680,000 bits = 960,000 bytes = 960 KB (\u00f71000) or \u2248937.5 KB (\u00f71024). Accept either with working.",
      "rubric": "Correct multiplication; conversion bits\u2192bytes\u2192KB; working shown."
    },
    {
      "id": "q17",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "(a) Describe simplex, half-duplex and full-duplex data transmission. [3]\n(b) Give one example application for full-duplex transmission. [1]\n(c) Explain why error detection is important in data transmission. [2]",
      "markScheme": "(a) Simplex one direction only; half-duplex both directions but not simultaneously; full-duplex both directions at once. (b) e.g. phone call / video conference. (c) Detect corrupted bits so data can be resent/corrected; maintain integrity.",
      "rubric": "Three mode definitions; example; importance of detecting corruption."
    },
    {
      "id": "q18",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "Explain how ARQ (Automatic Repeat reQuest) can help recover from transmission errors.",
      "markScheme": "Receiver checks data (e.g. checksum/CRC); sends acknowledgement; if error/no ACK, sender retransmits; may use timeout.",
      "rubric": "Check; ACK/NAK or timeout; retransmission process."
    },
    {
      "id": "q19",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "A greenhouse uses sensors and a microcontroller to water plants automatically.\n(a) Identify two sensors that could be used. [2]\n(b) Describe how actuators and feedback allow automatic watering. [4]",
      "markScheme": "(a) Moisture/humidity/temperature/light sensors. (b) Read sensor values; compare to threshold; activate pump/valve (actuator); re-measure (feedback loop).",
      "rubric": "Two sensors; measure-compare-actuate-feedback."
    },
    {
      "id": "q20",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "Discuss ransomware and social engineering as threats to a small business. For each threat, describe one impact and one prevention method.",
      "markScheme": "Ransomware: encrypts files/demands payment; backups/updates/user training. Social engineering: manipulates people to give access; training/verification policies/MFA. Accept equivalent paired discussion.",
      "rubric": "Each threat with impact + prevention; max 8."
    },
    {
      "id": "q21",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "(a) Describe what is meant by an IDE. [2]\n(b) Identify two features of an IDE that help a programmer. [4]",
      "markScheme": "(a) Integrated Development Environment \u2014 software toolkit for writing/testing code. (b) editor, debugger, translator, auto-complete, error highlighting, runtime environment \u2014 any two explained.",
      "rubric": "IDE definition; two explained features."
    },
    {
      "id": "q22",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "A grocery shop uses machine learning to predict how much fresh food to order each day.\n(a) Describe two types of past data that could help train this system. [2]\n(b) Explain two benefits of using its predictions. [2]\n(c) Explain two reasons why staff should still check the suggested order. [2]",
      "markScheme": "(a) Past daily sales and factors such as day of week, holidays or weather; one mark for each relevant data type. (b) Better stock availability and less food waste; one mark for each explained benefit. (c) Unusual events may not be reflected in training data and inaccurate or biased data can produce poor predictions; one mark for each explained reason. Accept other relevant answers.",
      "rubric": "Two training-data types; two explained benefits; two reasons for human review."
    },
    {
      "id": "q23",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "(a) Explain how sound is converted to digital form using sampling. [4]\n(b) Describe the effect of increasing sample rate on quality and file size. [2]\n(c) Describe the effect of increasing sample resolution on quality and file size. [2]",
      "markScheme": "(a) Amplitude measured at intervals; values stored in binary; ADC. (b) Higher rate \u2192 better quality (closer to original) and larger file. (c) Higher resolution \u2192 more detail per sample and larger file.",
      "rubric": "Sampling process; rate effects; resolution effects."
    }
  ]
};
