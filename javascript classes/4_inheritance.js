//Inheritance with prototype
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

//Magzine Constructor
function Magzine(title, author, year, months) {
  Book.call(this, title, author, year);

  this.months = months;
}

//Inherit Prototype
Magzine.prototype = Object.create(Book.prototype);

//Instantiate Magazine
const mag1 = new Magzine('Mag1', 'John Doe', '2018', 'Jan');

//Use Magazine Constructor
Magzine.prototype.constructor = Magzine;

console.log(mag1);
console.log(mag1.getSummary()); // this prototype method will not be inherited , we need to explicitly do this
