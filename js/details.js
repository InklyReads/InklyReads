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

    let button = document.querySelector("#comm-sub");
    button.addEventListener("click", () =>{
        let comment = document.querySelector("#com-text").value;
        let comdiv = document.createElement("div");
        let cont = document.querySelector(".be-comment-block");
        comdiv.classList = "be-comment";
        comdiv.innerHTML = `
        <div class="be-img-comment">	
        <a href="blog-detail-2.html">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="be-ava-comment">
        </a>
        </div>
        <div class="be-comment-content">
            <span class="be-comment-name"><a href="blog-detail-2.html">User</a></span>
        <p class="be-comment-text">${comment}</p>
        </div>`;
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
        filtered.map((d) => {
            let comdiv = document.createElement("div");
             let cont = document.querySelector(".be-comment-block");
            comdiv.classList = "comments-container";
            comdiv.innerHTML = `
            <div class="be-img-comment">	
            <a href="blog-detail-2.html">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="be-ava-comment">
            </a>
            </div>
            <div class="be-comment-content">
            
                <span class="be-comment-name"><a href="blog-detail-2.html">User</a></span>
                <span class="be-comment-time"><i class="fa fa-clock-o"></i></span>
    
            <p class="be-comment-text">${d.comment}</p>
            </div>
            `;
        cont.prepend(comdiv);
        });
    })
    // Use the book ID to fetch book details (you can replace this with your logic)
    // console.log(bookId);
});