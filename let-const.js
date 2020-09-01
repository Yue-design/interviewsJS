/*
let
The let statement declares a block-scoped local vairable, optionally initializing it to a value.

const
Constants are block-scoped, much like variables and defined using the let keyword.
The value of a constant can't be changed through reassignment, and it can't be redeclared.
*/


// let
let x = 1;
if ( x === 1) {
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1

// 1. Scoping Rules
function varTest() {
  var x = 1;
  {
    var x = 2;
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}

var x1 = 'global';
let y = 'global';
console.log(this.x);
console.log(this.y);

// 2. Emulating Private Members
var Thing;
{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';
    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);

var thing = new Thing();
console.log(thing);

thing.showPublic();
thing.showPrivate();

// 3. Redeclarations
let x2 = 1;
switch(x2) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}

// 4. Temporal Dead Zone
// 5. The temporal dead zone and typeof
// 6. Another example of temporal dead zone combined with lexical scoping

// 7. Other Situations
var a = 1;
var b = 2;
if (a === 1) {
  var a = 11;
  let b = 22;
  console.log(a, b);
}
console.log(a, b);

// const
const num = 42;
try {
  num = 99;
} catch (err) {
  console.log(err);
}
console.log(num); // 42

// 1. Basic const Usage
const myNum = 7;
// myNum = 20;
console.log('The number is:' + myNum);
// const myNum;
// var myNum;
// let myNum;

// 2. Block Scoping
if (myNum === 7) {
  let myNum = 20;
  console.log('The number is' + myNum);
  // var myNum = 20; // get hoisted into the global contect and throws an error
}
console.log('My number is' + myNum); 

// 3. const needs to be initialized
// const FOO; // Uncaught SyntacError

// 4. const in objects and arrays
const obj = {'key': 'value'};
// obj = {'other_key': 'value'};
obj.key = 'other_value';

const arr = [];
arr.push('A'); // it is possible
// arr = ['B']; // error