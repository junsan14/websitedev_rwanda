// questions.js
const QUESTION_BANK = [
  {
    category: "DOM Basics",
    question: "Which method selects an element by ID?",
    choices: ["document.querySelectorAll()", "document.getElementById()", "document.getElementsByClassName()", "document.createElement()"],
    answerIndex: 1,
    explanation: "getElementById() returns the element with the matching id."
  },
  {
    category: "DOM Basics",
    question: "What does element.innerHTML change?",
    choices: ["Only the text", "Only the style", "The HTML content inside the element", "The element id"],
    answerIndex: 2,
    explanation: "innerHTML replaces or reads the HTML inside."
  },
  {
    category: "JavaScript Basics",
    question: "Which keyword declares a block-scoped variable?",
    choices: ["var", "let", "function", "this"],
    answerIndex: 1,
    explanation: "let is block-scoped."
  },
  {
    category: "Loops",
    question: "How many times does this run? for(let i=0;i<3;i++){ }",
    choices: ["2", "3", "4", "Infinite"],
    answerIndex: 1,
    explanation: "i = 0,1,2 => 3 times."
  },
  {
    category: "Functions",
    question: "What is the correct syntax for an arrow function?",
    choices: ["function => () {}", "() => {}", "=> function() {}", "(=>) {}"],
    answerIndex: 1,
    explanation: "Arrow function is () => {}."
  },
];
