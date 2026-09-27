// Original practice questions — NOT from Cambridge papers or school year-end exams.
// Set 3. Total 75 marks.
window.EXAM = {
  "id": "sec3-cs-mock-p1-v3",
  "title": "Sec 3 Computer Science \u2014 Mock Paper 1 (Set 3)",
  "subtitle": "Theory (Chapters 1\u20136) \u00b7 75 marks \u00b7 1 hour 45 minutes \u00b7 Set 3",
  "durationMinutes": 105,
  "totalMarks": 75,
  "questions": [
    {
      "id": "q1",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Binary 1010 in denary is\u2026",
      "options": [
        "8",
        "9",
        "10",
        "12"
      ],
      "answer": "10",
      "markScheme": "8+2=10."
    },
    {
      "id": "q2",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Which storage is usually fastest for the CPU to access?",
      "options": [
        "HDD",
        "Magnetic tape",
        "Cache memory",
        "DVD-ROM"
      ],
      "answer": "Cache memory",
      "markScheme": "Cache is fastest among typical options."
    },
    {
      "id": "q3",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "A barcode scanner is primarily an\u2026",
      "options": [
        "Output device",
        "Input device",
        "Actuator",
        "Storage medium"
      ],
      "answer": "Input device",
      "markScheme": "Scanner inputs data."
    },
    {
      "id": "q4",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Odd parity means\u2026",
      "options": [
        "Number of 1-bits including parity is odd",
        "Data cannot have zeros",
        "Compression removes odd bytes",
        "The CPU skips odd addresses"
      ],
      "answer": "Number of 1-bits including parity is odd",
      "markScheme": "Odd parity \u2192 odd count of 1s."
    },
    {
      "id": "q5",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Cloud storage means data is\u2026",
      "options": [
        "Only on a local HDD",
        "Stored on remote servers accessed via network/Internet",
        "Always compressed with lossy methods",
        "Stored in the CIR"
      ],
      "answer": "Stored on remote servers accessed via network/Internet",
      "markScheme": "Cloud = remote networked storage."
    },
    {
      "id": "q6",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "The address bus is used to\u2026",
      "options": [
        "Carry data values between CPU and memory",
        "Carry memory/location addresses",
        "Power the motherboard fans",
        "Display pixels"
      ],
      "answer": "Carry memory/location addresses",
      "markScheme": "Address bus carries addresses."
    },
    {
      "id": "q7",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Which is a typical feature of robotics?",
      "options": [
        "Mechanical actuators to move/interact with environment",
        "Only storing web pages",
        "Replacing the need for binary",
        "Removing the need for algorithms"
      ],
      "answer": "Mechanical actuators to move/interact with environment",
      "markScheme": "Robots sense and act in physical world."
    },
    {
      "id": "q8",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Spyware is malicious software that\u2026",
      "options": [
        "Speeds up downloads",
        "Secretly gathers information about user activity",
        "Defragments disks",
        "Increases colour depth"
      ],
      "answer": "Secretly gathers information about user activity",
      "markScheme": "Spyware steals info."
    },
    {
      "id": "q9",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "A compiler translates\u2026",
      "options": [
        "Machine code into English",
        "High-level source code into machine code (typically whole program)",
        "Images into sound",
        "HTML into MAC addresses"
      ],
      "answer": "High-level source code into machine code (typically whole program)",
      "markScheme": "Compiler translates source\u2192machine code."
    },
    {
      "id": "q10",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "HTTPS uses port 443 commonly and provides\u2026",
      "options": [
        "Unencrypted web pages only",
        "Encrypted communication for web traffic",
        "A type of lossy image format",
        "An optical storage standard"
      ],
      "answer": "Encrypted communication for web traffic",
      "markScheme": "HTTPS encrypts web traffic."
    },
    {
      "id": "q11",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "Convert binary 11111111 to denary.",
      "answer": "255",
      "accept": [
        "255"
      ],
      "markScheme": "All 8 bits set = 255."
    },
    {
      "id": "q12",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "Convert hexadecimal A0 to denary.",
      "answer": "160",
      "accept": [
        "160"
      ],
      "markScheme": "10\u00d716+0=160."
    },
    {
      "id": "q13",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "State what ASCII is used for.",
      "answer": "Representing text characters as numbers",
      "accept": [
        "text",
        "character",
        "letters",
        "symbols"
      ],
      "markScheme": "Character encoding for text."
    },
    {
      "id": "q14",
      "section": "B",
      "type": "written",
      "marks": 4,
      "prompt": "Explain the purpose of the fetch\u2013decode\u2013execute cycle.",
      "markScheme": "CPU repeatedly fetches instruction from memory, decodes it, executes it; fundamental process of running programs.",
      "rubric": "Fetch; decode; execute; ongoing cycle."
    },
    {
      "id": "q15",
      "section": "B",
      "type": "written",
      "marks": 4,
      "prompt": "Describe two differences between HDD and SSD.",
      "markScheme": "HDD magnetic platters/moving parts; SSD flash no moving parts; SSD generally faster/more shock resistant; HDD often cheaper per GB \u2014 any two clear diffs.",
      "rubric": "Two valid distinct differences."
    },
    {
      "id": "q16",
      "section": "B",
      "type": "written",
      "marks": 5,
      "prompt": "Explain what is meant by encryption and why it is used when sending personal data.",
      "markScheme": "Encryption converts data into unreadable form without a key; protects confidentiality if intercepted.",
      "rubric": "Definition; confidentiality/protection reason."
    },
    {
      "id": "q17",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "(a) Describe packet switching. [3]\n(b) Explain two benefits of packet switching compared with sending one continuous stream on a single dedicated path. [3]",
      "markScheme": "(a) Split into packets; routed independently; reassembled. (b) Efficient sharing of links; resilience if a route fails; etc.",
      "rubric": "Packet switching description; two benefits."
    },
    {
      "id": "q18",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "Describe how a checksum is calculated and used to detect errors.",
      "markScheme": "Algorithm produces value from data; sent with data; recalculated at receiver; mismatch \u2192 error.",
      "rubric": "Calculate; send; recalculate; compare."
    },
    {
      "id": "q19",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "An airport uses automated check-in kiosks.\n(a) Identify one input device and one output device on a kiosk. [2]\n(b) Explain two advantages of automation for the airport. [4]",
      "markScheme": "(a) e.g. touchscreen/scanner; printer/screen. (b) Faster service; fewer queues; 24/7; reduced staffing cost \u2014 any two explained.",
      "rubric": "I/O devices; two explained advantages."
    },
    {
      "id": "q20",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "A school is worried about phishing and weak passwords.\nDiscuss each threat and recommend a technical control and a user-education control for each.",
      "markScheme": "Phishing: fake emails/sites; technical filtering/MFA; training to spot fakes. Weak passwords: easy to guess; password policy/managers/MFA; training on strong unique passwords.",
      "rubric": "Two threats each with technical + education control."
    },
    {
      "id": "q21",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "Compare interpreters and compilers, giving one advantage of each.",
      "markScheme": "Interpreter: line-by-line, easier debugging/immediate run; Compiler: whole program to machine code, usually faster execution once compiled. Accept other valid advantages.",
      "rubric": "Clear comparison; one advantage each."
    },
    {
      "id": "q22",
      "section": "C",
      "type": "written",
      "marks": 6,
      "prompt": "A fire service is considering virtual reality (VR) to train new staff for building evacuations.\n(a) Explain how a VR headset creates an immersive training environment. [2]\n(b) Explain two advantages of practising in VR. [2]\n(c) Explain two limitations of VR training. [2]",
      "markScheme": "(a) The headset displays a computer-generated scene and updates the view as the user moves or turns. (b) Trainees can practise dangerous situations safely and repeat different scenarios; one mark for each explained advantage. (c) Equipment can be expensive and simulations cannot fully reproduce real heat, smoke or physical conditions; one mark for each explained limitation. Accept other relevant answers.",
      "rubric": "Computer-generated responsive scene; two explained advantages; two explained limitations."
    },
    {
      "id": "q23",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "(a) Explain colour depth in bitmap images. [3]\n(b) An image is 1024\u00d7768 with 24-bit colour. Show how to calculate the uncompressed size in MB (state whether you used 1000 or 1024 based units). [3]\n(c) Give two reasons a designer might use compression. [2]",
      "markScheme": "(a) Bits per pixel / number of colours available. (b) 1024\u00d7768\u00d724 bits \u2192 bytes \u2192 MB with working. (c) Save space; faster transfer/upload.",
      "rubric": "Colour depth; calculation; two compression reasons."
    }
  ]
};
