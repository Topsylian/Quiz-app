"use strict";

const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger-wrapper");
const dropMenu = document.querySelector(".menu-bar");
const sticks = document.querySelectorAll("div.stick");
const crossOne = document.querySelector("#cross-one");
const crossTwo = document.querySelector("#cross-two");
const usersName = document.querySelector("#users-name");
const registerBtn = document.querySelector("button");
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
			dropMenu.style.visibility = "visible";
			dropMenu.style.height = "100vh";
			dropMenu.style.width = "90%";
			crossOne.style.transform = "translate(-8px, -2px) rotate(45deg)";
			crossOne.style.backgroundColor = "var(--primary)";
			crossTwo.style.backgroundColor = "var(--primary)";
			crossTwo.style.transform = "translate(-8px, -8px) rotate(-45deg) ";
			body.style.background = "var(--accent)";
    } else {
      sticks[i].style.transition = "800ms ease-in-out";
			sticks[i].setAttribute("class", "stick");
			hamburger.classList.remove("click");
			dropMenu.style.visibility = "hidden";
			dropMenu.style.height = "0";
			dropMenu.style.width = "0%";
			crossOne.style.transform = "translate(50px, -50px) rotate(45deg)";
			crossTwo.style.transform = "translate(-50px, 50px) rotate(-45deg) ";
			body.style.background = "var(--primary)";
    }
  }
});

registerBtn.addEventListener("click", function () {
	if (registerBtn.getAttribute("class") === "start") {
    registerBtn.classList.add("active");
    registerBtn.setAttribute("class", "active");
  } else {
    registerBtn.classList.remove("active");
    registerBtn.setAttribute("class", "start");
	}
});