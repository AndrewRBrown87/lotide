// eqArrays.js

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

module.exports = eqArrays;
