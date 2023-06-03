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
});

const questionData = [
  {
    question: "What's my name",
    options: [
      { text: "william", correct: false },
      { text: "raihana", correct: true },
      { text: "charles", correct: false },
      { text: "toyyib", correct: false },
    ],
  },

  {
    question: "What is the largest organ in the human body",
    options: [
      { text: "liver", correct: false },
      { text: "skin", correct: true },
      { text: "kidney", correct: false },
      { text: "bladder", correct: false },
    ],
  },
];

//select section that show question
const questionBox = document.querySelector(".question-info");
//select the section that holds answers
const answerBoxes = document.querySelector(".question-answer-box");
//select the next button
const nextButton = document.querySelector(".next");
//question box textContent should equal to first questionData object property

let currentQuestionIndex = 0;
let score = 0;

function quizStart() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetQuestion();
  let currentQuestion = questionData[currentQuestionIndex];
  let numberOfQuestion = currentQuestionIndex + 1;
  questionBox.textContent = `${numberOfQuestion} . ${currentQuestion.question}?`;

  let answers = currentQuestion.options;
  answers.forEach(function (answer) {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("button");
    answerBoxes.appendChild(btn);
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
      console.log(answer.correct.toString());
    }
    btn.addEventListener("click", (e)=> {
      const choseAnswer = e.target;
      const isTrue = choseAnswer.dataset.correct === "true";
      if (isTrue) {
        choseAnswer.classList.add("right");
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

quizStart();
/*
//this variable keeps all option values
const optData = questionData[0].options;


let addCon = answerBoxes.forEach((option, length) => {
  const firstL = optData[length].charAt(0).toUpperCase();
  const otherL = optData[length].slice(1).toLowerCase();
  option.textContent = `${firstL}${otherL}`;
  option.addEventListener("click", (e) => {
    const currentAnswer = e.target;

    if (currentAnswer.textContent === "Toyyib") {
      answerBoxes[length].style.backgroundColor = "var(--form-valid)";
    } else {
      answerBoxes[length].style.backgroundColor = "var(--form-error)";
    }
  });
});



/*
let count = 0;
function random() {
  return Math.floor(Math.random() * 4);
}

const randomIndex = Math.floor(Math.random() * jsonData.length);

console.log(randomIndex, random(), random());

//question reference
const questionBox = document.querySelector(".question-info > p");
const optOne = document.querySelector(".answer-one");
const optTwo = document.querySelector(".answer-two");
const optThree = document.querySelector(".answer-three");
const optFour = document.querySelector(".answer-four");

const example = jsonData[randomIndex]["question"];

questionBox.textContent = example;
let index = 1;
*/
/*if (jsonData[0].question) {
  optOne.textContent = jsonData[0].options[random()].toUpperCase();
  optTwo.textContent = jsonData[0].options[random()].toUpperCase();
  optThree.textContent = jsonData[0].options[3];
  optFour.textContent = jsonData[0].options[random()].toUpperCase();
  console.log("yeaaaaaaaa");
} else {
  console.log("Error");
}
*/

//optOne.textContent = jsonData[0].options[optionIndex];
