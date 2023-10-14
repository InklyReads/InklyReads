class Books {
    constructor (id,image,title,long_description,author ,year,pages,rating,type) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.long_description = long_description;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.rating = rating;
        this.type = type;

    }
}


var record1 = document.getElementById("button");




record1.addEventListener("click",(Image) => {
    

    window.location.href = "books2.html"

});


// let View = document.getElementById("button");

// View.addEventListener("click",(button) => {
    

//     window.location.href = "books3.html"

// });