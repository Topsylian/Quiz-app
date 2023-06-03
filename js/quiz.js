"use strict";

const body = document.querySelector("body");
//const header = document.querySelector(".quiz-header");
const main = document.querySelector("main");
const hamburger = document.querySelector(".hamburger-wrapper");
const dropMenu = document.querySelector(".menu-bar");
const sticks = document.querySelectorAll("div.stick");
const crossOne = document.querySelector("#cross-one");
const crossTwo = document.querySelector("#cross-two");
const usersName = document.querySelector("#users-name");
const startBtn = document.querySelector("button");
const backToStartBtn = document.querySelector("button.back-to-start");
const menuProfile = document.querySelector(".menu-bar > div.menu-profile");
const menuScore = document.querySelector(".menu-bar > div.menu-total-score");

/*users's username should show beside the Welcome text*/
usersName.textContent;
const userInputName = localStorage.getItem("uname");
usersName.textContent = userInputName;

/*Hamburger design style and functionalities*/

hamburger.addEventListener("click", () => {
  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i].getAttribute("class") === "stick") {
      hamburger.classList.add("click");
      sticks[i].style.transition = "800ms ease-in-out";
      sticks[i].setAttribute("class", "non-stick");
      dropMenu.style.display = "flex";
      dropMenu.style.visibility = "visible";
      menuProfile.style.opacity = "1";
      menuScore.style.opacity = "1";
      dropMenu.style.height = "100vh";
      dropMenu.style.width = "90%";
      dropMenu.style.transform = "translate(0px, 0px)";
      crossOne.style.transform = "translate(-8px, -2px) rotate(45deg)";
      crossTwo.style.transform = "translate(-8px, -8px) rotate(-45deg) ";
      //body.style.background = "var(--accent)";
    } else {
      sticks[i].style.transition = "800ms ease-in-out";
      sticks[i].setAttribute("class", "stick");
      hamburger.classList.remove("click");
      dropMenu.style.visibility = "hidden";
      dropMenu.style.height = "0vh";
      dropMenu.style.width = "0%";
      menuProfile.style.opacity = "0";
      menuScore.style.opacity = "0";
      crossOne.style.transform = "translate(50px, -50px) rotate(45deg)";
      crossTwo.style.transform = "translate(-50px, 50px) rotate(-45deg) ";
      //body.style.background = "var(--primary)";
    }
  }
});

/* making reference to the 3 displays*/
const welcome = document.querySelector("#welcome-section");
const quizPage = document.querySelector("#quiz-page");

startBtn.addEventListener("click", function () {
  if (startBtn.getAttribute("class") === "start") {
    startBtn.classList.add("active");
    startBtn.setAttribute("class", "active");
  } else {
    startBtn.classList.remove("active");
    startBtn.setAttribute("class", "start");
  }
  localStorage.setItem("display", "flex");
  localStorage.setItem("Show", "show");

  const storedDisplay = localStorage.getItem("display");
  if (storedDisplay === "flex") {
    body.classList.add(storedDisplay);
    startBtn.classList.remove("active");
  }

  setTimeout(() => {
    quizPage.classList.add("show");
  }, 300);
});

if (localStorage.getItem("display") === "flex") {
  body.classList.add("flex");
  setTimeout(() => {
    quizPage.classList.add(localStorage.getItem("Show"));
  }, 300);
}

backToStartBtn.addEventListener("click", () => {
  body.classList.remove("flex");
  quizPage.classList.remove("show");
  localStorage.removeItem("display");
  totalQuestionAnsweredByUser.textContent = 1;
});

const questionData = [
  {
    question: "What's my name",
    options: [
      { text: "William", correct: false },
      { text: "Raihana", correct: true },
      { text: "Charles", correct: false },
      { text: "Toyyib", correct: false },
    ],
  },

  {
    question: "What is the largest organ in the human body",
    options: [
      { text: "Liver", correct: false },
      { text: "Skin", correct: true },
      { text: "Kidney", correct: false },
      { text: "Bladder", correct: false },
    ],
  },
/*
  {
    question: "Which continent is home to the Sahara Desert",
    options: [
      { text: "Europe", correct: false },
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "North America", correct: false },
    ],
  },

  {
    question: "Which river is the longest in the world",
    options: [
      { text: "Nile", correct: true },
      { text: "Niger", correct: false },
      { text: "Volga", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },

  {
    question: "Which country is home to the Taj Mahal",
    options: [
      { text: "Morocco", correct: false },
      { text: "India", correct: true },
      { text: "China", correct: false },
      { text: "Kenya", correct: false },
    ],
  },

  {
    question: "What is the capital of Canada ",
    options: [
      { text: "Barcelona", correct: false },
      { text: "Capetown", correct: false },
      { text: "Ontario", correct: false },
      { text: "Ottawa", correct: true },
    ],
  },

  {
    question: " What is the highest mountain in Africa",
    options: [
      { text: "Everest", correct: false },
      { text: "Kilimanjaro", correct: true },
      { text: "Zuma Rock", correct: false },
      { text: "Mount Tur", correct: false },
    ],
  },

  {
    question: "Who created the character of Sherlock Holmes",
    options: [
      { text: "Arthur Conan Doyle", correct: true },
      { text: "Bruce Willis", correct: false },
      { text: "William shakespeare", correct: false },
      { text: "Harper Lee", correct: false },
    ],
  },

  {
    question: "What is the largest country in the world by area",
    options: [
      { text: "Russia", correct: true },
      { text: "Egypt", correct: false },
      { text: "USA", correct: false },
      { text: "New Zealand", correct: false },
    ],
  },

  {
    question: "What is the capital of Australia",
    options: [
      { text: "Madrid", correct: false },
      { text: "California", correct: false },
      { text: "Canberra", correct: true },
      { text: "Texas", correct: false },
    ],
  },
  */
];

//select section that show question
const questionBox = document.querySelector(".question-info");
//select the section that holds answers
const answerBoxes = document.querySelector(".question-answer-box");
//select the next button
const nextButton = document.querySelector(".next");
//question box textContent should equal to first questionData object property
const questionHeader = document.querySelector(".quiz-page-header");
const questionImg = document.querySelector(".question-img");

const totalQuestionData = document.querySelector(".total-score");
const totalQuestionAnsweredByUser = document.querySelector(".users-score");

localStorage.setItem("totalQuestionData", 3);
let index = localStorage.getItem("totalQuestionData");
let currentQuestionIndex = 0;
let score = 0;

function quizStart() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  questionImg.style.display = 'flex';
  questionBox.style.display = 'flex';
  questionHeader.style.display = 'flex';
  showQuestion();
}

function showQuestion() {
  resetQuestion();
  let currentQuestion = questionData[currentQuestionIndex];
  let numberOfQuestion = currentQuestionIndex + 1;
  questionBox.textContent = `${numberOfQuestion} . ${currentQuestion.question}?`;
  totalQuestionAnsweredByUser.textContent = currentQuestionIndex + 1;

  let answers = currentQuestion.options;
  answers.forEach(function (answer) {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("button");
    answerBoxes.appendChild(btn);
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", (e)=> {
      const choseAnswer = e.target;
      const isTrue = choseAnswer.dataset.correct === "true";
      if (isTrue) {
        choseAnswer.classList.add("right");
        score++;
      } else {
        choseAnswer.classList.add("wrong");
      }

      Array.from(answerBoxes.children).forEach((btn) => {
        const isTrueAnswer = btn.dataset.correct === "true";
        if (isTrueAnswer) {
          btn.classList.add("right");
        }
        btn.disabled = true;
        nextButton.style.display = "flex";
      });
    });
  });
}

function resetQuestion() {
  nextButton.style.display = "none";
  while (answerBoxes.firstChild) {
    answerBoxes.removeChild(answerBoxes.firstChild);
  }
}

function revealScore() {
  resetQuestion();
  answerBoxes.innerHTML = `Bravo! You scored ${score} points out of ${currentQuestionIndex} questions`;
  nextButton.style.display = 'flex';
  nextButton.textContent = "Try again!";
  questionImg.style.display = 'none';
  questionBox.style.display = 'none';
  questionHeader.style.display = 'none';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionData.length) {
    showQuestion();
  } else {
    revealScore();
  }
}

nextButton.addEventListener("click", () => {
  const isTrue = currentQuestionIndex < questionData.length;
  if (isTrue) {
    nextQuestion();
  } else {
    quizStart();
  }
})

quizStart();