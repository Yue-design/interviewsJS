/*
Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:
pending, fullfilled, rejected
*/


// 1. Basic Example
let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Success!")
  }, 250)
});

myFirstPromise.then((successMessage) => {
  console.log("Yay!" + successMessage);
});

// 2. Example with diverse situations

// 3. Advanced Example

// 4. Loading an image with XHR