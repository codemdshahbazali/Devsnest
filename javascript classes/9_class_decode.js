class Sqaure {
  //   setup the object and it executed only once
  constructor(width) {
    this.width = width;
  }

  getArea() {
    return `Area of the rectangle is ${this.width * this.height}`;
  }

  //getters and setters - looks like properties but are methods of that class
  get getArea() {
    return `Area of the rectangle is ${this.width * this.width}`;
  }
  //Modifies the properties or adds new property
  set setArea(width) {
    this.width = width;
  }

  //Static methods are helpers methods without objects bound to it
  static equals(a, b) {
    return a.width * a.width === b.width * b.width;
  }
}

// const square1 = new Sqaure(7);

// //we can call it like property
// console.log(square1); // Sqaure {}
// console.log(square1.getArea);
// square1.setArea = 5;
// console.log(square1.getArea);
// console.log(square1); //Sqaure { width: 5 }

const square1 = new Sqaure(6);
const square2 = new Sqaure(6);

console.log(Sqaure.equals(square1, square2));
