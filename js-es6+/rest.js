/*
Rest 

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function f(a, b, ...theArgs) {
  //...
}

Difference between rest parameters and the arguments object
1) rest parameters are only the ones that haven't been given a separate name, while the arguments object contains all arguments passed to the function;
2) the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly; 
3) the arguments object has additional functionality specific to itself.
*/

// 1. Using rest parameters

// 2. Argument length
function fun1(...theArgs) {
  console.log(theArgs.length);
};
fun1();
fun1(5);
fun1(5, 6, 7);

// 3. Ordinary parameter and rest parameters
function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => {
    return multiplier * element;
  });
};
let arr = multiply(2, 1, 2, 3);
console.log(arr);

// 4. Use with the arguments object
function sortRestArgs(...theArgs) {
  let sortedArgs = theArgs.sort();
  return sortedArgs;
};
console.log(sortRestArgs(5, 3, 7, 1));