// navbar start

let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");
let nav = document.querySelector("nav");
let navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menuToggle");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
  searchBtn.classList.add("active");
  menuToggle.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
  menuToggle.classList.remove("hide");
  nav.classList.remove("open");
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
});

// navbar end
