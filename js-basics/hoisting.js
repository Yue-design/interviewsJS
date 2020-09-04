/*
Hoisting is a term in ECMA2015.
Hoisting is about how execution contexts work in JavaScript.
Conceptually, hoisting suggests that variable and function declarations are physically moved to the top of your code.
In fact, the variable and function declarations are put into memory during the compile phase,
but stay exactly where you typed them in your code.
*/

// 1. Technical Example
catName("Chloe");
function catName(name) {
  console.log("My cat's name is " + name);
}

// 2. Only Declarations Are Hoisted
var num = 6;
console.log(num);