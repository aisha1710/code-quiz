var startButton = document.getElementById("strt-btn");
var introduction = document.getElementById("flex-container1");
var questionPage = document.getElementById("questions_page");
var Questions = document.getElementById("questions");
var answer1 = document.getElementById("btn0");
var answer2 = document.getElementById("btn1");
var answer3 = document.getElementById("btn2");
var answer4 = document.getElementById("btn3");
var result = document.getElementById("result");
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

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("time");

var secondsLeft = 60;
var questionNum = 0;
var totalScore = 0;
var questionCounter = 0;

const countdown = () => {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = secondsLeft + ": seconds remaining";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);

      timesUp.textContent = "Game over!";
      timeUp();
    } else if (questionCounter >= questionsArray.length + 1) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
};

const startQuiz = () => {
  introduction.style.display = "none";
  questionPage.style.display = "block";
  timer.style.display = "block";

  questionNum = 0;
  countdown();
  viewQuestion(questionNum);
};
const viewQuestion = (n) => {
  highScoreBtn.style.display = "block";
  Questions.textContent = questionsArray[n].question;
  answer1.textContent = questionsArray[n].choice[0];
  answer2.textContent = questionsArray[n].choice[1];
  answer3.textContent = questionsArray[n].choice[2];
  answer4.textContent = questionsArray[n].choice[3];
  questionNum = n;
};

const checkAnswer = (event) => {
  event.preventDefault();

  result.style.display = "block";
  setTimeout(function () {
    result.style.display = "none";
  }, 1000);

  if (questionsArray[questionNum].correctAnswer == event.target.value) {
    result.textContent = "Correct!";
    totalScore = totalScore + 1;
  } else {
    secondsLeft = secondsLeft - 10;
    result.textContent =
      "Incorrect! The correct answer is " +
      questionsArray[questionNum].correctAnswer +
      " .";
  }

  if (questionNum < questionsArray.length - 1) {
    viewQuestion(questionNum + 1);
  } else {
    timeUp();
  }
  questionCounter++;
};

const timeUp = () => {
  questionPage.style.display = "none";
  submitPage.style.display = "block";
  highScoreBtn.style.display = "none";
  console.log(submitPage);

  Score.textContent = "Your final score is :" + totalScore;
  timeLeft.style.display = "none";
};

const scoreNum = () => {
  var currentList = localStorage.getItem("ScoreList");
  highScoreBtn.style.display = "none";

  if (currentList !== null) {
    newList = JSON.parse(currentList);
    return newList;
  } else {
    newList = [];
  }
  return newList;
};

const viewScore = () => {
  ScoresRecord.innerHTML = "";
  ScoresRecord.style.display = "block";
  var highScores = sort();

  var topFive = highScores.slice(0, 5);
  for (var i = 0; i < topFive.length; i++) {
    var item = topFive[i];

    var li = document.createElement("li");
    li.textContent = item.player + " - " + item.score;
    li.setAttribute("data-index", i);
    ScoresRecord.appendChild(li);
  }
};

const sort = () => {
  var unsortedList = scoreNum();
  if (scoreNum == null) {
    return;
  } else {
    unsortedList.sort(function (a, b) {
      return b.score - a.score;
    });
    return unsortedList;
  }
};

const addScore = (n) => {
  var addedList = scoreNum();
  addedList.push(n);
  localStorage.setItem("ScoreList", JSON.stringify(addedList));
};

const saveScore = () => {
  var scoreItem = {
    player: Initials.value,
    score: totalScore,
  };
  addScore(scoreItem);
  viewScore();
};
startButton.addEventListener("click", startQuiz);

answerButtons.forEach(function (click) {
  click.addEventListener("click", checkAnswer);
});

var submitButton = document.getElementById("submit-btn");
var highScorePage = document.getElementById("highscore-page");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  submitPage.style.display = "none";
  introduction.style.display = "none";
  highScorePage.style.display = "block";
  questionPage.style.display = "none";

  saveScore();
});

highScoreBtn.addEventListener("click", function (event) {
  event.preventDefault();
  submitPage.style.display = "none";
  introduction.style.display = "none";
  timer.style.display = "none";
  highScorePage.style.display = "block";
  questionPage.style.display = "none";
  viewScore();
});

var backButton = document.getElementById("back_btn");
var clearButton = document.getElementById("clear_btn");

clearButton.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  viewScore();
});

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  submitPage.style.display = "none";
  introduction.style.display = "block";
  highScorePage.style.display = "none";
  questionPage.style.display = "none";
  location.reload();
});
