const datatype = "";
document.addEventListener("DOMContentLoaded", () =>{
    let section = document.querySelector(".books");
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => {
        data.map((data) => {
            let description = data.long_description.substring(0,150);
            description = description + "...";
            let book = document.createElement("div");
            book.innerHTML = `
            <div id="container">	
                <div class="product-details">
                    <h1>${data.title}</h1>
                    <hr>
                    <p class="information">${description}</p>
                    <div class="control">
                        <button class="btn">
                        <span class="buy" id = "${data.id}";><a href="/html/details.html?id=${data.id}">view</a></span>
                        </button>
                        </a>
                    </div>
                </div>
                <div class="product-image">
                    <img src="${data.img}" alt="pic of the book">
                    <div class="info">
                        <h2>About the book</h2>
                        <ul>
                            <li><strong>Height: </strong>${data.author}</li>
                            <li><strong>Shade: </strong>${data.year}</li>
                            <li><strong>Decoration: </strong>${data.pages}</li>
                            <li><strong>Material: </strong>${data.rating}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
            section.appendChild(book);
            if (data.type == "Science"){

            }else if (data.type == "History"){
    
            }else if (data.type == "Economic"){
    
            }else if (data.type == "Story"){
    
            }
        })
    })
    .catch(error => console.log("there is an error in fetch the books.js"))
});