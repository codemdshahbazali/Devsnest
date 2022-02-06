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

  getAge() {
    return `${this.title} is ${new Date().getFullYear() - this.year} old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  //can use it without object
  static topBookStore() {
    return 'Im a static method';
  }
}

const book1 = new Book('Book One', 'John Doe', '2009');
const book2 = new Book('Book Two', 'John Smith', '2019');

console.log(book1);
console.log(book2);
book1.revise(2012);
console.log(book1);
console.log(book1.getSummary());
console.log(book2.getAge());
console.log(Book.topBookStore());
