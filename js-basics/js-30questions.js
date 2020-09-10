/*
30 JS questions
*/

// question 4
console.log(true && false); // false

// question 5
let A = true;
let B = false;

console.log((A || B)); // ture
console.log(!(A || !B) && (A && !B && A) || (A || B));

// question 9
// Q: Can we call the function expressions A at line 126 in our code if A is declared in line 253?
// A: No, this is only possible for function declarations.

// question 10
// Thanks to hoisting:
// Variables are set to undefined in the creation phase.

// question 11
// Closures are not formed with anonymous functions.

// question 12
// Q: Function A declares vaiable X and function B. Can function B access variable X?
// A: Yes, because of the scope chain.

// question 13
// Q: Three Correct things about the 'this' keyword.
// A1: It is created for each execution context.
// A2: In a method call, the 'this' keyword points to the object that it's attached to.
// A3: In a method call, the 'this' keyword is only defined as soon as the method gets called.

// question 15
// Q: DOM events are processed when:
// A: The execution stack is empty.

// question 16
// Q: Three Correct things about Event Delegation?
// A1: We use it when we need event handlers on an unknown number of elements that are all children of a known element.
// A2: Event delegation makes use of event bubbling because event bubbling allow us to "wait" until an event bubbles up to a known element.
// A3: We use it when need event handlers on elements that are not in the DOM when our code enters the execution phase.

// question 19
// Q: What does the 'new' operator NOT do?
// A1: Creating a new empty object.
// A2: Calling a function. 
// A3: Making the 'this' variable of the called function point to the newly created object.

// question 21
// Q: Consider object A = object B. By mutating property X on A, X on B will:
// A: Be mutated as well, because A and B actually point to the same object in memory. 

// question 22
// Q: Suppose we create a new array. Why can the array use the map method?
// A: Because of the prototype chain.

// question 24
// Q: Function A declares variable X and returns function B. Can function B access variable X?
// A: Yes, because of closures.

// question 25
// Q: What is a callback function?
// A: A function that is passed to another function as an argument.

// question 26
// Q: An immediately invoked Function Expression?
// A: is only called once.

// question 27
// Q: Why is the call method useful for method borrowing?
// A: Because it allows us to set the 'this' variable manually.

// question 28
// Q: Which of the following methods creates a new function with preset arguments?
// A: Function.bind()

// question 29
// Q: Three Correct Things about Encapsulation?
// A: Private functions may leak into the global scope.

// question 30
// Q: In the module pattern, why can public methods access private functions and variables?
// A: Because a closure was created. 