/*
Array is a collection of data which is ordered by an index value.
It includes arrays and array-like constructs such as Array objects and TypedArray objects.

Array Object
An array is an ordered list of values that you refer to with a name and an index.
JavaScript does not have an explicit array data type.
*/

// 1. Creating An Array
let arr_1 = new Array(0, 1, 2);
let arr_2 = Array(0, 1, 2);
let arr_3 = [0, 1, 2];

// 2. Referring to array elements
let myArray3 = ['Wind', 'Rain', 'Fire'];
console.log(myArray3[2]);

// 3. Populating an Array
let emp = []
emp[0] = 'Casey Jones'
emp[1] = 'Phil Lesh'
emp[2] = 'August West'

let myVar = '0';
let myArray1 = new Array('Hello', myVar, 3.14159);

let myArray2 = ['Mango', 'Apple', 'Orange']

// 4. Understanding Length
let cats = []
cats[30] = ['Dusty']
console.log(cats.length);

// 5. Iterating Over Arrays: arrays, DOM nodes
let colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
};
colors.forEach(color => console.log(color));

// 6. Array Methods
let arr = new Array('1', '2', '3');
console.log(arr);
arr = arr.concat('a', 'b', 'c');
console.log(arr);
let list = arr.join(' - ');
console.log(list);
arr.push('3');
console.log(arr);
let last = arr.pop();
console.log(last);
let first = arr.shift();
console.log(first);
arr.unshift('4', '5');
console.log(arr);
arr = arr.slice(1, 4);
console.log(arr);
arr.splice(1, 3, 'a', 'b', 'c', 'd');
console.log(arr);
arr.reverse();
console.log(arr);
arr.sort();
console.log(arr);
let sortFn = function(a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
arr.sort(sortFn);
console.log(arr);
let a = ['a', 'b', 'a', 'b', 'a'];
let index1 = a.indexOf('b');
console.log(index1);
let index2 = a.indexOf('b', 2);
console.log(index2);
let index3 = a.indexOf('z');
console.log(index3);
let index4 = a.lastIndexOf('b');
console.log(index4);
let index5 = a.lastIndexOf('b', 4);
console.log(index5);
let index6 = a.lastIndexOf('z');
console.log(index6);
a.forEach(function(element) {console.log(element)});
let a2 = a.map(function(item) { return item.toUpperCase() });
console.log(a2);
let a3 = a.filter(function(item) { return typeof item === 'number'; })
console.log(a3);
function isNumber(value) {
  return typeof value === 'number';
}
let a1 = [1, 2, 3];
let bol = a1.every(isNumber);
console.log(bol);
let total = a1.reduce(function(accumulator, currentValue) { return accumulator + currentValue}, 0)
console.log(total);

// 7. Multi-dimensional Arrays
let ab = new Array(4);
for ( let i = 0; i < 4; i++) {
  ab[i] = new Array(4);
  for ( let j = 0; j < 4; j++) {
    ab[i][j] = '[' + i + ', ' + j + ']';
  }
}

// 8. Using Arrays to Store Other Properties
const arr4 = [1, 2, 3];
arr4.property = "value";
console.log(arr4.property);

// 9. Arrays and Regular Expressions
// RegExp.exec()
// String.match()
// String.split()

// 10. Working with Array-like Objects
// document.getElementByTagName()