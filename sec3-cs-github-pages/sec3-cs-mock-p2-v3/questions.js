// Original practice questions — NOT from Cambridge papers or school year-end exams.
// Set 3. Total 75 marks.
window.EXAM = {
  "id": "sec3-cs-mock-p2-v3",
  "title": "Sec 3 Computer Science \u2014 Mock Paper 2 (Set 3)",
  "subtitle": "Algorithms & Programming (Chapters 7\u20138) \u00b7 Pseudocode only \u00b7 75 marks \u00b7 1 hour 45 minutes \u00b7 Set 3",
  "durationMinutes": 105,
  "totalMarks": 75,
  "questions": [
    {
      "id": "q1",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Abstraction means\u2026",
      "options": [
        "Adding more detail than needed",
        "Focusing on important details and hiding unnecessary ones",
        "Only using binary search",
        "Deleting test data"
      ],
      "answer": "Focusing on important details and hiding unnecessary ones",
      "markScheme": "Abstraction hides unnecessary detail."
    },
    {
      "id": "q2",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "A dry run of an algorithm is\u2026",
      "options": [
        "Compiling to machine code",
        "Manually working through the steps, often with a trace table",
        "Uploading to the cloud",
        "Formatting a hard disk"
      ],
      "answer": "Manually working through the steps, often with a trace table",
      "markScheme": "Dry run = manual walkthrough."
    },
    {
      "id": "q3",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Which structure is selection?",
      "options": [
        "FOR\u2026NEXT",
        "WHILE\u2026DO",
        "IF\u2026THEN\u2026ELSE",
        "OUTPUT"
      ],
      "answer": "IF\u2026THEN\u2026ELSE",
      "markScheme": "IF is selection."
    },
    {
      "id": "q4",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "An off-by-one error often happens when\u2026",
      "options": [
        "Using cloud storage",
        "Loop bounds/indexes are wrong by one",
        "Colour depth is 24-bit",
        "Using HTTPS"
      ],
      "answer": "Loop bounds/indexes are wrong by one",
      "markScheme": "Classic loop/index mistake."
    },
    {
      "id": "q5",
      "section": "A",
      "type": "mcq",
      "marks": 1,
      "prompt": "Opening a text file for APPEND usually means\u2026",
      "options": [
        "Delete all existing content",
        "Add new data at the end",
        "Encrypt the file",
        "Convert it to an image"
      ],
      "answer": "Add new data at the end",
      "markScheme": "APPEND adds at end."
    },
    {
      "id": "q6",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "State what is meant by iteration.",
      "answer": "Repetition of a set of steps/looping",
      "accept": [
        "repeat",
        "loop",
        "iteration"
      ],
      "markScheme": "Repeating steps / loops."
    },
    {
      "id": "q7",
      "section": "B",
      "type": "short",
      "marks": 2,
      "prompt": "Give one reason to use arrays.",
      "answer": "Store many related values under one name",
      "accept": [
        "many values",
        "list",
        "related data",
        "index"
      ],
      "markScheme": "Store lists of related values."
    },
    {
      "id": "q8",
      "section": "B",
      "type": "written",
      "marks": 4,
      "prompt": "Explain the difference between a WHILE loop and a FOR loop.",
      "markScheme": "WHILE: condition-controlled, repeats while condition true (unknown count). FOR: count-controlled, repeats fixed number of times.",
      "rubric": "Condition vs count control explained."
    },
    {
      "id": "q9",
      "section": "B",
      "type": "written",
      "marks": 6,
      "prompt": "Complete a trace for:\n<pre class=\"pre\">a \u2190 1\nb \u2190 4\nWHILE a < b\n    a \u2190 a + 1\n    b \u2190 b - 1\nENDWHILE\nOUTPUT a, b\n</pre>\nShow a and b after each loop check/body until the loop ends, and the final OUTPUT.",
      "markScheme": "a | b | condition a < b\n1 | 4 | TRUE (enter loop)\n2 | 3 | TRUE (enter loop)\n3 | 2 | FALSE (leave loop)\n\nFinal OUTPUT: 3 2",
      "rubric": "Accurate trace to termination; final output."
    },
    {
      "id": "q10",
      "section": "B",
      "type": "written",
      "marks": 8,
      "prompt": "Array Marks[1:6] stores six marks. Write pseudocode to find and output the lowest mark.",
      "markScheme": "Lowest ← Marks[1]\nFOR i ← 2 TO 6\n    IF Marks[i] < Lowest THEN\n        Lowest ← Marks[i]\n    ENDIF\nNEXT i\nOUTPUT Lowest\n\n(Accept equivalent correct pseudocode.)",
      "rubric": "Initialise; scan; update min; output."
    },
    {
      "id": "q11",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "Write pseudocode that inputs numbers until -1 is entered (sentinel), then outputs how many numbers (excluding -1) were entered.",
      "markScheme": "Count ← 0\nINPUT N\nWHILE N <> -1\n    Count ← Count + 1\n    INPUT N\nENDWHILE\nOUTPUT Count\n\n(Accept REPEAT...UNTIL with care so that -1 is not counted.)",
      "rubric": "Sentinel loop; count; exclude sentinel; output."
    },
    {
      "id": "q12",
      "section": "C",
      "type": "written",
      "marks": 10,
      "prompt": "Write pseudocode to reverse the contents of array A[1:N] in place (swap elements). Then explain one way to test that your algorithm works.",
      "markScheme": "i ← 1\nj ← N\nWHILE i < j\n    Temp ← A[i]\n    A[i] ← A[j]\n    A[j] ← Temp\n    i ← i + 1\n    j ← j - 1\nENDWHILE\n\nTest example: start with A = [1,2,3,4] → after reverse A = [4,3,2,1].",
      "rubric": "Two-pointer swap logic; sensible test."
    },
    {
      "id": "q13",
      "section": "C",
      "type": "written",
      "marks": 10,
      "prompt": "File stock.txt stores product codes one per line. Write pseudocode to search for a code entered by the user and output \"Found\" or \"Not found\".",
      "markScheme": "INPUT Target\nOPENFILE \"stock.txt\" FOR READ\nFound ← FALSE\nWHILE NOT EOF(\"stock.txt\") AND Found = FALSE\n    READFILE \"stock.txt\", Code\n    IF Code = Target THEN\n        Found ← TRUE\n    ENDIF\nENDWHILE\nCLOSEFILE \"stock.txt\"\nIF Found = TRUE THEN\n    OUTPUT \"Found\"\nELSE\n    OUTPUT \"Not found\"\nENDIF\n\n(Accept equivalent file-handling / search pseudocode.)",
      "rubric": "Read loop; compare; flag; correct messages."
    },
    {
      "id": "q14",
      "section": "C",
      "type": "written",
      "marks": 12,
      "prompt": "(a) Write pseudocode for bubble sort on array Num[1:N] ascending. [8]\n(b) Explain why bubble sort may be inefficient for a very large N. [4]",
      "markScheme": "(a)\nFOR i ← 1 TO N - 1\n    FOR j ← 1 TO N - i\n        IF Num[j] > Num[j + 1] THEN\n            Temp ← Num[j]\n            Num[j] ← Num[j + 1]\n            Num[j + 1] ← Temp\n        ENDIF\n    NEXT j\nNEXT i\n\n(Accept equivalent bubble sort.)\n\n(b) Many comparisons and swaps; the work grows roughly with N squared, so it becomes slow for a very large N.",
      "rubric": "Recognisable bubble sort; inefficiency explanation."
    },
    {
      "id": "q15",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "An algorithm should count vowels in a string Word (letters A,E,I,O,U only, case-insensitive).\n(a) Describe the steps of a suitable algorithm in structured English or pseudocode. [5]\n(b) Give two examples of test data and expected counts. [3]",
      "markScheme": "(a)\nCount ← 0\nFOR i ← 1 TO LENGTH(Word)\n    Letter ← UPPERCASE(Word[i])\n    IF Letter = \"A\" OR Letter = \"E\" OR Letter = \"I\" OR Letter = \"O\" OR Letter = \"U\" THEN\n        Count ← Count + 1\n    ENDIF\nNEXT i\nOUTPUT Count\n\n(b) Example tests: EDUCATION → 5; MYTH → 0",
      "rubric": "Clear algorithm; two tests with expected results."
    }
  ]
};