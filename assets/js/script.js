var startButton = document.getElementById("strt-btn");
var introduction = document.getElementById("flex-container1");
var questionPage = document.getElementById("questions_page");
var Questions = document.getElementById("questions");
var answer1 = document.getElementById("btn0");
var answer2 = document.getElementById("btn1");
var answer3 = document.getElementById("btn2");
var answer4 = document.getElementById("btn3");
var checkLine = document.getElementById("check_line");
var submitPage = document.getElementById("submit_page");
var Score = document.getElementById("final-score");
var Initials = document.getElementById("initial");
var answerButtons = document.querySelectorAll(".answer");
var ScoresRecord = document.getElementById("score-record");
var highScoreBtn = document.getElementById("hs-btn");
var timesUp = document.getElementById("finish");

var questionsArray = [
  {
    question: "Which HTML element do we put the javascript inside?",
    choice: ["1. <javascript>", "2. <scripting>", "3. <script>", "4. <js>"],
    correctAnswer: "3",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called xy.js ?",
    choice: [
      '1. <script="xy.js">',
      '2. <script href="xy.js">',
      '3. <script name="xy.js">',
      '4. <script src="xy.js">',
    ],
    correctAnswer: "4",
  },
  {
    question: "what does HTML stand for?",
    choice: [
      "1. Home Tool Markup Language",
      "2. Hyperlinks and Text Markup Language",
      "3. Home Text Markup Language",
      "4. Hyper Text Markup Language",
    ],
    correctAnswer: "4",
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    choice: ["1. <head>", "2. <h1>", "3. <heading>", "4. <h6>"],
    correctAnswer: "2",
  },
  {
    question: "What character is used to indicate an end tag ?",
    choice: ["1. ^", "2. *", "3. /", "4. )"],
    correctAnswer: "3",
  },
  {
    question: "How can you make a numbered list?",
    choice: ["1. <ul>", "2. <dl>", "3. <list>", "4. <ol>"],
    correctAnswer: "4",
  },
  {
    question: "Which HTML element defines the title of a document?",
    choice: ["1. <title>", "2. <head>", "3. <meta>", "4. <body>"],
    correctAnswer: "1",
  },
  {
    question: "What does CSS stand for?",
    choice: [
      "1. creative style sheets",
      "2. computer style sheets",
      "3. cascading style sheets",
      "4. colorful style sheets",
    ],
    correctAnswer: "3",
  },
  {
    question: "what CSS property is used to change text color?",
    choice: ["1. color", "2. text-color", "3. fgcolor", "4. txtcolor"],
    correctAnswer: "1",
  },
  {
    question: "How do you select an element with id?",
    choice: ["1. *", "2. .", "3. /", "4. #"],
    correctAnswer: "4",
  },
];
