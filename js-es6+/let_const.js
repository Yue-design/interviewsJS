/*
let and const

In ES6, accessing a let or const varaiable before its declaration (within its scope) cause a ReferenceError.
*/

// temporal dead zone
function somethingod() {
  console.log(x1); // undefined
  console.log(x2); // ReferenceError
  var x1 = 1;
  let x2 = 2;
}

somethingod();