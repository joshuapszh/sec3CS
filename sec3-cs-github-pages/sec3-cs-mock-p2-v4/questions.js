/* Original revision set, not the confidential examination. */
window.EXAM = {
  "id": "sec3-cs-mock-p2-v4",
  "title": "Secondary 3 Computer Science · Paper 2 Set 4",
  "subtitle": "Algorithms and programming · Chapters 7–8 · Unlimited time",
  "totalMarks": 75,
  "questions": [
    {
      "id": "q1",
      "type": "written",
      "marks": 8,
      "topic": "Algorithm development",
      "section": "Algorithm development",
      "prompt": "(a) Describe a concrete task from each of analysis, design, coding and testing when building a community-centre seat-reservation application. [4]\n(b) Explain how decomposition would divide this program into modules. [2]\n(c) Give two benefits of writing pseudocode before implementing a program. [2]",
      "markScheme": "(a) Identify requirements; design algorithms; write code; run tests and compare expected outcomes.\n(b) Separate reservation, availability and confirmation modules; simpler development/testing.\n(c) Language independence and early logic checking.",
      "points": [
        {
          "text": "Analysis task",
          "marks": 1
        },
        {
          "text": "Design task",
          "marks": 1
        },
        {
          "text": "Coding task",
          "marks": 1
        },
        {
          "text": "Testing task",
          "marks": 1
        },
        {
          "text": "Identifies subproblems",
          "marks": 1
        },
        {
          "text": "Explains decomposition benefit",
          "marks": 1
        },
        {
          "text": "Pseudocode benefit 1",
          "marks": 1
        },
        {
          "text": "Benefit 2",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": true
    },
    {
      "id": "q2",
      "type": "written",
      "marks": 9,
      "topic": "Testing and validation",
      "section": "Testing and validation",
      "prompt": "A lending kiosk accepts equipment tags, dates and quantity.\n(a) Distinguish presence checking from format checking, giving one example each. [2]\n(b) Identify checks for a tag formatted EQ- followed by four digits, quantity 1–6, and a genuine calendar date. [3]\n(c) For quantity 1–6, give a normal accepted example, an abnormal rejected example, and accepted/rejected pairs at both boundaries with expected results. [4]",
      "markScheme": "(a) Presence: not blank. Format: pattern EQ-1234.\n(b) Pattern/format check; range check; date validity check.\n(c) Normal 3 accept, abnormal text reject, lower boundary 0 reject/1 accept, upper boundary 6 accept/7 reject.",
      "points": [
        {
          "text": "Presence example",
          "marks": 1
        },
        {
          "text": "Format example",
          "marks": 1
        },
        {
          "text": "Tag check",
          "marks": 1
        },
        {
          "text": "Quantity check",
          "marks": 1
        },
        {
          "text": "Date check",
          "marks": 1
        },
        {
          "text": "Normal test/result",
          "marks": 1
        },
        {
          "text": "Abnormal test/result",
          "marks": 1
        },
        {
          "text": "Lower boundary pair",
          "marks": 1
        },
        {
          "text": "Upper boundary pair",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": true
    },
    {
      "id": "q3",
      "type": "written",
      "marks": 10,
      "topic": "Trace and correction",
      "section": "Trace and correction",
      "prompt": "Given pseudocode:\n<pre>Credits ← 5\nHeavy ← 0\nFOR Parcel ← 1 TO 4\n INPUT Weight\n Credits ← Credits + Weight * 2\n IF Weight >= 4 THEN\n  Heavy ← Heavy + 1\n ENDIF\nNEXT Parcel\nOUTPUT Credits, Heavy</pre>\nWeights entered: 2, 4, 1, 6.\n(a) Trace Credits and Heavy after each loop. [4]\n(b) The requirement says heavy means strictly greater than 4. Identify and correct the error. [2]\n(c) Give the final output after correction. [2]\n(d) Explain why a test using weight 4 reveals the error. [2]",
      "markScheme": "(a) Trace after each loop:\nParcel | Weight | Credits | Heavy\n1      | 2      | 9       | 0\n2      | 4      | 17      | 1\n3      | 1      | 19      | 1\n4      | 6      | 31      | 2\n\n(b) The comparison incorrectly includes weight 4.\n    Correct condition: IF Weight > 4 THEN\n\n(c) Credits = 31; Heavy = 1.\n\n(d) A weight of exactly 4 is the boundary:\n    Original algorithm counts it; corrected algorithm does not.",
      "points": [
        {
          "text": "Trace row 1",
          "marks": 1
        },
        {
          "text": "Trace row 2",
          "marks": 1
        },
        {
          "text": "Trace row 3",
          "marks": 1
        },
        {
          "text": "Trace row 4",
          "marks": 1
        },
        {
          "text": "Identifies boundary error",
          "marks": 1
        },
        {
          "text": "Corrects > operator",
          "marks": 1
        },
        {
          "text": "Final Credits",
          "marks": 1
        },
        {
          "text": "Final Heavy",
          "marks": 1
        },
        {
          "text": "Boundary test rationale",
          "marks": 1
        },
        {
          "text": "Observed discrepancy",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": true
    },
    {
      "id": "q4",
      "type": "written",
      "marks": 12,
      "topic": "Programming concepts",
      "section": "Programming concepts",
      "prompt": "(a) Choose data types for a decimal temperature, a security alarm on/off state, and an alphanumeric item code. [3]\n(b) Calculate 29 DIV 4 and 29 MOD 4. [2]\n(c) Determine three outputs when the inputs are 7, 12, 9:\n<pre>FOR K ← 1 TO 3\n INPUT X\n IF X MOD 3 = 0 THEN\n  OUTPUT X DIV 3\n ELSE\n  OUTPUT X + 2\n ENDIF\nNEXT K</pre> [3]\n(d) Write pseudocode repeatedly inputting integer N until N is strictly positive. [4]",
      "markScheme": "(a) REAL; BOOLEAN; STRING.\n\n(b) 29 DIV 4 = 7; 29 MOD 4 = 1.\n\n(c) Outputs in order: 9, 4, 3.\n\n(d) Cambridge-style pseudocode:\nREPEAT\n    INPUT N\nUNTIL N > 0",
      "points": [
        {
          "text": "REAL",
          "marks": 1
        },
        {
          "text": "BOOLEAN",
          "marks": 1
        },
        {
          "text": "STRING",
          "marks": 1
        },
        {
          "text": "DIV",
          "marks": 1
        },
        {
          "text": "MOD",
          "marks": 1
        },
        {
          "text": "Output 1",
          "marks": 1
        },
        {
          "text": "Output 2",
          "marks": 1
        },
        {
          "text": "Output 3",
          "marks": 1
        },
        {
          "text": "Loop structure",
          "marks": 1
        },
        {
          "text": "INPUT inside",
          "marks": 1
        },
        {
          "text": "Condition positive",
          "marks": 1
        },
        {
          "text": "Termination",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": true
    },
    {
      "id": "q5",
      "type": "written",
      "marks": 11,
      "topic": "Arrays and modules",
      "section": "Arrays and modules",
      "prompt": "(a) Declare one-dimensional integer array Stock indexed 1–24. [2]\n(b) Declare two-dimensional Boolean array Occupied for 3 floors and 8 rooms per floor, indexing from 1. [2]\n(c) Write nested loops that count rooms where Occupied is TRUE. [3]\n(d) Write Boolean function IsLow(Amount: INTEGER), returning TRUE only when Amount is below 5. [3]\n(e) Explain one advantage of parameters over global variables. [1]",
      "markScheme": "(a) DECLARE Stock : ARRAY[1:24] OF INTEGER\n\n(b) DECLARE Occupied : ARRAY[1:3, 1:8] OF BOOLEAN\n\n(c) Count occupied rooms:\nTotal ← 0\nFOR Floor ← 1 TO 3\n    FOR Room ← 1 TO 8\n        IF Occupied[Floor, Room] = TRUE THEN\n            Total ← Total + 1\n        ENDIF\n    NEXT Room\nNEXT Floor\n\n(d) Boolean function:\nFUNCTION IsLow(Amount : INTEGER) RETURNS BOOLEAN\n    RETURN Amount < 5\nENDFUNCTION\n\n(e) Parameters reduce hidden dependencies and make testing easier.",
      "points": [
        {
          "text": "1D boundaries",
          "marks": 1
        },
        {
          "text": "1D type",
          "marks": 1
        },
        {
          "text": "2D dimensions",
          "marks": 1
        },
        {
          "text": "2D type",
          "marks": 1
        },
        {
          "text": "Nested loops",
          "marks": 1
        },
        {
          "text": "Boolean lookup",
          "marks": 1
        },
        {
          "text": "Count correctly",
          "marks": 1
        },
        {
          "text": "Function signature",
          "marks": 1
        },
        {
          "text": "Comparison",
          "marks": 1
        },
        {
          "text": "Return",
          "marks": 1
        },
        {
          "text": "Parameters benefit",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": true
    },
    {
      "id": "q6",
      "type": "written",
      "marks": 10,
      "topic": "File handling",
      "section": "File handling",
      "prompt": "(a) A text file Visitors.txt contains exactly six lines. Write pseudocode to open, read and output all six IDs, then close it. [5]\n(b) Write statements to append 'DONE' to Log.txt without deleting existing data, then close the file. [2]\n(c) Describe three programming practices that aid maintainability. [3]",
      "markScheme": "(a) Read six visitor IDs:\nOPENFILE \"Visitors.txt\" FOR READ\nFOR I ← 1 TO 6\n    READFILE \"Visitors.txt\", ID\n    OUTPUT ID\nNEXT I\nCLOSEFILE \"Visitors.txt\"\n\n(b) Append without overwriting:\nOPENFILE \"Log.txt\" FOR APPEND\nWRITEFILE \"Log.txt\", \"DONE\"\nCLOSEFILE \"Log.txt\"\n\n(c) Use meaningful identifiers, modular subprograms and useful comments.",
      "points": [
        {
          "text": "Open file",
          "marks": 1
        },
        {
          "text": "Loop six",
          "marks": 1
        },
        {
          "text": "Read",
          "marks": 1
        },
        {
          "text": "Output",
          "marks": 1
        },
        {
          "text": "Close",
          "marks": 1
        },
        {
          "text": "Append mode",
          "marks": 1
        },
        {
          "text": "Write and close",
          "marks": 1
        },
        {
          "text": "Naming",
          "marks": 1
        },
        {
          "text": "Modularity",
          "marks": 1
        },
        {
          "text": "Comments",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": true
    },
    {
      "id": "q7",
      "type": "written",
      "marks": 15,
      "topic": "Scenario programming",
      "section": "Scenario programming",
      "prompt": "A repair café records six repair jobs. Each job has Category (1, 2 or 3) and Minutes (1–180).\nWrite a complete program in Cambridge-style pseudocode, Python, Java or VB.NET that:\n• accepts and validates category and minutes for all six jobs;\n• totals minutes;\n• counts the jobs in each category;\n• finds the longest repair;\n• outputs total, average minutes, longest time and each category count.\nState one useful test with expected outputs.",
      "markScheme": "DECLARE Count : ARRAY[1:3] OF INTEGER\n\nFOR C ← 1 TO 3\n    Count[C] ← 0\nNEXT C\n\nTotal ← 0\nLongest ← 0\n\nFOR Job ← 1 TO 6\n    REPEAT\n        INPUT Category\n    UNTIL Category >= 1 AND Category <= 3\n\n    REPEAT\n        INPUT Minutes\n    UNTIL Minutes >= 1 AND Minutes <= 180\n\n    Count[Category] ← Count[Category] + 1\n    Total ← Total + Minutes\n\n    IF Minutes > Longest THEN\n        Longest ← Minutes\n    ENDIF\nNEXT Job\n\nAverage ← Total / 6\nOUTPUT Total, Average, Longest\n\nFOR C ← 1 TO 3\n    OUTPUT C, Count[C]\nNEXT C\n\nTest case:\nSix category-1 jobs of 10 minutes each.\nExpected: total 60, average 10, longest 10; counts 6, 0, 0.",
      "points": [
        {
          "text": "Initialise array counts",
          "marks": 1
        },
        {
          "text": "Initialise total",
          "marks": 1
        },
        {
          "text": "Initialise longest",
          "marks": 1
        },
        {
          "text": "Loop six times",
          "marks": 1
        },
        {
          "text": "Input category",
          "marks": 1
        },
        {
          "text": "Validate category",
          "marks": 1
        },
        {
          "text": "Input minutes",
          "marks": 1
        },
        {
          "text": "Validate minutes",
          "marks": 1
        },
        {
          "text": "Update category count",
          "marks": 1
        },
        {
          "text": "Accumulate total",
          "marks": 1
        },
        {
          "text": "Update longest",
          "marks": 1
        },
        {
          "text": "Calculate average",
          "marks": 1
        },
        {
          "text": "Output total and average",
          "marks": 1
        },
        {
          "text": "Output longest and counts",
          "marks": 1
        },
        {
          "text": "Test with expected result",
          "marks": 1
        }
      ],
      "explanation": "Compare your response with the model solution, checking each required idea, method and conclusion.",
      "mistake": "A keyword without an explanation or missing working may not earn the corresponding mark.",
      "code": true
    }
  ]
};
