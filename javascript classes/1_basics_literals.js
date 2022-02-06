const s1 = 'Hello';
console.log(typeof s1); //string

console.log(typeof s1.toLowerCase()); //string

const s2 = new String('Hello');
console.log(typeof s2); //object

// console.log(window); //parent of all objects in browser
// window.alert('shahbaz');

// alert(navigator.appVersion);

//object literals
const book1 = {
  title: 'book1',
  author: 'John Doe',
  year: '2013',
  getSummary: function () {
    return `${this.title} was wrtitten by ${this.author} in ${this.year}`;
  },
};

console.log(book1);
console.log(book1.author);
console.log(book1.getSummary());

//values of an object and keys
console.log(Object.values(book1));
console.log(Object.keys(book1));

//for creating object book of above type we need to literally copy paste code
//for this purpose we use constructors
