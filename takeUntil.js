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

//takeUntil function
const takeUntil = function(array, callback) {
  let answer = [];
  for (let item of array) {
    if (callback(item) === true) {
      return answer;
    } else {
      answer.push(item);
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

