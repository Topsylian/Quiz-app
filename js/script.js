"use-strict";
const body = document.querySelector("body");
const container = document.querySelector(".container");
const registerBtn = document.querySelector("button.register-btn");
const labels = document.querySelectorAll("label");
const fullName = document.querySelector("input#name");
const userName = document.querySelector("input#username");
const passWord = document.querySelector("input#pword");
const inputBorder = document.querySelectorAll("div.input-border");

registerBtn.addEventListener("click", () => {
  if (registerBtn.getAttribute("class") === "register-btn") {
    registerBtn.classList.add("active");
    registerBtn.setAttribute("class", "active");
  } else {
    registerBtn.classList.remove("active");
    registerBtn.setAttribute("class", "register-btn");
  }
});

fullName.addEventListener(
  "focus",
  () => {
    for (let j = 0; j < labels.length; j++) {
      if (
        labels[j].getAttribute("for") === "name" &&
				fullName.getAttribute("id") === "name" &&
				inputBorder[j].getAttribute("id") === "fullname-border"
      ) {
				labels[j].style.color = "var(--accent-two)";
				inputBorder[j].classList.add("focus");
      }
    }
  }
);

fullName.addEventListener("blur", () => {
  for (let j = 0; j < labels.length; j++) {
		if (
			labels[j].getAttribute("for") === "name" &&
			fullName.getAttribute("id") === "name" &&
			inputBorder[j].getAttribute("id") === "fullname-border"
		) {
			labels[j].style.color = "var(--secondary)";
			inputBorder[j].classList.remove("focus");
		}
	}
});

userName.addEventListener("focus", () => {
  for (let j = 0; j < labels.length; j++) {
		if (
			labels[j].getAttribute("for") === "username" &&
			userName.getAttribute("id") === "username" &&
			inputBorder[j].getAttribute("id") === "username-border"
		) {
			labels[j].style.color = "var(--accent-two)";
			inputBorder[j].classList.add("focus");
		}
	}
});

userName.addEventListener("blur", () => {
  for (let j = 0; j < labels.length; j++) {
		if (
			labels[j].getAttribute("for") === "username" &&
			userName.getAttribute("id") === "username" &&
			inputBorder[j].getAttribute("id") === "username-border"
		) {
			labels[j].style.color = "var(--secondary)";
			inputBorder[j].classList.remove("focus");
		}
	}
});

passWord.addEventListener("focus", () => {
  for (let j = 0; j < labels.length; j++) {
		if (
			labels[j].getAttribute("for") === "pword" &&
			passWord.getAttribute("id") === "pword" &&
			inputBorder[j].getAttribute("id") === "password-border"
		) {
			labels[j].style.color = "var(--accent-two)";
			inputBorder[j].classList.add("focus");
		}
	}
});

passWord.addEventListener("blur", () => {
  for (let j = 0; j < labels.length; j++) {
		if (
			labels[j].getAttribute("for") === "pword" &&
			passWord.getAttribute("id") === "pword" &&
			inputBorder[j].getAttribute("id") === "password-border"
		) {
			labels[j].style.color = "var(--secondary)";
			inputBorder[j].classList.remove("focus");
		}
	}
});

/*
window.addEventListener("load", () => {
	setTimeout(() => {
		body.style.opacity = 1;
	}, 1500);
})
*/
