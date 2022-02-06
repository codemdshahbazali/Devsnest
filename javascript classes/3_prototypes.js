//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//get summary - this is being attached to the object using prototype
Book.prototype.getSummary = function () {
  return `${this.title} was wrtitten by ${this.author} in ${this.year}`;
};

//get age - methods declared with prototype becomes part of __proto__ object. It doesn't directly becomes part of main object
Book.prototype.getAge = function () {
  return `${this.title} is ${new Date().getFullYear() - this.year} old`;
};

//add new property to the object and modify existing property
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

//Instantiate an Object using constructor then it executes the code inside it
const book1 = new Book('Book One', 'John Doe', '2009');
const book2 = new Book('Book Two', 'John Smith', '2019');

console.log(book1);
console.log(book2);
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book1.getAge());
console.log(book2.getAge());
console.log(book1.revise(2008));
console.log(book2.revise(2010));
console.log(book1);
console.log(book2);
