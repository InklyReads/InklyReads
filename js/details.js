document.addEventListener("DOMContentLoaded", () =>{
    let urlParams = new URLSearchParams(window.location.search);
    let bookId = urlParams.get('id');

    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => {
        let thebook = data[bookId-1];
        console.log(thebook);
        let container = document.querySelector("#product");;
        // div.classList = "details-container";
        container.innerHTML = `
        <div class="product_images"><img src="${thebook.img}" alt=""></div>
    <div class="product_details">
        <div class="back">
           <h6>Back to <a href="/html/books.html">Books</a></h6>
        </div>

        <h2>${thebook.title}</h2>

        <div class="about">
            <p>Author : <span>${thebook.author}</span></p>
            <p>Number of pages: <span>${thebook.pages}</span></p>   
            <p>Year : <span>${thebook.year}</span></p>
        </div>

        <p>${thebook.long_description}</p>
        <ul>
            <li>type : ${thebook.type}</li>
        </ul>
        
        <div class="cta">
        <button type="button" class="btn btn-light">Get the book</button>
            <div class="btn btn_outline_secondary">
            <button type="button" class="btn btn-danger">Add to wishlist</button>
        </div>
    </div>`;
                container.appendChild(container);
    });

    // let button = document.querySelector(".button-24");
    // button.addEventListener("click", () =>{
    //     let comment = document.querySelector(".typehere").value;
    //     let comdiv = document.createElement("div");
    //     let cont = document.querySelector(".sec2");
    //     comdiv.classList = "comments-container";
    //     comdiv.innerHTML = `<div class="comment">
    //                 <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="">
    //                 <div>${comment}</div>
    //             </div>
    //             <hr>`;
    //     cont.prepend(comdiv);
    //     fetch(`http://localhost:3000/comments`, {
    //         headers: {"Content-type": "application/json; charset=UTF-8"},
    //             // Adding method type
    //             method: "POST",
    //             // Adding body or contents to send
    //             body: JSON.stringify({
    //                 id : "",
    //                 booknumber : `${bookId}`,
    //                 comment : `${comment}`,
    //             }),
    //     })
        
    // });

    // fetch("http://localhost:3000/comments")
    // .then(response => response.json())
    // .then(data => {
    //     let filtered = data.filter((comment) => comment.booknumber == bookId);
    //     filtered.map((f) => {
    //         let comdiv = document.createElement("div");
    //          let cont = document.querySelector(".sec2");
    //         comdiv.classList = "comments-container";
    //         comdiv.innerHTML = `<div class="comment">
    //                 <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="">
    //                 <div>${f.comment}</div>
    //             </div>
    //             <hr>`;
    //     cont.prepend(comdiv);
    //     });
    // })
    // Use the book ID to fetch book details (you can replace this with your logic)
    // console.log(bookId);
});