// Select elements
const container = document.querySelector(".container");
const registerBtn = document.querySelector(".resister-btn"); // register button
const loginBtn = document.querySelector(".login-btn");       // login button

// When "Register" button is clicked → show Register form
registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

// When "Login" button is clicked → show Login form
loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});
