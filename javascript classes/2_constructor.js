//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was wrtitten by ${this.author} in ${this.year}`;
  };
}

//Instantiate an Object using constructor then it executes the code inside it
const book1 = new Book('Book One', 'John Doe', '2009');
const book2 = new Book('Book Two', 'John Smith', '2019');

console.log(book1);
console.log(book2);
console.log(book1.getSummary());
console.log(book2.getSummary());
