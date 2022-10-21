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

const middle = function(array) {
  //answer array
  let answer = [];
  
  if (array.length <= 2) {
    //set empty answer array if 2 or fewer elements
    answer = [];
  } else if (array.length % 2 !== 0) {
    //if odd number of elements add middle element to answer array
    answer.push(array[Math.ceil(array.length / 2) - 1]);
  } else {
    //if even number of elements add the 2 middle elements to answer array
    answer.push(array[array.length / 2 - 1]);
    answer.push(array[array.length / 2]);
  }
  //return answer array
  return answer;
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]
