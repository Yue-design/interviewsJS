/*
JSON

1. coverting JSON object into a string
2. what you recive from a web server is always a string
*/

// JSON => string
var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(userJSON);
console.log(userString);

// string => JSON
var userString = '{ name: "John", age: 31 }';
var userJSON = JSON.parse(userString);
console.log(userJSON);
