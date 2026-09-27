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
      prompt: "In pseudocode, which structure repeats a fixed number of times?",
      options: ["IF…THEN…ELSE", "CASE OF", "FOR…TO…NEXT", "INPUT only"],
      answer: "FOR…TO…NEXT",
      markScheme: "FOR loops are count-controlled."
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
      prompt: "Explain the difference between a count-controlled loop and a condition-controlled loop. Give one typical use for each.",
      markScheme: "Count-controlled: repeats a set number of times (FOR). Condition-controlled: repeats until/while a condition is met (WHILE/REPEAT). Uses: e.g. process 10 scores; keep asking until valid password.",
      rubric: "Clear difference (2) + sensible example use for each (2)."
    },
    {
      id: "q9",
      section: "B",
      type: "written",
      marks: 6,
      prompt: "Complete the trace table for the following algorithm. Use one row per loop iteration after the assignments inside the loop.\n\n<pre class=\"pre\">x ← 3\ny ← 1\nFOR i ← 1 TO 4\n    y ← y + x\n    x ← x - 1\nNEXT i\nOUTPUT y\n</pre>\n\nShow columns for i, x, y. Also state the final OUTPUT.",
      markScheme: "Start x=3,y=1. i=1: y=4,x=2; i=2: y=6,x=1; i=3: y=7,x=0; i=4: y=7,x=-1. OUTPUT 7.",
      rubric: "Credit accurate tracing of i,x,y across iterations and final output 7."
    },
    {
      id: "q10",
      section: "B",
      type: "written",
      marks: 8,
      prompt: "A library stores the number of books borrowed each day for 7 days in an array DayCount[1:7].\nWrite pseudocode that:\n- finds the total number of books borrowed over the 7 days\n- finds the highest daily count\n- outputs the total and the highest count.",
      markScheme: "Initialise total←0 and highest←DayCount[1] (or 0 then update). Loop i←1 to 7: total←total+DayCount[i]; if DayCount[i]>highest then highest←DayCount[i]. Output total and highest. Accept equivalent pseudocode.",
      rubric: "Loop over array; accumulate total; track max; sensible initialisation; outputs."
    },
    {
      id: "q11",
      section: "C",
      type: "written",
      marks: 8,
      prompt: "A museum kiosk asks visitors to enter their age. Ages must be whole numbers from 5 to 120 inclusive. If invalid, the kiosk should keep asking until a valid age is entered, then output \"OK\".\nWrite pseudocode for this validation routine.",
      markScheme: "REPEAT / WHILE structure; INPUT age; check age>=5 AND age<=120 (and ideally integer); loop until valid; OUTPUT OK. Accept equivalent.",
      rubric: "Input; range validation; loop until valid; success output; clear pseudocode structure."
    },
    {
      id: "q12",
      section: "C",
      type: "written",
      marks: 10,
      prompt: "An array Score[1:5] stores five test marks. Write pseudocode that counts how many marks are greater than or equal to 50 and outputs that count. Then explain how you would test your algorithm (identify two test cases and expected results).",
      markScheme: "count←0; FOR i←1 TO 5; IF Score[i] >= 50 THEN count←count+1; OUTPUT count. Tests e.g. all below 50 → 0; mixed → correct count; all >=50 → 5; boundary 50 counts.",
      rubric: "Working pseudocode (6); two meaningful tests with expected outcomes (4)."
    },
    {
      id: "q13",
      section: "C",
      type: "written",
      marks: 10,
      prompt: "A text file results.txt stores one student mark per line (integer). Write pseudocode to read all marks from the file, calculate the average mark, and output the average. Assume the file is not empty.",
      markScheme: "OPEN results.txt for read; total←0; n←0; WHILE NOT EOF: READ mark; total←total+mark; n←n+1; CLOSE file; average←total/n; OUTPUT average. Accept equivalent file-handling pseudocode.",
      rubric: "Open/read loop/EOF; accumulate; count; close; compute average; output."
    },
    {
      id: "q14",
      section: "C",
      type: "written",
      marks: 12,
      prompt: "A shop records product codes in an array Code[1:N] and prices in Price[1:N] (same index = same product).\n(a) Write pseudocode that searches for a product code entered by the user and outputs its price, or \"Not found\". [8]\n(b) State whether your search is more like a linear search or a binary search and justify your answer. [2]\n(c) Identify one change you would need before a binary search could be used reliably. [2]",
      markScheme: "(a) INPUT target; found←FALSE; loop i←1 to N; if Code[i]=target then output Price[i]; found←TRUE; break/exit; after loop if not found output Not found. (b) Linear — checks items in order / no assumption of sorted codes. (c) Codes must be sorted (and stay sorted) for binary search.",
      rubric: "Search logic with not-found case; identify linear; sorting prerequisite for binary."
    },
    {
      id: "q15",
      section: "C",
      type: "written",
      marks: 8,
      prompt: "An algorithm is meant to output the larger of two numbers A and B, but it contains errors:\n\n<pre class=\"pre\">IF A > B THEN\n    OUTPUT B\nELSE\n    OUTPUT A\nENDIF\n</pre>\n(a) Identify the logic error. [2]\n(b) Rewrite the corrected pseudocode. [3]\n(c) Explain how a trace table with A=8, B=5 would help show the original algorithm is wrong. [4]",
      markScheme: "(a) Outputs the smaller number / branches swapped. (b) IF A>B THEN OUTPUT A ELSE OUTPUT B (handle equal as either). (c) Trace shows when A=8,B=5 original outputs 5 not 8; demonstrates wrong path.",
      rubric: "Identify swap error; correct IF; explain trace revealing wrong output."
    }
  ]
};
