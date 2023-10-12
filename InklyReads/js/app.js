document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/comments")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log("there is an error with git"));
});
