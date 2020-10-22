/*
callback

a function passing into another function as an argument
js is a event driven language, which will keep executing while listenting for other events

a callback hell => anti-pattern with multiple nests
*/

function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);
