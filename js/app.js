document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/comments")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log("there is an error with git"));
});

let arr = [1, 2, 5, 8];

console.log(
  arr.filter((el) => {
    return el <= 2;
  })
);
