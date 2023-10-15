var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var divMove = document.getElementById("divMove");

function register() {
  loginForm.style.left = "-400px";
  registerForm.style.left = "50px";
  divMove.style.left = "110px";
}

function login() {
  loginForm.style.left = "50px";
  registerForm.style.left = "450px";
  divMove.style.left = "0";
}
