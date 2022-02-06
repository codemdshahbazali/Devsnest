//Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

//arrays
let ids: number[] = [1, 2, 3];
let arr: any[] = [1, 3, 'hello'];

//tuple
let person: [number, string, boolean] = [1, 'shahbaz', true];

//tuple array
let employee: [number, string][];
employee = [
  [1, 'Shahbaz'],
  [2, 'Sufi'],
  [3, 'Iqra'],
];

//Union
let pid: string | number = 22;
pid = '22';

//Enums - helps to define set of named constants either numberic or strings
enum Direction1 {
  Up, //0 - default
  Down, //1 - default
  Left, //2 - default
  Right, //3 - default
}

console.log(Direction1.Up);

enum Direction2 {
  Up = 2, //2
  Down, //3
  Left, //4
  Right, //5
}

console.log(Direction2.Up);
console.log(Direction2.Down);

enum Direction3 {
  Up = 'UP', // if this is inialized to string the  below values must be inialized
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(Direction3.Up);
console.log(Direction3.Down);

//Objects

// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: 'John',
// };

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// Type assertion
let cid: any = 1; //initally it is any
let customerId0 = <number>cid; // setting customerId0 as number
let customerId1 = cid as number; // setting customerId1 as number

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(3, 5));

//Function with no return - void
function log(message: string | number): void {
  console.log(message);
}

log('Hello');
log(6);

// Interface - works very similar to type. Used to provide typecasting to function or object
// For objects interfaces are preffered over types
interface UserInterface {
  id: number;
  name: string;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

console.log(user1);

/**
 * Differences between types and interfaces
 *
 * types can be used with primitives and unions
 *
 * whereas we can't use interface with that
 */

type Point = number | string;
const point1: Point = 5;

// interface Point = number | string; // we can't use union with interface

//interface with optional properties and readonly properties (readonly <-> ?)
interface EMPInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const emp1: EMPInterface = {
  id: 1,
  name: 'John',
};

// emp1.id = 5; //can perform this as it is readonly

console.log(emp1);

//Interface with a function
interface MathFunc {
  (x: number, y: number): number;
}

// type MyFunctionType: () => what I want to return;
// using type for functions
//argument types //what we're returning (a string in this case)
type HelloFn = (argument1: string, argument2: number) => string;

const add: MathFunc = (x, y) => x + y;
const subs: MathFunc = (x, y) => x - y;
const multiply: MathFunc = (x: number, y: number): number => x * y;
console.log(add(2, 1));
console.log(subs(2, 1));
console.log(multiply(2, 3));

// Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const name1 = new Person(1, 'Shahbaz');
console.log(name1);
console.log(name1.name);

// Data Modifiers
/**
 * Data Modifiers
 * We have public, private and protected data modifiers available with us
 * private - makes variable not accesible outside the class
 * protected - makes then accessible only within the class and it;s sub-class
 * public - accessible anywhere
 */
class Person1 {
  private id: number;
  protected name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // method
  register() {
    console.log(`${this.name} is registered!!!`);
  }
}

const name2 = new Person1(1, 'Shahbaz');
console.log(name2);
// console.log(name2.id); //this will not be accesible as id is private
// console.log(name2.name); //this will not be accesible as id is protected
name2.register();

// Class with interface

interface EInterface {
  id: number;
  name: string;
  register(): string;
}

class Emp implements EInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    console.log(`${this.name} is registered!!!`);
    return `${this.name} is registered!!!`;
  }
}

const empl1 = new Emp(1, 'Iqra');
console.log(empl1);
console.log(empl1.name);

//Sub Class

class Manager extends Emp {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const manager = new Manager(3, 'Sufi', 'Senior Manager');
console.log(manager.register());
console.log(manager.position);

// Generics - used to build reusable components
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

getArray([1, 2, 3, '4']);
getArray(['a', 'b', 'c']);

//function with generics
function getArray1<T>(items: T[]): T[] {
  return new Array().concat(items);
}

// getArray1<number>([1, 2, 3, '4']); //this will give error as 4 is a string
const strArray = getArray1<string>(['a', 'b', 'c']);
// strArray.push(3);//will throw error as 3 is a number. it should be string
strArray.push('4');
console.log(strArray);

//example of interface with mandatory and optional properties
interface PersonInterface {
  first: string;
  last: string;
  [key: string]: any;
}

const person01: PersonInterface = {
  first: 'Jeff',
  last: 'Delaney',
};

const person02: PersonInterface = {
  first: 'Usain',
  last: 'Bolt',
  fast: true,
};
