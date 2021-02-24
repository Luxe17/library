const books = document.querySelector("#books");

//Book Constructor
function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        let Info = [title, author, pages, status];
        let bookInfo = join(', ');
    }
}

//list to store books
let myLibrary = [];

//Display books from myLibrary
function addToMyLibrary(){
    for(x = 0; x < myLibrary.length; x++){

    }
}