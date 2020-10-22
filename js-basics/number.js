// In JavaScript, numbers are implemented in double-precision 64-bit binary format.
// IEEE 754:
// +-2**-1022 to +-2**1023
// +-10**-308 to +-10**308
// with a numeric precision of 53 bits
// Integer values up to +-2**53 - 1 can be represented exactly

// In addition to being able to represent floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN(not-a-number).
// BigInt lets you represent integers that may be very large.

// 1. Numbers

// Four Types of Number Literals
console.log(42, 123456);
console.log(0888, 0777); // 888 511
// Decimal Numbers
// Binary Numbers
// Octal Numbers
// Hexadecimal Numbers
console.log(0xa); // 10

// Exponentiation
console.log(1e3, 0.1e2); // 1000 10

// 2. Number Object
// The built-in Number has properties for numerical constants, and you cannot change the values of these properties.

// Properties of Number
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
console.log(biggestNum, smallestNum, infiniteNum, negInfiniteNum, notANum);

// Methods of Number
console.log(parseFloat(Math.PI));
console.log(parseInt(3.14));
console.log(Number.isInteger(3));

// Methods of Number.Prototype
let num = 5.123456;
console.log(num.toPrecision(5), num.toFixed(2)); // 5.1235 5.12

// isNaN()
console.log(isNaN("hello")); // an illegal number

// eval(): from string to number
console.log(typeof eval("1+2"));
