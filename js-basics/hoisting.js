/*
Hoisting

Hoisting is a term in ECMA2015.

Hoisting is about how execution contexts work in JavaScript.
Conceptually, hoisting suggests that variable and function declarations are physically moved to the top of your code.

In fact, the variable and function declarations are put into memory during the compile phase,
but stay exactly where you typed them in your code.

It means that var, const and let variable declarations are interpreted as if it is at the top of its scope.

var: variables will be hoisted
let: hoisted but not initialized
*/

// 1. Technical Example
catName("Chloe");
function catName(name) {
  console.log("My cat's name is " + name);
}

// 2. Only Declarations Are Hoisted
var num = 6;
console.log(num);

// 3.  output?
// a will be hoisted to the top of its local scope with an initial value of undefined
var a = 'hi';
console.log(a); // hi
function myFunction() {
  var a;
  console.log(a); // undefined
  a = 'hello';
  console.log(a); // hello
};
myFunction();