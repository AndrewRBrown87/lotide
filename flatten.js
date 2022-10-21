//assertArraysEqual Function
const assertArraysEqual = function(actual, expected) {
  //compare using the eqArrays function
  eqArrays(actual, expected) ? console.log(`🙂 Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🤬 Assertion Failed: [${actual}] !== [${expected}]`);
};

//eqArrays Function
const eqArrays = function(array1, array2) {
  //check if arrays are the same length
  if (array1.length !== array2.length) {
    //return false if arrays are different lengths
    return false;
  }

  //loop through and compare each array element
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //return false if elements aren't identical
      return false;
    }
  }

  //return true if array elements turn out to be identical
  return true;
};

//flatten Function
const flatten = function(theArray) {
  //to contain flattened array
  let answer = [];
  
  //loop through the array to be flattened
  theArray.forEach(function(element) {
    if (Array.isArray(element)) {
      //loop through the element array
      element.forEach(function(item) {
        //add to the answer array
        answer.push(item);
      });
    } else {
      //if element is not an array, add it to the answer array
      answer.push(element);
    }
  });

  //return the flattened array
  return answer;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
