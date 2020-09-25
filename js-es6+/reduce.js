/*
reduce

The reduce() method executes a reducer function on each element of the array, resulting in single output value.

The reducer function takes four arguments:
Accumulator, Current Value, Current Index, Source Array
*/

// 1. Sum all the values of an array

// 2. Sum of values in an object array
let initialValue = 0;
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);
console.log(sum);

// 3. Flatten an array of arrays
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened);

// 4. Counting instances of values in an object
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
let counter = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(counter);

// 5. Grouping objects by a property

// 6. Bonding arrays contained in an array of objects using the spread operator and initialValue

// 7. Remove duplicate items in an array

// 8. Replace .filter() .map() with .reduce()

// 9. Running Promises in Sequences

// 10. Function composition enabling piping

// 11. Write map using reduce