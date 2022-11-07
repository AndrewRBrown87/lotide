// assertArraysEqual.js

const eqArrays = require('./eqArrays');

//assertArraysEqual Function
const assertArraysEqual = function(actual, expected) {
  //compare using the eqArrays function
  eqArrays(actual, expected) ? console.log(`🙂 Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🤬 Assertion Failed: [${actual}] !== [${expected}]`);
};

module.exports = assertArraysEqual;

