// Original practice questions — NOT from Cambridge papers or school year-end exams.
// Scope: Paper 2 style, Chapters 7–8 only (algorithms & programming). Pseudocode only. 75 marks.
window.EXAM = {
  id: "sec3-cs-mock-p2",
  title: "Sec 3 Computer Science — Mock Paper 2",
  subtitle: "Algorithms & Programming (Chapters 7–8) · Pseudocode only · 75 marks · 1 hour 45 minutes",
  durationMinutes: 105,
  totalMarks: 75,
  questions: [
    {
      id: "q1",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "Which stage of the program development life cycle usually comes first?",
      options: ["Coding", "Analysis", "Maintenance", "Execution"],
      answer: "Analysis",
      markScheme: "Analysis (understanding the problem) comes before design/coding."
    },
    {
      id: "q2",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "A trace table is mainly used to…",
      options: ["Encrypt source code", "Follow variable values through an algorithm", "Compile pseudocode to machine code", "Draw a network topology"],
      answer: "Follow variable values through an algorithm",
      markScheme: "Trace tables track variables/outputs step by step."
    },
    {
      id: "q3",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "Which validation check is most suitable to ensure a quantity is between 1 and 50 inclusive?",
      options: ["Format check", "Range check", "Length check", "Presence check only"],
      answer: "Range check",
      markScheme: "Range check tests that a value lies within limits."
    },
    {
      id: "q4",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "In a flowchart, which symbol is normally used for a decision (selection)?",
      options: ["Rectangle (process)", "Diamond", "Parallelogram (input/output)", "Oval / rounded rectangle (terminator)"],
      answer: "Diamond",
      markScheme: "Decisions use a diamond symbol with Yes/No (or True/False) branches."
    },
    {
      id: "q5",
      section: "A",
      type: "mcq",
      marks: 1,
      prompt: "An array is best described as…",
      options: ["A single stored value", "A collection of values under one name, accessed by index", "A type of secondary storage device", "A network protocol"],
      answer: "A collection of values under one name, accessed by index",
      markScheme: "Arrays store multiple values indexed by position."
    },
    {
      id: "q6",
      section: "B",
      type: "short",
      marks: 2,
      prompt: "State what is meant by a syntax error.",
      answer: "An error in the rules/grammar of the language/pseudocode",
      accept: ["syntax", "grammar", "rules of the language", "incorrect spelling of keyword"],
      markScheme: "Breaks the grammar/rules of the language (e.g. misspelt keyword, missing quotes)."
    },
    {
      id: "q7",
      section: "B",
      type: "short",
      marks: 2,
      prompt: "State what is meant by a logic error.",
      answer: "The program runs but produces the wrong result",
      accept: ["wrong result", "incorrect output", "runs but wrong", "logic"],
      markScheme: "Code runs but the algorithm/result is incorrect."
    },
    {
      id: "q8",
      section: "B",
      type: "written",
      marks: 4,
      prompt: "Draw a flowchart for this algorithm (you may draw on paper and describe it clearly in the answer box using standard flowchart symbols and arrows):\n\n<pre class=\"pre\">INPUT Password\nIF Password = \"secret\" THEN\n    OUTPUT \"Access granted\"\nELSE\n    OUTPUT \"Access denied\"\nENDIF\n</pre>\n\nYour flowchart must include: a start and end terminator, an input for Password, a decision, and the two possible outputs.",
      markScheme: "Award marks for a correct flowchart structure, for example:\n\n[Start] (terminator)\n    ↓\n[INPUT Password] (input/output)\n    ↓\n<Password = \"secret\"?> (decision diamond)\n    Yes → [OUTPUT \"Access granted\"] → [End]\n    No  → [OUTPUT \"Access denied\"] → [End]\n\nMark points: start/end terminators; input Password; decision with two branches; correct outputs on each branch. Accept equivalent layout.",
      rubric: "Terminator; input; diamond decision; both outputs; sensible flow."
    },
    {
      id: "q9",
      section: "B",
      type: "written",
      marks: 6,
      prompt: "Complete the trace table for the following algorithm. Use one row per loop iteration after the assignments inside the loop.\n\n<pre class=\"pre\">x ← 3\ny ← 1\nFOR i ← 1 TO 4\n    y ← y + x\n    x ← x - 1\nNEXT i\nOUTPUT y\n</pre>\n\nShow columns for i, x, y. Also state the final OUTPUT.",
      markScheme: "Trace table:\n\ni | x | y\n1 | 2 | 4\n2 | 1 | 6\n3 | 0 | 7\n4 | -1 | 7\n\nFinal OUTPUT: 7",
      rubric: "Credit accurate tracing of i,x,y across iterations and final output 7."
    },
    {
      id: "q10",
      section: "B",
      type: "written",
      marks: 8,
      prompt: "A library stores the number of books borrowed each day for 7 days in an array DayCount[1:7].\nWrite pseudocode that:\n- finds the total number of books borrowed over the 7 days\n- finds the highest daily count\n- outputs the total and the highest count.",
      markScheme: "total ← 0\nhighest ← DayCount[1]\nFOR i ← 1 TO 7\n    total ← total + DayCount[i]\n    IF DayCount[i] > highest THEN\n        highest ← DayCount[i]\n    ENDIF\nNEXT i\nOUTPUT total\nOUTPUT highest\n\n(Accept equivalent correct pseudocode.)",
      rubric: "Loop over array; accumulate total; track max; sensible initialisation; outputs."
    },
    {
      id: "q11",
      section: "C",
      type: "written",
      marks: 8,
      prompt: "A museum kiosk asks visitors to enter their age. Ages must be whole numbers from 5 to 120 inclusive. If invalid, the kiosk should keep asking until a valid age is entered, then output \"OK\".\nWrite pseudocode for this validation routine.",
      markScheme: "REPEAT\n    INPUT Age\nUNTIL Age >= 5 AND Age <= 120\nOUTPUT \"OK\"\n\n(Accept WHILE with a flag, or a message for invalid ages.)",
      rubric: "Input; range validation; loop until valid; success output; clear pseudocode structure."
    },
    {
      id: "q12",
      section: "C",
      type: "written",
      marks: 10,
      prompt: "An array Score[1:5] stores five test marks. Write pseudocode that counts how many marks are greater than or equal to 50 and outputs that count. Then explain how you would test your algorithm (identify two test cases and expected results).",
      markScheme: "Count ← 0\nFOR i ← 1 TO 5\n    IF Score[i] >= 50 THEN\n        Count ← Count + 1\n    ENDIF\nNEXT i\nOUTPUT Count\n\nExample tests:\n- All marks below 50: output 0\n- Boundary mark 50: counted as a pass\n- All marks >= 50: output 5",
      rubric: "Working pseudocode (6); two meaningful tests with expected outcomes (4)."
    },
    {
      id: "q13",
      section: "C",
      type: "written",
      marks: 10,
      prompt: "A text file results.txt stores one student mark per line (integer). Write pseudocode to read all marks from the file, calculate the average mark, and output the average. Assume the file is not empty.",
      markScheme: "OPENFILE \"results.txt\" FOR READ\nTotal ← 0\nN ← 0\nWHILE NOT EOF(\"results.txt\")\n    READFILE \"results.txt\", Mark\n    Total ← Total + Mark\n    N ← N + 1\nENDWHILE\nCLOSEFILE \"results.txt\"\nAverage ← Total / N\nOUTPUT Average\n\n(Accept equivalent file-handling pseudocode.)",
      rubric: "Open/read loop/EOF; accumulate; count; close; compute average; output."
    },
    {
      id: "q14",
      section: "C",
      type: "written",
      marks: 12,
      prompt: "A shop records product codes in an array Code[1:N] and prices in Price[1:N] (same index = same product).\n(a) Write pseudocode that searches for a product code entered by the user and outputs its price, or \"Not found\". [8]\n(b) State whether your search is more like a linear search or a binary search and justify your answer. [2]\n(c) Identify one change you would need before a binary search could be used reliably. [2]",
      markScheme: "(a)\nINPUT Target\nFound ← FALSE\nFOR i ← 1 TO N\n    IF Code[i] = Target THEN\n        OUTPUT Price[i]\n        Found ← TRUE\n    ENDIF\nNEXT i\nIF Found = FALSE THEN\n    OUTPUT \"Not found\"\nENDIF\n\n(b) Linear search - checks items in order; does not need the codes to be sorted.\n\n(c) The Code array would need to be sorted (and kept sorted) before binary search could be used reliably.",
      rubric: "Search logic with not-found case; identify linear; sorting prerequisite for binary."
    },
    {
      id: "q15",
      section: "C",
      type: "written",
      marks: 8,
      prompt: "An algorithm is meant to output the larger of two numbers A and B, but it contains errors:\n\n<pre class=\"pre\">IF A > B THEN\n    OUTPUT B\nELSE\n    OUTPUT A\nENDIF\n</pre>\n(a) Identify the logic error. [2]\n(b) Rewrite the corrected pseudocode. [3]\n(c) Explain how a trace table with A=8, B=5 would help show the original algorithm is wrong. [4]",
      markScheme: "(a) The branches are swapped / it outputs the smaller number instead of the larger.\n\n(b)\nIF A > B THEN\n    OUTPUT A\nELSE\n    OUTPUT B\nENDIF\n\n(Accept either value when A = B.)\n\n(c) With A = 8 and B = 5, a trace shows the IF is true so the original algorithm outputs B (5), which is not the larger value.",
      rubric: "Identify swap error; correct IF; explain trace revealing wrong output."
    }
  ]
};
