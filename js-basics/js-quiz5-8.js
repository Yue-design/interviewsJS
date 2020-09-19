/*
Quiz 5 Objects
Quiz 6 Object Dot and Bracket Notation
Quiz 7 Arrays
Quiz 8 Arrays Methods
*/

// 5-7 Bracket Notation & Dot Notation
// Dot Notation is commonly used.
var pizza = {
  dough: 'thin crust',
  topptings: 'combination',
  cheese: 'american',
};
console.log(pizza['toppings']);

// 7-1
// All arrays are a type of object.

// 7-3 adding a number to the front of the array
var weeklyTemperature = [74, 78, 82, 79, 83];
weeklyTemperature.unshift(84);
console.log(weeklyTemperature);