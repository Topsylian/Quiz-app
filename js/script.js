"use strict";

const body = document.querySelector("body");
const container = document.querySelector(".container");
const registerBtn = document.querySelector("button.register-btn");
const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const fullName = document.querySelector("input#name");
const userName = document.querySelector("input#username");
const passWord = document.querySelector("input#pword");
const errorMsg = document.querySelectorAll("span.input-error");
const inputBorder = document.querySelectorAll("div.input-border");


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
			inputBorder[j].classList.remove("valid");
      inputBorder[j].classList.remove("error");
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
			inputBorder[j].classList.remove("valid");
      inputBorder[j].classList.remove("error");
    }
  }
});

fullName.addEventListener("keyup", () => {
  let regex = /^[a-zA-Z]+$/;
	for (let j = 0; j < inputBorder.length; j++) {
		if (
			errorMsg[j].getAttribute("id") === "fullname-error" &&
			regex.test(fullName.value)
		) {
			errorMsg[j].style.display = "flex";
			errorMsg[j].style.color = "var(--form-valid)";
			errorMsg[j].textContent = `valid`;
			inputBorder[j].classList.remove("focus");
			inputBorder[j].classList.add("valid");
			inputBorder[j].classList.remove("error");
		} else {
			let regex = /\d/;
			if (errorMsg[j].getAttribute("id") === "fullname-error" &&
			regex.test(fullName.value)) {
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
		const name = fullName.value;
		const uname = userName.value;
		const pword = passWord.value;
		localStorage.setItem("name", name);
		localStorage.setItem("uname", uname);
		localStorage.setItem("pword", pword);
	
		if (fullName.value && userName.value && passWord.value) {
			console.log("true");
			return true;
		} else {
			console.log("There's error");
			return false;
		}
	}
});
/*
window.addEventListener("load", () => {
	setTimeout(() => {
		body.style.opacity = 1;
	}, 1500);
})

	
	if (fullName.value === savedName && userName.value === savedUser && userPass.value === savedPass) {
		window.location.href = "login.html";
		console.log("Logged");
	}
*/