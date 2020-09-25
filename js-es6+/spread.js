/*
Spread

Spread syntax(...) allows an iterable such an array expression or string to be expanded in places where zero or more arguments(for function calls) or elements (for array literals) are expected, 
or an object expression to be expanded in places where zero or more key-value pairs(for object literals) are expected.

Rest syntax is the opposite of spread syntax, spread syntax "expands" an array into its elements.

1) For function calls
myFunction(...iteralbleObj);
2) For array literals or strings
[...iterableObj, '4', 'five', 6];
3) For object literals (ES2018)
let objClone = {...obj};
*/

// 1. Spread in function calls
// Replace apply()
function sum(x, y, z) {
  return x + y + z;
};
const numbers = [1, 2, 3];
console.log(sum(...numbers));
console.log(sum.apply(null, numbers));

// Apply for new operator
const dateFields = [1970, 0, 1];
const d = new Date(...dateFields);

// 2. Spread in array literals
// A more powerful array literal
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

// Copy an array
const arr = [1, 2, 3];
const arr2 = [...arr]; // one level deeper, not for multidimensional arrays
arr2.push(4);
console.log(arr2);
const arr3 = arr.slice();
arr3.unshift(0);
console.log(arr3);

// A better way to concatenate arrays
const array1 = [0, 1, 2];
const array2 = [3, 4, 5];
const array3 = [...array1, array2];
console.log(array1, array3);
Array.prototype.unshift.apply(array1, array2);
console.log(array1, array3);

// 3. Spread in object literals
// unsuitable for Object.assign() - no setters
const obj1 = { foo: 'bar', x: 42};
const obj2 = { foo: 'baz', y: 13};
const cloneObj = { ...obj1 };
console.log(cloneObj);
const mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj);

// 4. Only for iterables
// Objects themselves are not iterable, but they become iterable when used in an Array, or with iterating functions such as map(), reduce(), and assign().
// Spread syntax can be applied only to iterable objects.
const obj = {'key1': 'value1'};
// const Arr = [...obj];

// 5. Spread with many values