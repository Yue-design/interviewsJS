/*
apply()

The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
*/

// 1. Basic
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max);
const min = Math.min.apply(null, numbers);
console.log(min);

// 2. Using apply to append an array to another
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array);

// 3. Using apply and built-in functions

// 4. Using apply to chain constructors
Function.prototype.construct = function(aArgs) {
  let oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};