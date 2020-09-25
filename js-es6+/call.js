/*
call

The call() method calls a function with a given this value and arguments provided individually.
*/

// 1. Using call to chain constructors for an object
function Product(name, price) {
  this.name = name;
  this.price = price;
};
function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
};
const cheese = new Food('feta', 5);
console.log(cheese);

// 2. Using call to invoke an anonymous function

// 3. Using call to invoke a function and specifying the context for 'this'
function greet() {
  const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
};
const obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};
greet.call(obj);

// 4. Using call to invoke a function and without specifying the first argument