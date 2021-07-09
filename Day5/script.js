/**
 * 1. Write a JavaScript function to check whether an `input` is an array or not
    Test Data :
    console.log(is_array('w3resource'));
    console.log(is_array([1, 2, 4, 0]));
    false
    True

 */

function is_array(input) {
  return Array.isArray(input);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

/**
 * 2.  Write a JavaScript function to clone an array
 * Test Data :
    console.log(array_Clone([1, 2, 4, 0]));
    console.log(array_Clone([1, 2, [4, 0]]));
    [1, 2, 4, 0]
    [1, 2, [4, 0]]
 * */

function array_Clone(input) {
  if (!Array.isArray(input)) {
    return 'Not an array. Invalid input!';
  }

  return input.slice(0);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

/**
 * Write a JavaScript function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array.
    Test Data :
    console.log(first([7, 9, 0, -2])); // undefined -> first element 
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));
    Expected Output :
    7
    []
    [7, 9, 0]
    [7, 9, 0, -2]
    []
 */

function first(inputArr, numberOfElements) {
  //returns message if passed input is not an array
  if (!Array.isArray(inputArr)) {
    return 'Not an array. Invalid input!';
  }

  //Checks for falsy values (undefined)
  if (numberOfElements) {
    //returns empty array if passed numberOfElements is negative
    if (numberOfElements < 0) {
      return [];
    }

    //returns portion of array if passed numberOfElements is positive
    return inputArr.slice(0, numberOfElements);
  } else {
    //returns first element if numberOfElements is undefined
    return inputArr.shift();
  }
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

/**
 * Write a simple JavaScript program to join all elements of the following array into a string.
  Sample array : myColor = ["Red", "Green", "White", "Black"];
  Expected Output :
  "Red,Green,White,Black"
  "Red,Green,White,Black"
  "Red+Green+White+Black"
 */

function joinArrayIntoAString(inputArr) {
  //returns message if passed input is not an array
  if (!Array.isArray(inputArr)) {
    return 'Not an array. Invalid input!';
  }

  console.log(inputArr.join(','));
  console.log(inputArr.join(','));
  console.log(inputArr.join('+'));
}

const myColor = ['Red', 'Green', 'White', 'Black'];
joinArrayIntoAString(myColor);

/**
 *  Write a JavaScript program to find the most frequent item of an array
    Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    Sample Output : a ( 5 times )
 */

function mostFrequentItem(inputArr) {
  //returns message if passed input is not an array
  if (!Array.isArray(inputArr)) {
    return 'Not an array. Invalid input!';
  }

  //initializing individual count of element and result object
  let count = 0;
  let resultObj = {};

  //Outer for loop to iterate through all the elements in the list
  for (let i = 0; i < inputArr.length; i++) {
    //getting the element and checking wether it's occurance has already been calculated in the resultObj
    element = inputArr[i];
    if (resultObj[element] != null) {
      continue;
    }

    //Inner for loop- for comparing the element with other elements of the list to check the occurance value
    for (let j = i; j < inputArr.length; j++) {
      if (element === inputArr[j]) {
        count++;
      }

      if (j === inputArr.length - 1) {
        resultObj[element] = count;
        count = 0;
      }
    }
  }

  //converting the object to array for sorting it
  let resultArr = [];
  for (let key in resultObj) {
    resultArr.push([key, resultObj[key]]);
  }

  //sorting the array in desending order based on number of occurances
  resultArr.sort((a, b) => b[1] - a[1]);

  //returning the result
  return `${resultArr[0][0]} ( ${resultArr[0][1]} times )`; //resultArr[0];
}

console.log(
  mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])
);
