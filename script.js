const form = document.getElementById("form");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const termsInput = document.getElementById("terms");
const errorContainer = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");

form.addEventListener("submit", (e) => {
  const errorMessages = [];
  clearErrors();
  if (userNameInput.value.length < 6) {
    errorMessages.push("Username must be atleast 6 characters");
  }
  if (passwordInput.value.length < 10) {
    errorMessages.push("Passwords must be atleast 10 characters");
  }
  if (passwordConfirmation.value !== passwordInput.value) {
    errorMessages.push("Passwords must match");
  }
  if (!termsInput.checked) {
    errorMessages.push("You have to accept the terms");
  }
  if (errorMessages.length > 0) {
    showErrors(errorMessages);
    e.preventDefault();
  }
});

function clearErrors() {
  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0]);
  }
  errorContainer.classList.remove("show");
}

function showErrors(errorMessages) {
  errorMessages.forEach((message) => {
    let li = document.createElement("li");
    li.innerText = message;
    errorList.appendChild(li);
  });
  errorContainer.classList.add("show");
}
