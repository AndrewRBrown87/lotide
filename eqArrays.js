// assertEqual Function
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🙂 Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🤬 Assertion Failed: [${actual}] !== [${expected}]`);
};

const eqArrays = function(array1, array2) {
  //check if arrays are the same length
  if(array1.length !== array2.length) {
    //return false if arrays are different lengths
    return false;
  }

  //loop through and compare each array element
  for(let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //return false if elements aren't identical
      return false
    }
  }

  //return true if array elements turn out to be identical
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
