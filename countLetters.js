// asserEquals Function
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🙂 Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🤬 Assertion Failed: [${actual}] !== [${expected}]`);
};

//input: a string to count the letter of
const countLetters = function(input) {
  //inside the loop count each letter in the string
  //increment a property with the letter key
  let answer = {};
  for (const letter of input) {
    if (answer[letter]){
      answer[letter] += 1;
    } else {
      answer[letter] = 1;
    }
  }

  return answer;
};

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"],1);
assertEqual(result1["i"],2);
assertEqual(result1["g"],1);
assertEqual(result1["h"],4);
assertEqual(result1["t"],2);
assertEqual(result1["o"],2);
assertEqual(result1["u"],2);
assertEqual(result1["s"],2);
assertEqual(result1["e"],3);
assertEqual(result1["n"],1);