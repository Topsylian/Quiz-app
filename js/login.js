"use strict";

const body = document.querySelector("body");
const container = document.querySelector(".container");
const registerBtn = document.querySelector("button.login-btn");
const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const userName = document.querySelector("input#username");
const passWord = document.querySelector("input#pword");
const errorMsg = document.querySelectorAll("span.input-error");
const inputBorder = document.querySelectorAll("div.input-border");

/*
fullName.addEventListener("focus", () => {
  for (let j = 0; j < labels.length; j++) {
    if (
      labels[j].getAttribute("for") === "name" &&
      fullName.getAttribute("id") === "name" &&
      inputBorder[j].getAttribute("id") === "fullname-border"
    ) {
      labels[j].style.color = "var(--accent-two)";
      inputBorder[j].classList.add("focus");
      inputBorder[j].classList.remove("valid");
      inputBorder[j].classList.remove("error");
    }
  }
});

fullName.addEventListener("blur", () => {
  for (let j = 0; j < labels.length; j++) {
    if (
      labels[j].getAttribute("for") === "name" &&
      fullName.getAttribute("id") === "name" &&
      inputBorder[j].getAttribute("id") === "fullname-border"
    ) {
      labels[j].style.color = "var(--primary)";
      inputBorder[j].classList.remove("focus");
      inputBorder[j].classList.remove("valid");
      inputBorder[j].classList.remove("error");
    }
  }
});
*/
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
      labels[j].style.color = "var(--primary)";
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
      labels[j].style.color = "var(--primary)";
      inputBorder[j].classList.remove("focus");
    }
  }
});

userName.addEventListener("keyup", () => {
  let regex = /^[a-zA-Z]+$/;
	for (let j = 0; j < inputBorder.length; j++) {
		if (
			errorMsg[j].getAttribute("id") === "username-error" &&
			regex.test(userName.value)
		) {
			errorMsg[j].style.display = "flex";
			errorMsg[j].style.color = "var(--form-valid)";
			errorMsg[j].textContent = `valid`;
			inputBorder[j].classList.remove("focus");
			inputBorder[j].classList.add("valid");
			inputBorder[j].classList.remove("error");
		} else {
			let regex = /\d/;
			if (errorMsg[j].getAttribute("id") === "username-error" &&
			regex.test(userName.value)) {
			errorMsg[j].style.display = "flex";
			errorMsg[j].style.color = "var(--form-error)";
			errorMsg[j].textContent = `Invalid, letter only`;
			inputBorder[j].classList.remove("focus");
			inputBorder[j].classList.remove("valid");
			inputBorder[j].classList.add("error");
			}
		}
	}
});

passWord.addEventListener("keyup", () => {
	let regex = /^[a-zA-Z]+$/;
	let num = /\d/;
	let regexStr = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	for (let j = 0; j < inputBorder.length; j++) {
		if (
			errorMsg[j].getAttribute("id") === "password-error" &&
			regex.test(passWord.value)
		) {
			errorMsg[j].style.display = "flex";
			errorMsg[j].style.color = "var(--form-good)";
			errorMsg[j].textContent = `good password`;
			inputBorder[j].classList.remove("focus");
			inputBorder[j].classList.add("valid");
			inputBorder[j].classList.remove("error");
		} else if (errorMsg[j].getAttribute("id") === "password-error" && passWord.value === "") {
			errorMsg[j].style.display = "flex";
			errorMsg[j].style.color = "var(--form-error)";
			errorMsg[j].textContent = `Input password`;
			inputBorder[j].classList.remove("focus");
			inputBorder[j].classList.remove("valid");
			inputBorder[j].classList.add("error");
		} else if (errorMsg[j].getAttribute("id") === "password-error" && regexStr.test(passWord.value)) {
		errorMsg[j].style.display = "flex";
		errorMsg[j].style.color = "var(--form-valid)";
		errorMsg[j].textContent = `Strong password`;
		inputBorder[j].classList.remove("focus");
		inputBorder[j].classList.add("valid");
		inputBorder[j].classList.remove("error");
		}
	}
});


registerBtn.addEventListener("click", function (e) {
	e.preventDefault();
	
	if (validateForm()) {
		form.submit();
	}

	if (registerBtn.getAttribute("class") === "register-btn") {
    registerBtn.classList.add("active");
    registerBtn.setAttribute("class", "active");
  } else {
    registerBtn.classList.remove("active");
    registerBtn.setAttribute("class", "register-btn");
	}

	function validateForm() {
		const uname = userName.value;
		const pword = passWord.value;

		const savedUser = localStorage.getItem("uname");
		const savedPass = localStorage.getItem("pword");
	
		if (savedUser === userName.value && savedPass === passWord.value) {
			console.log(savedUser, savedPass);
			return true;
		} else {
			for (let i = 0; i < errorMsg.length; i++) {
				if (errorMsg[i]) {
					errorMsg[i].textContent = "wrong details, check your username and password";
					errorMsg[i].style.color = "var(--form-error)";
					inputBorder[i].classList.add("error");
					inputBorder[i].classList.remove("valid");
				} else {
					errorMsg[i].textContent = "valid";
					errorMsg[i].style.color = "var(--form-valid)";
					inputBorder[i].classList.remove("error");
					inputBorder[i].classList.add("valid");
				}
			}
			console.log("There's error");
			return false;
		}
	}
});