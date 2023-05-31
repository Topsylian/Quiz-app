"use strict";

const body = document.querySelector("body");
const header = document.querySelector(".quiz-header");
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
  main.style.justifyContent = "center";
  header.style.display = "none";
  localStorage.setItem("display", "flex");

  const storedDisplay = localStorage.getItem("display");
if (storedDisplay === "flex") {
  body.classList.add(storedDisplay);
  startBtn.classList.remove("active");
}
});

if (localStorage.getItem("display") === "flex") {
  body.classList.add("flex");

}

backToStartBtn.addEventListener("click", () => {
  body.classList.remove("flex");
  localStorage.removeItem("display");
  header.style.display = "flex";
});