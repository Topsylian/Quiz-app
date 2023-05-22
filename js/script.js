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

registerBtn.addEventListener("pointerover", () => {
		registerBtn.classList.add("active");
});


registerBtn.addEventListener("pointerout", () => {
		registerBtn.classList.remove("active");
});