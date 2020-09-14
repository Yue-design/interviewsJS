/*
deep dive in this keyword

this Keyword:
1) different value based on execution context;
2) In a method: owner object
3) In a function: global object
4) In an event: element that received the event
5) call()/apply() methods refers to object passed in
6) 'use strict' also affects 'this'

a) Scope determines value of 'this'
- Global Object
- HTML element
- Method Owner
b) 'use strict' makes 'this' undefined in functions
c) What is passed to call()/apply() methods becomes 'this'
d) constructor functions owner is 'this'
*/

// 1. Introduction to the this Keyword

// this can be a global window object
console.log(this.toString());

// this can be an object literal
// person {
//   firstName: "John",
//   lastName = "Smith"
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// this refers to the current Person object
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  }
}

let p1 = new Person("John", "Smith");
let p2 = new Person("Bob", "Small");

// 2. Event Handlers
// The following should be in an HTML file
{/* <button onClick="this.style.background='Red'">In Event Handler</button>
<button onClick="eventHandler(this)">Pass to function from event handler</button> */}

// 3. Object Literal
function objectLiteral() {
  let product = {
    "productID": 680,
    "name": 'HL Road Frame - Black, 58',
    "standardCost": 1059.31,
    "listPrice": 1431.50,
    grossProfit: function () {
      return (this.listPrice - this.standardCost).toLocaleString('en-US', {
        style: 'currency', currency: 'USD'
      });
    }
  };
  console.log(product.grossProfit());
};
objectLiteral();

// 4. call() & apply()
function callAndApply() {
  let myProduct = {
    "productID": 680,
    "name": 'HL Road Frame - Black, 58',
    "standardCost": 1059.31,
    "listPrice": 1431.50,
    grossProfit: function () {
      return (this.listPrice - this.standardCost).toLocaleString('en-US', {
        style: 'currency', currency: 'USD'
      });
    }
  };

  let myProduct2 = {
    "standardCost": 500,
    "listPrice": 850,
  };

  console.log(myProduct.grossProfit.call(myProduct));
  console.log(myProduct.grossProfit.call(myProduct2));
  console.log(myProduct.grossProfit.apply(myProduct));
  console.log(myProduct.grossProfit.apply(myProduct2));
};

callAndApply();

// 5. Constructor Functions
function Product(id, name, cost, price) {
  this.productID = id;
  this.name = name;
  this.standardCost = cost;
  this.listPrice = price;

  this.grossProfit = function () {
    return (this.listPrice - this.standardCost).toLocaleString('en-US', {
      style: 'currency', currency: 'USD'
    });
  }
};

function constructorFunctions() {
  let prod1 = new Product(680, "HL Road Frame - Black, 58", 1059.31, 1431.50);
  let prod2 = new Product(707, "Sport-100 Helmet, Red", 13.08, 34.99);

  console.log(prod1.grossProfit());
  console.log(prod2.grossProfit());
};

constructorFunctions();