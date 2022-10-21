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

const without = function(source, itemsToRemove) {
  let answer = [];
  let remove = false;

  //loop through source array items
  source.forEach(function(item) {
    //by default items are not to be removed
    remove = false;
    //loop through itemsToRemove array
    for (let i = 0; i < source.length; i++) {
      //compare item and itemsToRemove
      if (item === itemsToRemove[i]) {
        //set remove = true if item is to be removed
        remove = true;
      }
    }

    //add item to answer array if we are keeping it
    if (remove === false) {
      answer.push(item);
    }
  });
  return answer;
};


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
