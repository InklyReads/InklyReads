document.addEventListener("DOMContentLoaded", () =>{
    let urlParams = new URLSearchParams(window.location.search);
    let bookId = urlParams.get('id');

    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => {
        let thebook = data[bookId-1];
        let container = document.querySelector(".book-details");
        let div = document.createElement("div");
        div.classList = "details-container";
        div.innerHTML = `
        <div class="the-head">
                    <div><img src = "${thebook.img}" alt=""></div>
                    <div class="details">
                        <h3 class = "mytitle">${thebook.title}</h3>
                        <p>${thebook.long_description}</p>
                    <div class="more">
                       <span>the author: ${thebook.author}</span>
                       <span>in year: ${thebook.year}</span>
                       <span>number of pages: ${thebook.pages}</span>
                       <span>rating: ${thebook.rating}</span>
                    </div>
                    <div class="wrapper">
                        <a href="#"><span>Download</span></a>
                    </div>
                    </div>
                </div>`;
                container.appendChild(div);
    });

    let button = document.querySelector(".button-24");
    button.addEventListener("click", () =>{
        let comment = document.querySelector(".typehere").value;
        let comdiv = document.createElement("div");
        let cont = document.querySelector(".sec2");
        comdiv.classList = "comments-container";
        comdiv.innerHTML = `<div class="comment">
                    <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="">
                    <div>${comment}</div>
                </div>
                <hr>`;
        cont.prepend(comdiv);
        fetch(`http://localhost:3000/comments`, {
            headers: {"Content-type": "application/json; charset=UTF-8"},
                // Adding method type
                method: "POST",
                // Adding body or contents to send
                body: JSON.stringify({
                    id : "",
                    booknumber : `${bookId}`,
                    comment : `${comment}`,
                }),
        })
        
    });

    fetch("http://localhost:3000/comments")
    .then(response => response.json())
    .then(data => {
        let filtered = data.filter((comment) => comment.booknumber == bookId);
        filtered.map((f) => {
            let comdiv = document.createElement("div");
             let cont = document.querySelector(".sec2");
            comdiv.classList = "comments-container";
            comdiv.innerHTML = `<div class="comment">
                    <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="">
                    <div>${f.comment}</div>
                </div>
                <hr>`;
        cont.prepend(comdiv);
        });
    })
    // Use the book ID to fetch book details (you can replace this with your logic)
    // console.log(bookId);
});