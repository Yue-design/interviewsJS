/* 
Functions
1. building blocks
2. a JS procedure: a set of statements

scope: accessibility of variables, functions and objects
*/


// 1. define functions
// function declarations
function square(num) { // consisting of 
  return num * num;    // the function keyword
}
// function expressions
// passing a function as an argument to another function
const myObj = function myFunc(theObject) { // providing a name
  theObject.make = 'Toyota';
}
// var myFunc; 
// if (num == 0) {
//   myFunc = function(theObject) {
//     theObject.make = 'Toyota';
//   }
// }

// 2. calling functions
// hoisting
const f = function(x) {
  return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers); // the function declarations
console.log(cube); // can appear below the call
function map(f, a) {
  let result = [];
  let i;
  for (i = 0; i != a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
// calling itself
const fractorial = function frac(n) {
  return n < 2 ? 1 : n * frac(n-1);
}
// calling dynamically

// 3. function scope
// in a global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';
function multiply() {
  return num1 * num2;
}
console.log(multiply()); // Returns 60
// in a function scope
function getScore() { // A nested function example
  var num1 = 2,
      num2 = 3;
  function add() {
    return name + ' scored ' + (num1 + num2);
  }
  return add();
}
console.log(getScore()); // Returns "Chamahk scored 5"