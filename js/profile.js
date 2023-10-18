document.getElementById('edit-button').addEventListener('click', function () {
    document.getElementById('username').style.display = 'none';
    document.getElementById('edit-username').style.display = 'block';
    
  });


  const userString = sessionStorage.getItem('user-info');
  const user = JSON.parse(userString);
  let div= document.getElementById("userinfo");
  fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => {
    data.map((users) => {
       if(users.firstName == user ){
        let usernamecon = document.createElement("div");
        slide.classList.add('info-container');
      div.innerHTML = `
          <p>${users.firstName}</p>
          <p>${users.email}</p>
       `;
      div.appendChild(usernamecon);
       }

    })
   
    
  });
  fetch(`http://localhost:3000/users/${id}`, {
    method: 'put',
    headers : {
        "Content-Type": "application/json",
    },
    body: json.stringify({content:updatedata}),
})
.then((response) => {

})
.catch((error) => console.error('Error deleting post:', error));
 