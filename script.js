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