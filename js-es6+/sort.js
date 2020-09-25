/*
sort

The sort() method sorts the elements of an array in place and returns the sorted array.

The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
*/

// 1. Creating, displaying and sorting an array
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// 2. Sorting non-ASCII characters
var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(items);

// 3. Sorting with Map
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
var mapped = list.map(function(el, i) {
  return {index: i, value: el.toLowerCase()};
});
console.log(mapped);
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  };
  if (a.value < b.value) {
    return -1;
  };
  return 0;
});
console.log(mapped);
var result = mapped.map(function(el){
  return list[el.index];
});
console.log(result);