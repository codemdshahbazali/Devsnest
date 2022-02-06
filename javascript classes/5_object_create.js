// Object of Protos

const bookProtos = {
  getSummary: function () {
    return `${this.title} was wrtitten by ${this.author} in ${this.year}`;
  },

  getAge: function () {
    return `${this.title} is ${new Date().getFullYear() - this.year} years old`;
  },
};

//Object Create
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'Shahbaz';
book1.year = '2019';

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());

//Other way to create object
const book2 = Object.create(bookProtos, {
  title: { value: 'Book two' },
  author: { value: 'Sharique' },
  year: { value: '2013' },
});

console.log(book2); //{}
console.log(book2.getSummary()); //Book two was wrtitten by Sharique in 2013
console.log(book2.getAge()); //Book two is 8 old
