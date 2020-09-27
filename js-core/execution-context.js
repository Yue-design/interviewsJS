/*
Exexution Context

Execution context is defined as the environment in which the JavaScript code is executed.

There are three types of Execution Context
Global Execution Context - Execution Context Stack
Functional Execution Context
Eval

Execution Context Stack:
Order in which functions are called.

JavaScript engine creates the execution context in the following two stages:
Creation Phase
Execution Phase

Creation Phase:
Creates the Activation object or the Variable object
Creates the scope chain
Determines the value of this

Scope Chain
Order in which functions are written lexically.
*/

var a = 10;
function functionA() {
  console.log("Start Function A");
  function functionB() {
    console.log("In Function B");
  };
  functionB();
};

functionA();
console.log("Global Context");

// output?
// scope chain

// var a = "Hello!";
// first();

// function first() {
//   var b = 'Hi!';
//   second();

//   function second() {
//     var c = 'Hey!';
//     third();
//   };
// };

// function third() {
//   var d = 'John';
//   // console.log(c);
//   console.log(a+d);
// }