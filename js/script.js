"use-strict";
const body = document.querySelector("body");
const container = document.querySelector(".container");
const registerBtn = document.querySelector("button.register-btn");
const shop = document.querySelector("p.shop");



/*
window.addEventListener("load", () => {
	setTimeout(() => {
		body.style.opacity = 1;
	}, 1500);
})
*/

registerBtn.addEventListener("click", () => {
		if (registerBtn.getAttribute("class") === "register-btn") {
			registerBtn.classList.add("active");
			registerBtn.setAttribute("class", "active");
		} else {
			registerBtn.classList.remove("active");
			registerBtn.setAttribute("class", "register-btn");
		}
});


registerBtn.addEventListener("pointerout", () => {
		registerBtn.classList.remove("active");
});