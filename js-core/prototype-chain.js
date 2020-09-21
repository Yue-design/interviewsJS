/*
Inheritance and the Prototype Chain

JavaScript is dynamic and does not provide a class implementation. But the class keyword in ES2015 is syntactical sugar, and it remains prototype-based.

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype.

The prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.
*/

// 1. Inheritance with the prototype chain
// Inheriting Properties
let f = function () {
  this.a = 1;
  this.b = 2;
};
let o = new f();
f.prototype.b = 3;
f.prototype.c = 4;
console.log(o.a, o.b, o.c, o.d);
// Inheriting "Methods"
var o2 = {
  a: 2,
  m: function() {
    return this.a + 1;
  },
};
console.log(o2.m());
var p = Object.create(o2);
p.a = 4;
console.log(p.m());

// 2. Using Prototypes in JavaScript
// All functions have a special property named prototype.
// __proto__

// 3. Different ways to create objects and the resulting prototype chain
// Objects created with syntax contructs
var o3 = {a: 1};
var b = ['yo', 'whadup', '?'];
function f() {
  return 2;
}
// With a constructor
function Graph() {
  this.vertices = [];
  this.edges = [];
};
Graph.prototype = {
  addVertex: function(v) {
    this.vertices.push(v);
  },
};
var g = new Graph();
// With Object.create
// delete Operator with Object.create and new operator
// With the class keyword
// Performance
// Bad practice: Extension of native prototypes
// Summary
// 1) New-Initialization
// 2) Object.create
// 3) Object.setPrototypeOf
// 4) __proto__

// 4. prototype and Object.getPrototypeOf
var o4 = new Object();
// o4.[[Prototype]] = Foo.prototype;
// Foo.call(o);