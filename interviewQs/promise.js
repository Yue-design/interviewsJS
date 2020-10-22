/*
promise

an object may producing a resolved value to handle asynchronous operations
with three possible state: fullfilled, rejected, or pending

a promise supplies a standard-compliant .then() method

once a promise is settled, the value must not change

promise chaining: a sequence of asynchronous tasks one after another

promise.all() vs. promise.race()

sequential asynchronous code
parallel asynchronous code
*/

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, "one");
});

var promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "two");
});

// Promise.all([promise1, promise2]).then(result) => {console.log(result)}) .catch(error => console.log(`Error in promises ${error}`))

// to get the instance which is firstly resolved or rejected
Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
});
