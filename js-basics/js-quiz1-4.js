/*
Quiz 1 Variables
Quiz 2 Strings
Quiz 3 Operators
Quiz 4 Increment and Decrement Operators
*/

// 1-9
// Q: Until a variable is assigned a value it is said to be: 
// A: uninitialized

// 2-1
// Q: How to make a string?
// A1: Single Quotes
// A2: Double Quotes 

// 2-8
// turn into a valid string
// "Mary said, "I am going to bed.""
var sentence1 = "Mary said, \"I am going to bed.\"";
console.log(sentence1);
var sentence2 = 'Mary said, "I\'m going to bed."';
console.log(sentence2);

// 3-9
// Q: Which statement is true?
console.log(5 != 4); // true
console.log(5 !== 4); // true

// 3-10
// Q: An assignment operator
// A: Assigns a value to its left operand based on the value of its right operand.

// 3-12
// Q: String Operator
// A: can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

// 4-1 
// An operand is the quantity on which an opeartion is to be done.
// For example in the math equation 1 + 2
// 1 and 2 are operands

// 4-2
// JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.

// 4-4
// When you use the increment operator after (postfix) the operand, the value will be returned before the operand is increased.
// When you use the increment before (prefix) the operand, the value will be increased before it is returned.
var a = 1;
console.log(a++); // 1
console.log(a); // 2