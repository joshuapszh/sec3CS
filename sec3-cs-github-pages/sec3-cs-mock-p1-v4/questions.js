/* Independently written original revision questions. No confidential exam items. */
window.EXAM={
  "id": "sec3-cs-mock-p1-v4",
  "title": "Secondary 3 Computer Science · Paper 1 Set 4",
  "subtitle": "Computer systems · Chapters 1–6 · Unlimited time",
  "totalMarks": 75,
  "questions": [
    {
      "id": "q1",
      "type": "written",
      "marks": 12,
      "topic": "Data representation",
      "section": "Data representation",
      "prompt": "(a) Convert binary 01011010 to denary with working. [2]\n(b) Express denary 214 in hexadecimal with working. [2]\n(c) Add unsigned binary 01101101 and 10110100. State the retained 8-bit result and explain any overflow. [3]\n(d) Represent negative 19 using 8-bit two's complement. Show your method. [2]\n(e) A mono audio sample lasts 10 seconds at 16 000 samples/s, 8 bits/sample. Calculate size in bytes, and explain why lossless compression may be suitable. [3]",
      "markScheme": "(a) 64+16+8+2=90.\n(b) 214=13×16+6, so D6.\n(c) 109+180=289=1 00100001, retained 00100001; exceeds unsigned maximum 255.\n(d) 19=00010011, invert to 11101100, add 1 gives 11101101.\n(e) 10×16000×8/8=160000 bytes; lossless retains exact data.",
      "points": [
        {
          "text": "Correct place values",
          "marks": 1
        },
        {
          "text": "90",
          "marks": 1
        },
        {
          "text": "Correct hexadecimal method",
          "marks": 1
        },
        {
          "text": "D6",
          "marks": 1
        },
        {
          "text": "Correct full binary sum",
          "marks": 1
        },
        {
          "text": "Retained result 00100001",
          "marks": 1
        },
        {
          "text": "Overflow explained",
          "marks": 1
        },
        {
          "text": "Two's complement method",
          "marks": 1
        },
        {
          "text": "11101101",
          "marks": 1
        },
        {
          "text": "Correct size formula",
          "marks": 1
        },
        {
          "text": "160000 bytes",
          "marks": 1
        },
        {
          "text": "Lossless preserves original",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": false
    },
    {
      "id": "q2",
      "type": "written",
      "marks": 11,
      "topic": "Data transmission",
      "section": "Data transmission",
      "prompt": "An island observatory sends readings to headquarters.\n(a) Describe two items of information in a packet header and one purpose of the trailer. [3]\n(b) Explain how routed packets can arrive out of order and how the complete message is reconstructed. [3]\n(c) Distinguish simplex and full-duplex transmission and state which fits a two-way voice meeting. [2]\n(d) Explain the purpose of an acknowledgement in reliable transmission. [1]\n(e) Explain one use each of encryption and a cryptographic hash. [2]",
      "markScheme": "(a) Header may contain source, destination or packet sequence; trailer may contain error-check data.\n(b) Packets take different routes with differing delays; receiver orders by sequence numbers and reassembles.\n(c) Simplex one direction; full-duplex both at once; choose full-duplex.\n(d) Confirms receipt so missing packets can be retransmitted.\n(e) Encryption protects confidentiality; a hash checks integrity without recovering original content.",
      "points": [
        {
          "text": "Header item 1",
          "marks": 1
        },
        {
          "text": "Header item 2",
          "marks": 1
        },
        {
          "text": "Trailer role",
          "marks": 1
        },
        {
          "text": "Alternative network routes",
          "marks": 1
        },
        {
          "text": "Arrival order changes",
          "marks": 1
        },
        {
          "text": "Ordering and reassembly",
          "marks": 1
        },
        {
          "text": "Simplex meaning",
          "marks": 1
        },
        {
          "text": "Full-duplex and choice",
          "marks": 1
        },
        {
          "text": "Acknowledgement role",
          "marks": 1
        },
        {
          "text": "Encryption use",
          "marks": 1
        },
        {
          "text": "Hash use",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": false
    },
    {
      "id": "q3",
      "type": "written",
      "marks": 12,
      "topic": "Hardware",
      "section": "Hardware",
      "prompt": "(a) Explain the functions of the control unit, accumulator, address bus and data bus in processing an instruction. [4]\n(b) Explain how multiple CPU cores and more cache may each help performance. [2]\n(c) A data archive stores many terabytes rarely accessed. Recommend an economical storage medium and justify it. [2]\n(d) Explain a feedback-controlled irrigation system using a moisture sensor and water valve. [2]\n(e) Explain how a network switch differs from a router. [2]",
      "markScheme": "(a) CU coordinates instructions; accumulator holds intermediate arithmetic results; address bus carries addresses; data bus carries data.\n(b) Cores support parallel work; cache reduces main-memory access.\n(c) Hard disks have relatively low cost per TB for large archives.\n(d) Sensor measures moisture; controller compares to threshold and opens/closes valve, repeating.\n(e) Switch forwards within a local network; router transfers packets between networks.",
      "points": [
        {
          "text": "CU role",
          "marks": 1
        },
        {
          "text": "Accumulator role",
          "marks": 1
        },
        {
          "text": "Address bus role",
          "marks": 1
        },
        {
          "text": "Data bus role",
          "marks": 1
        },
        {
          "text": "Core benefit",
          "marks": 1
        },
        {
          "text": "Cache benefit",
          "marks": 1
        },
        {
          "text": "Storage selection",
          "marks": 1
        },
        {
          "text": "Linked cost justification",
          "marks": 1
        },
        {
          "text": "Measurement and comparison",
          "marks": 1
        },
        {
          "text": "Actuation and feedback",
          "marks": 1
        },
        {
          "text": "Switch role",
          "marks": 1
        },
        {
          "text": "Router role",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": false
    },
    {
      "id": "q4",
      "type": "written",
      "marks": 10,
      "topic": "Software",
      "section": "Software",
      "prompt": "(a) Distinguish off-the-shelf applications from bespoke applications with examples. [2]\n(b) Describe three ways an operating system supports a shared multi-user workstation. [3]\n(c) Explain what a device driver does and describe two consequences of an incompatible printer driver. [3]\n(d) Recommend compiler or interpreter when an organisation must distribute an executable without distributing source code. Justify. [2]",
      "markScheme": "(a) Off-the-shelf serves general purposes, e.g. spreadsheet; bespoke is developed for one organisation, e.g. custom admissions platform.\n(b) Account management, permissions and resource scheduling.\n(c) Drivers enable OS-hardware communication; incorrect drivers may prevent printing or cause errors/instability.\n(d) A compiler translates program to machine code/executable before running.",
      "points": [
        {
          "text": "Off-the-shelf meaning/example",
          "marks": 1
        },
        {
          "text": "Bespoke meaning/example",
          "marks": 1
        },
        {
          "text": "OS account controls",
          "marks": 1
        },
        {
          "text": "OS permissions",
          "marks": 1
        },
        {
          "text": "OS resource management",
          "marks": 1
        },
        {
          "text": "Device driver role",
          "marks": 1
        },
        {
          "text": "One consequence",
          "marks": 1
        },
        {
          "text": "Another consequence",
          "marks": 1
        },
        {
          "text": "Compiler chosen",
          "marks": 1
        },
        {
          "text": "Compiler reason",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": false
    },
    {
      "id": "q5",
      "type": "written",
      "marks": 15,
      "topic": "Internet and security",
      "section": "Internet and security",
      "prompt": "A community theatre sells tickets online.\n(a) Explain how entering its domain name causes a browser to obtain and render a webpage, mentioning DNS, IP address, web server and HTTPS. [4]\n(b) Distinguish authentication from authorisation using theatre accounts. [2]\n(c) Explain three measures for securing a cloud-based member database. [3]\n(d) An employee receives an unexpected compressed attachment appearing to come from a ticket supplier. Explain two associated threats and two protective actions. [4]\n(e) State one benefit and one risk of browser-saved passwords. [2]",
      "markScheme": "(a) DNS returns server IP; browser uses IP to connect over HTTPS; server returns page resources; browser renders them.\n(b) Authentication checks identity; authorisation limits actions, such as manager-only refunds.\n(c) Least-privilege access, encryption, tested backups.\n(d) Malware or credential theft; verify sender separately and block/scan suspicious file, with explanation.\n(e) Convenience versus theft if device/browser is compromised.",
      "points": [
        {
          "text": "DNS lookup",
          "marks": 1
        },
        {
          "text": "IP is used",
          "marks": 1
        },
        {
          "text": "HTTPS server request",
          "marks": 1
        },
        {
          "text": "Page displayed",
          "marks": 1
        },
        {
          "text": "Authentication distinction",
          "marks": 1
        },
        {
          "text": "Authorisation distinction",
          "marks": 1
        },
        {
          "text": "Cloud security control 1",
          "marks": 1
        },
        {
          "text": "Control 2",
          "marks": 1
        },
        {
          "text": "Control 3",
          "marks": 1
        },
        {
          "text": "Threat 1",
          "marks": 1
        },
        {
          "text": "Threat 2",
          "marks": 1
        },
        {
          "text": "Protective action 1 explained",
          "marks": 1
        },
        {
          "text": "Protective action 2 explained",
          "marks": 1
        },
        {
          "text": "Benefit",
          "marks": 1
        },
        {
          "text": "Risk",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": false
    },
    {
      "id": "q6",
      "type": "written",
      "marks": 15,
      "topic": "Emerging technologies",
      "section": "Emerging technologies",
      "prompt": "A city uses road sensors to predict congestion and change traffic-light timings.\n(a) Explain the sensing, processing, decision and actuation cycle. [4]\n(b) Evaluate two advantages and two disadvantages of using this automated system. [4]\n(c) Explain the difference between rule-based expert systems and machine-learning prediction systems. [3]\n(d) Describe two safety arrangements for monitoring or overriding the automation. [2]\n(e) Explain one privacy concern and one technical limitation of training with traffic-camera footage. [2]",
      "markScheme": "(a) Sensors measure queues; CPU receives readings; compares or predicts traffic; signals lights, repeating.\n(b) Reduced waiting and responsiveness; setup costs and erroneous/biased sensors.\n(c) Expert systems rely on explicit rules/knowledge and inference; ML learns patterns from examples.\n(d) Manual override and fail-safe mode/alerts.\n(e) Cameras collect identifiable data; nonrepresentative footage reduces prediction reliability.",
      "points": [
        {
          "text": "Sensor input",
          "marks": 1
        },
        {
          "text": "Processed measurements",
          "marks": 1
        },
        {
          "text": "Decision process",
          "marks": 1
        },
        {
          "text": "Actuation feedback",
          "marks": 1
        },
        {
          "text": "Advantage 1",
          "marks": 1
        },
        {
          "text": "Advantage 2",
          "marks": 1
        },
        {
          "text": "Disadvantage 1",
          "marks": 1
        },
        {
          "text": "Disadvantage 2",
          "marks": 1
        },
        {
          "text": "Knowledge base rules",
          "marks": 1
        },
        {
          "text": "Inference mechanism",
          "marks": 1
        },
        {
          "text": "ML training data",
          "marks": 1
        },
        {
          "text": "Manual override",
          "marks": 1
        },
        {
          "text": "Fail-safe or alerts",
          "marks": 1
        },
        {
          "text": "Privacy",
          "marks": 1
        },
        {
          "text": "Technical limitation",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": false
    }
  ]
};
