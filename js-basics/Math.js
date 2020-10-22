// The built-in Math object has properties and methods for mathematical constants and functions.
// Unlike many other objects, you never create a Math object of your own.
// You always use the built-in Math object.

console.log(Math.min(2, 3, -1), Math.max(2, 3, -1));

console.log(Math.random());

console.log(Math.round(5.05), Math.round(5.5), Math.round(5.95));
console.log(Math.round(5.96), Math.round(5.5), Math.round(5.04));

console.log(Math.sign(3), Math.sign(-3), Math.sign(0), Math.sign("-3")); // 1 -1 0 -1

console.log(isFinite(Infinity));
