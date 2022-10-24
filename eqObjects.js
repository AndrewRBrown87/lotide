// asserEquals Function
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🙂 Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🤬 Assertion Failed: [${actual}] !== [${expected}]`);
};

// eqArrays function
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key of keys1) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
