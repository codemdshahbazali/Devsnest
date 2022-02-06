//Polymorphism - overriding parent class method in child class
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Generic animal sound');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    super.makeSound(); //way to call parent method overriden function
    console.log('Bhoo Bhoo');
  }
}

const animal1 = new Animal('Cat');
animal1.makeSound();

const animal2 = new Dog('Dog');
animal2.makeSound();
