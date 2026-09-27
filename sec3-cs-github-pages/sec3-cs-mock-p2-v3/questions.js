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
      "markScheme": "Start a1 b4; after1: a2 b3; after2: a3 b2; loop ends (3<2 false). OUTPUT 3 2.",
      "rubric": "Accurate trace to termination; final output."
    },
    {
      "id": "q10",
      "section": "B",
      "type": "written",
      "marks": 8,
      "prompt": "Array Marks[1:6] stores six marks. Write pseudocode to find and output the lowest mark.",
      "markScheme": "lowest\u2190Marks[1]; FOR i\u21902 TO 6; IF Marks[i]<lowest THEN lowest\u2190Marks[i]; OUTPUT lowest.",
      "rubric": "Initialise; scan; update min; output."
    },
    {
      "id": "q11",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "Write pseudocode that inputs numbers until -1 is entered (sentinel), then outputs how many numbers (excluding -1) were entered.",
      "markScheme": "count\u21900; INPUT n; WHILE n \u2260 -1: count\u2190count+1; INPUT n; OUTPUT count. Accept REPEAT structure carefully.",
      "rubric": "Sentinel loop; count; exclude sentinel; output."
    },
    {
      "id": "q12",
      "section": "C",
      "type": "written",
      "marks": 10,
      "prompt": "Write pseudocode to reverse the contents of array A[1:N] in place (swap elements). Then explain one way to test that your algorithm works.",
      "markScheme": "i\u21901; j\u2190N; WHILE i<j: swap A[i],A[j]; i\u2190i+1; j\u2190j-1. Test with e.g. [1,2,3,4] \u2192 [4,3,2,1].",
      "rubric": "Two-pointer swap logic; sensible test."
    },
    {
      "id": "q13",
      "section": "C",
      "type": "written",
      "marks": 10,
      "prompt": "File stock.txt stores product codes one per line. Write pseudocode to search for a code entered by the user and output \"Found\" or \"Not found\".",
      "markScheme": "INPUT target; OPEN read; found\u2190FALSE; WHILE NOT EOF AND NOT found: READ code; IF code=target THEN found\u2190TRUE; CLOSE; OUTPUT Found/Not found.",
      "rubric": "Read loop; compare; flag; correct messages."
    },
    {
      "id": "q14",
      "section": "C",
      "type": "written",
      "marks": 12,
      "prompt": "(a) Write pseudocode for bubble sort on array Num[1:N] ascending. [8]\n(b) Explain why bubble sort may be inefficient for a very large N. [4]",
      "markScheme": "(a) Nested loops swapping adjacent out-of-order pairs until sorted / standard bubble sort. (b) Many comparisons/swaps; roughly grows quickly with N (quadratic behaviour).",
      "rubric": "Recognisable bubble sort; inefficiency explanation."
    },
    {
      "id": "q15",
      "section": "C",
      "type": "written",
      "marks": 8,
      "prompt": "An algorithm should count vowels in a string Word (letters A,E,I,O,U only, case-insensitive).\n(a) Describe the steps of a suitable algorithm in structured English or pseudocode. [5]\n(b) Give two examples of test data and expected counts. [3]",
      "markScheme": "(a) Initialise count; loop through each character; if vowel then increment; output count. (b) e.g. EDUCATION \u2192 5; MYTH \u2192 0.",
      "rubric": "Clear algorithm; two tests with expected results."
    }
  ]
};