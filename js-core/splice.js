/*
splice
1) return the deleted elements as array
2) to insert or delete elements as array, mutable

slice: to return the subset of origin array
*/

let arr = [0, 1, 2, 3, 4, 5, 6];
let arr1 = arr.splice(0, 2); // [0, 1]
let arr2 = arr.splice(3); // [5, 6]
let arr3 = arr.splice(3, 1, "a");[]
console.log(arr, arr1, arr2, arr3, arr);