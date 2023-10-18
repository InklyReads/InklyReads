// login function
function loginToggle() {
  let loginForm = document.getElementById("loginForm");
  let registerForm = document.getElementById("registerForm");
  let divMove = document.getElementById("divMove");
  loginForm.style.left = "50px";
  registerForm.style.left = "450px";
  divMove.style.left = "0";
}

// register function
function registerToggle() {
  let loginForm = document.getElementById("loginForm");
  let registerForm = document.getElementById("registerForm");
  let divMove = document.getElementById("divMove");
  loginForm.style.left = "-400px";
  registerForm.style.left = "50px";
  divMove.style.left = "110px";
}

// get user information then store in json server
// Terms And Conditions Start
const termAndConditions = document.getElementById("termAndConditions");
const close = document.querySelector(".close");

function showTerm() {
  termAndConditions.style.display = "block";
}

function hideTerm() {
  termAndConditions.style.display = "none";
}

close.addEventListener("click", (e) => {
  e.preventDefault();
  hideTerm();
});
// Terms And Conditions End
