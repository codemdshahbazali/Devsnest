/**
 * 1. Write a JavaScript program to list the properties of a JavaScript object.
 * Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
 * Sample Output: name,sclass,rollno
 */

const listOfProperties = (obj) => {
  return Object.keys(obj);
};

var student = { name: 'David Rayy', sclass: 'VI', rollno: 12 };
console.log(listOfProperties(student));

/**
 *  2. Write a JavaScript program to delete the rollno property from the following object.
 *  Also print the object before or after deleting the property.
 *  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
 */

const deleteProperty = (obj, propertyName) => {
  delete obj[propertyName];
};

var student = { name: 'David Rayy', sclass: 'VI', rollno: 12 };
console.log(student);
deleteProperty(student, 'rollno');
console.log(student);

/**
 * 3. Write a JavaScript program to get the length of a JavaScript object.
 * Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
 */

const lengthOfObject = (obj) => {
  return Object.keys(obj).length;
};

var student = { name: 'David Rayy', sclass: 'VI', rollno: 12 };
console.log(lengthOfObject(student));

/**
 * 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status)
 * of the following books.
 * var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 * { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
 * { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
 */

const displayObject = (ArrObj) => {
  for (let element of ArrObj) {
    let keys = Object.keys(element);
    console.log(
      `Author Name: ${element[keys[0]]}, Book Name: ${
        element[keys[1]]
      } and Reading Status: ${element[keys[2]]}`
    );
  }
};

var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];
displayObject(library);

/**
 * 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
 * Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.
 * Try To Attempt : Difficult Level Increased
 */

const volumeOfCylinder = (radius, height) => {
  const area = 2 * Math.PI * radius * height;
  return Number.parseFloat(area).toFixed(2);
};

console.log(volumeOfCylinder(4, 10));

/**
 * 6. Write a JavaScript program to sort an array of JavaScript objects.
 * Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
 * { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
 * { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
 * Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
 * [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" },
 * [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
 */

const sortArrayOfObj = (inputArrObj) => {
  return inputArrObj.sort((a, b) => b['libraryID'] - a['libraryID']);
};

var library = [
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
];
console.log(sortArrayOfObj(library));
