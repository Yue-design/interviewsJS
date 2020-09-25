/*
Destructuring Assignment

The destructing assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
*/

// Syntax
let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y, z);

// 1. Array Destructuring
// Basic Variable Assignment
// Assignment Separate from Declaration
// Default Values

// Swapping Variables
const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);
// Parsing an array returned from a function
// Ignoring some returned values
// Assigning the rest of an array to a variable
// Unpacking values from a regular expression match

// 2. Object Destructuring
// Basic Assignment
// Assignment without Declaration
// Assigning to new variable names
// Default Values
// Assigning to new variables names and providing default values
// Setting a function parameter's default value
// Nested object and array destructuring
// For of iteration and destructuring
// Computed object property names and destructuring
let key = 'z';
let {[key]: foo} = {z: 'bar'};
console.log(foo);

// Rest in Object Destructuring 
// Invalid JavaScript identifier as a property name
// Combined Array and Object Destructuring
// The prototype chain is looked up when the object is deconstructed