"use strict";

const hamburger = document.querySelector(".hamburger-wrapper");
const dropMenu = document.querySelector(".menu-bar");
const sticks = document.querySelectorAll("div.stick");

hamburger.addEventListener("click", () => {
  for (let i = 0; i < sticks.length; i++) {
		if (sticks[i].getAttribute("class") === "stick") {
			hamburger.classList.add("click");
      sticks[i].style.transition = "800ms ease-in-out";
			sticks[i].style.backgroundColor = "green";
			sticks[i].setAttribute("class", "non-stick");
			dropMenu.style.height = "100vh";
			dropMenu.style.width = "70%";
    } else {
      sticks[i].style.transition = "800ms ease-in-out";
			sticks[i].style.backgroundColor = "var(--accent-two)";
			sticks[i].setAttribute("class", "stick");
			hamburger.classList.remove("click");
			dropMenu.style.height = "0";
			dropMenu.style.width = "0%";
    }
  }
});
