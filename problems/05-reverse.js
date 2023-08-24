/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.


***********************************************************************/


const reverse = str => {
  // console.log(str)
  if(!str.length) return str //base case
  //if (str.length <= 1) return str
  // " DO NOT ADD THIS JOKER" return str.split(" ").reverse(" ").join(" ")
  return str[str.length -1] + reverse(str.slice(0, -1)); // need to break this down later
  // recursive step
  // recursive case


}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
