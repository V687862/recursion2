/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.


***********************************************************************/


const addToTwelve = arr => {
  if(arr.length < 2) return false; // if the array length is less than two - (less than 2) // base case
  if(arr[0] + arr[1] === 12) return true; // look at this one again later // recursive case and step

  return addToTwelve(arr.slice(1)); // slice
} 

// vernon magic 
// const addToTwelve = (arr) =>
//   arr.length < 2 ?
//     false :
//     arr[0] + arr[1] === 12 ?
//       true : 
//       addToTwelve(arr.slice(1));

// Examples:

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
