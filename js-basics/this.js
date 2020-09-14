/*
this 

A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the time function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding(it retains the this value of the enclosing lexical context).

A property of an execution context (global, function or eval) that, in non-strict mode, is always a reference to an object and in strict mode can be any value.
*/

// 1. Description 
// (1) Global Context
console.log(this === window);

// (2) Function Context
function f1() {
  return this;
}
console.log(f1() === window);
console.log(f1() === globalThis);

function f2() {
  'use strict';
  return this;
}
console.log(f2() === undefined);

// (3) Class Context
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first(){}
  second(){}
  static third(){}
}
new Example();

// (4) Derived Classess 
this = new Base();
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return {a:5};
  }
}
class Bad extends Base {
  constructor() {}
}
new Good();
new AlsoGood();
new Bad();

// 2. Examples 
// (1) this in function contexts
var obj = {a: 'Custom'};
var a = 'Global';
function whatsThis() {
  return this.a;
}
whatsThis();
whatsThis.call(obj);
whatsThis.apply(obj);

// (2) this and object conversion
function add(c, d) {
  return this.a + this.b + c + d;
}
var o = {a: 1, b: 3};
add.call(o, 5, 7);
add.apply(o, [10, 20]);

function bar() {
  console.log(Object.prototype.toString.call(this));
}
bar.call(7);
bar.call('foo');
bar.call(undefined);

// (3) The bind method
function f() {
  return this.a;
}
var g = f.bind({a: 'azerty'});
console.log(g());

var h = g.bind({a: 'yoo'});
console.log(h());

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h());

// (4) Arrow Functions
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject);

var obj = {func: foo};
console.log(obj.func() === globalObject);
console.log(foo.call(obj) === globalObject);
foo = foo.bind(obj);
console.log(foo() === globalObject);

var obj = {
  bar: function() {
    var x = (() => this);
    return x;
  }
};
var fn = obj.bar();
console.log(fn() === obj);
var fn2 = obj.bar;
console.log(fn2()() == window);

// (5) As an object method
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};
console.log(o.f());

var o = {prop: 37};
function independent() {
  return this.prop;
}
o.f = independent;
console.log(o.f());
o.b = {g: independent, prop: 42};
console.log(o.b.g());

// 1) this on the object's prototype chain
var o = {f: function() { return this.a + this.b;}};
var p = Object.create(o);
p.a = 1;
p.b = 4;
console.log(p.f());

// 2) this with a getter or setter
function sum() { return this.a + this.b + this.c; }
var o = { a: 1, b: 2, c: 3, get average() { return (this.a + this.b + this.c) / 3}};
Object.defineProperty(o, 'sum', {get: sum, enumerable: true, configurable: true});
console.log(o.average, o.sum);

// (6) As a constructor
function C() {this.a = 37;}
var o = new C();
console.log(o.a);

function C2() {
  this.a = 37;
  return {a: 38};
}

o = new C2();
console.log(o.a);

// (7) As a DOM event handler
function bluify(e) {
  console.log(this === e.currentTarget);
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}
var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', bluify, false);
}

// (8) In an inline event handler
// JSX expressions must have one parent element.
{/* <button onclick="alert(this.tagName.toLowerCase());">Show this</button>
<button onclick="alert((function() { return this; })());">Show inner this</button> */}

// (9) this in classes
class Car {
  constructor() {
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return 'Ferrari';
  }
}
class Bird {
  get name() {
    return 'Tweety';
  }
}
const car = new Car();
const bird = new Bird();
car.sayHi();
bird.sayHi = car.sayHi;
bird.sayHi();
bird.sayBye = car.sayBye;
bird.sayBye();