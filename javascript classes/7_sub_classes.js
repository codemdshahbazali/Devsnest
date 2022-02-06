class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  //   this goes inside proto
  getSummary() {
    return `${this.title} was wrtitten by ${this.author} in ${this.year}`;
  }
}

//Magzine Subclass
class Magzine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const book1 = new Book('Book One', 'John Doe', '2009');
const mag1 = new Magzine('Book Two', 'John Smith', '2019', 'Jan');

console.log(book1);
console.log(mag1);

//Makes it so easy. No need to prototype inherting
console.log(mag1.getSummary());
