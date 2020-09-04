// JavaScript's string type is used to represent textual data.
// String is a set of 'elements' of 16-bit unsigned integer values (UTF-16 code units).
// You can create strings using string literals or string objects.

// 1. String literals
'foo'

// 2. String objects
// Strings are Immutable
const foo = new String('foo');
console.log(typeof foo); // object
console.log(eval(foo)); // String("foo")
console.log(foo[0]); // f

const number = '2+2'; 
console.log(eval(number)); // 4
const numLen = number.length;
console.log(numLen); // 3

// 3. Multi-line Template Literals
// Template Literals are string literals allowing embedded expressions.

// Multi-lines
console.log(`line1
line2`);

// Embedded Expressions
const five = 5;
const ten = 10;
console.log(`Fiften is ${five + ten}.`);