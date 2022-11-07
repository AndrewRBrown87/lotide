// middle.js

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

module.exports = middle;
