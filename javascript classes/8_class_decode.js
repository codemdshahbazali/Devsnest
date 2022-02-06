class Reactangle {
  //setup the object and it executed only once
  constructor(width, height, color) {
    // This refers to the current object
    // this.width = 5;
    // this.height = 3;
    // this.color = 'blue';

    this.width = width;
    this.height = height;
    this.color = color;
    // this.test = function () {
    //   return 'test';
    // };
  }

  getArea() {
    return `Area of the rectangle is ${this.width * this.height}`;
  }
}

const rect1 = new Reactangle(7, 5, 'red');
const rect2 = new Reactangle(8, 2, 'green');

// console.log(rect1.test());
console.log(rect2);
console.log(rect1.getArea());
console.log(rect2.getArea());
