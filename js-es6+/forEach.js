/*
forEach

*/

// 1. Array.prototype.forEach()
const array1 = ["a", "b", "c"];
array1.forEach(element => console.log(element));

// 2. Set.prototype.forEach()
function logSetElements(value1, value2, set) {
  console.log(`$[${value1}] = ${value2}`);
};

new Set(['foo', 'bar', undefined]).forEach(logSetElements);

// 3. Map.prototype.forEach()
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
};

new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);