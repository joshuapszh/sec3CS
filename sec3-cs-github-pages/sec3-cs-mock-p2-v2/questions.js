// Original practice questions — NOT from Cambridge papers or school year-end exams.
// Set 2. Total 75 marks.
window.EXAM = {
  "id": "sec3-cs-mock-p2-v2",
  "title": "Sec 3 Computer Science \u2014 Mock Paper 2 (Set 2)",
  "subtitle": "Algorithms & Programming (Chapters 7\u20138) \u00b7 Pseudocode only \u00b7 75 marks \u00b7 1 hour 45 minutes \u00b7 Set 2",
  "durationMinutes": 105,
  "totalMarks": 75,
  "questions": [
    {
      "id": "q1",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Decomposition in problem-solving means\u2026",
      "options": [
        "Ignoring requirements",
        "Breaking a problem into smaller parts",
        "Encrypting the algorithm",
        "Only using FOR loops"
      ],
      "answer": "Breaking a problem into smaller parts",
      "markScheme": "Decomposition = break down."
    },
    {
      "id": "q2",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Which test data type is deliberately invalid?",
      "options": [
        "Normal",
        "Boundary",
        "Erroneous / abnormal",
        "Typical"
      ],
      "answer": "Erroneous / abnormal",
      "markScheme": "Erroneous is invalid on purpose."
    },
    {
      "id": "q3",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "A REPEAT\u2026UNTIL loop is\u2026",
      "options": [
        "Never condition-controlled",
        "Condition-controlled and runs at least once",
        "Always faster than FOR",
        "Only used for file handling"
      ],
      "answer": "Condition-controlled and runs at least once",
      "markScheme": "REPEAT\u2026UNTIL is post-conditioned."
    },
    {
      "id": "q4",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "In a 1D array Name[1:20], what does the 20 represent?",
      "options": [
        "File size",
        "Upper bound / number of elements if starting at 1",
        "CPU cores",
        "Colour depth"
      ],
      "answer": "Upper bound / number of elements if starting at 1",
      "markScheme": "1:20 \u2192 twenty slots if 1-based."
    },
    {
      "id": "q5",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Verification aims to check that data\u2026",
      "options": [
        "Is encrypted",
        "Matches what was intended/entered correctly",
        "Is always within a numeric range",
        "Uses odd parity"
      ],
      "answer": "Matches what was intended/entered correctly",
      "markScheme": "Verification checks accuracy of entry/intention."
    },
    {
      "id": "q6",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "State one reason for using meaningful identifier names in algorithms.",
      "answer": "Easier to understand/maintain",
      "accept": [
        "read",
        "understand",
        "maintain",
        "clear",
        "meaningful"
      ],
      "markScheme": "Readability/maintenance."
    },
    {
      "id": "q7",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "State what nested selection means.",
      "answer": "An IF/CASE inside another IF/CASE",
      "accept": [
        "if inside",
        "selection inside",
        "nested if"
      ],
      "markScheme": "Selection inside selection."
    },
    {
      "id": "q8",
      "section": "B",
      "type": "written",
      "marks": 4,
      "prompt": "Explain the difference between presence check and format check, with an example of each.",
      "markScheme": "Presence: field not left empty (e.g. email required). Format: data matches pattern (e.g. dd/mm/yyyy). ",
      "rubric": "Both definitions + examples."
    },
    {
      "id": "q9",
      "section": "B",
      "type": "written",
      "marks": 6,
      "prompt": "Trace this algorithm. Show values of n and total after each loop iteration, then the OUTPUT.\n\n<pre class=\"pre\">total \u2190 0\nFOR n \u2190 2 TO 5\n    total \u2190 total + n\nNEXT n\nOUTPUT total\n</pre>",
      "markScheme": "n | total\n2 | 2\n3 | 5\n4 | 9\n5 | 14\n\nFinal OUTPUT: 14",
      "rubric": "Correct running totals and final output."
    },
    {
      "id": "q10",
      "section": "B",
      "type": "written",
      "marks": 8,
      "prompt": "Array Temp[1:5] stores five temperatures. Write pseudocode to output how many temperatures are below 0.",
      "markScheme": "Count ← 0\nFOR i ← 1 TO 5\n    IF Temp[i] < 0 THEN\n        Count ← Count + 1\n    ENDIF\nNEXT i\nOUTPUT Count\n\n(Accept equivalent correct pseudocode.)",
      "rubric": "Loop; condition; count; output."
    },
    {
      "id": "q11",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "Write pseudocode that repeatedly inputs a PIN until the user enters 4831, then outputs \"Access granted\". Use a suitable loop.",
      "markScheme": "REPEAT\n    INPUT PIN\nUNTIL PIN = 4831\nOUTPUT \"Access granted\"\n\n(Accept a WHILE loop with a flag.)",
      "rubric": "Loop until match; output success."
    },
    {
      "id": "q12",
      "section": "C",
      "type": "written",
      "marks": 10,
      "prompt": "Array Sales[1:7] stores daily sales. Write pseudocode to calculate and output the average sales. Then give two test cases (with expected averages) you would use.",
      "markScheme": "Total ← 0\nFOR i ← 1 TO 7\n    Total ← Total + Sales[i]\nNEXT i\nAverage ← Total / 7\nOUTPUT Average\n\nExample tests:\n- All seven values = 10: average 10\n- Mixed values e.g. 10,20,30,40,50,60,70: average 40",
      "rubric": "Average algorithm; two tests with expected results."
    },
    {
      "id": "q13",
      "section": "C",
      "type": "written",
      "marks": 10,
      "prompt": "A file classmates.txt stores one name per line. Write pseudocode to count how many names are in the file and output the count. Assume the file exists.",
      "markScheme": "OPENFILE \"classmates.txt\" FOR READ\nCount ← 0\nWHILE NOT EOF(\"classmates.txt\")\n    READFILE \"classmates.txt\", Name\n    Count ← Count + 1\nENDWHILE\nCLOSEFILE \"classmates.txt\"\nOUTPUT Count\n\n(Accept equivalent file-handling pseudocode.)",
      "rubric": "File open; loop to EOF; count; close; output."
    },
    {
      "id": "q14",
      "section": "C",
      "type": "written",
      "marks": 12,
      "prompt": "(a) Write pseudocode for a linear search that looks for value Target in array Data[1:N] and outputs the index if found, or \"Missing\". [8]\n(b) State the best-case and worst-case number of comparisons for your linear search in terms of N. [4]",
      "markScheme": "(a)\nINPUT Target\nFound ← FALSE\nFOR i ← 1 TO N\n    IF Data[i] = Target THEN\n        OUTPUT i\n        Found ← TRUE\n    ENDIF\nNEXT i\nIF Found = FALSE THEN\n    OUTPUT \"Missing\"\nENDIF\n\n(b) Best case: 1 comparison (Target is first). Worst case: N comparisons (Target last or not present).",
      "rubric": "Working search; not-found case; best/worst case."
    },
    {
      "id": "q15",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "The following algorithm should output YES if X is between 10 and 20 inclusive, otherwise NO:\n<pre class=\"pre\">IF X > 10 AND X < 20 THEN\n    OUTPUT \"YES\"\nELSE\n    OUTPUT \"NO\"\nENDIF\n</pre>\n(a) Explain the logic error using X=10 as an example. [3]\n(b) Rewrite the condition correctly. [2]\n(c) Explain why boundary test data is important here. [3]",
      "markScheme": "(a) When X = 10, the condition X > 10 AND X < 20 is false, so the algorithm outputs \"NO\". 10 should be accepted as inclusive.\n\n(b) X >= 10 AND X <= 20\n\n(c) Boundary values (10 and 20) check whether the ends of the range are included correctly and catch off-by-one errors.",
      "rubric": "Explain exclusion; fix inequalities; boundary importance."
    }
  ]
};