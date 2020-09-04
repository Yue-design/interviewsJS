/*
Classes are a template for creating objects.
*/

// 1. Defining Classes
// Classes are in fact "special functions".

// 1) Class Declarations
// Function declarations are hoisted and class decalrations are not.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// 2) Class Expressions
// A class expression is another way to define a class.
let Rectangle1 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle1.name);

let Rectangle2 = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle2.name);

// 2. Class body and method definitions
// 1) Strict Mode
// The body of a class is executed in strict mode.
// 2) Constructor
// The constructor method is a special method for creating and initializing an object created with a class.
// 3) Prototype Methods
class Rectangle3 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.clacArea();
  }

  clacArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle3(10, 10);
console.log(square.area);

// 4) Static Methods
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance; // undefined
p2.distance;
console.log(Point.distance(p1, p2));

// 5) Binding this with prototype and staic methods
class Animal {
  speak() { return this; }
  static eat() { return this; }
}
let obj = new Animal();
obj.speak();
let speak = obj.speak;
speak(); // undefined

function Animal1() { }
Animal1.prototype.speak = function() {return this;}
Animal1.eat = function() {return this;}
let obj2 = new Animal1();
let speak2 = obj2.speak;
speak(); // global object

// 6) Instance Properties
class Rectangle6 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
Rectangle6.staticWidth = 20; // must be defined outside the ClassBody
Rectangle6.prototype.prototypeWidth = 25;

// 7) Field Declarations
// a) Public
class Rectangle7 {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
// b) Private
// class Rectangle {
//   #height = 0;
//   #width;
//   constructor(height, width) {
//     this.#height = height;
//     this.#width = width;
//   }
// }

// 3. Sub classing with extends
class Animal3 {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
Animal3.prototype.eat = function() {
  console.log(`${this.name} can eat`);
}
class Dog extends Animal3 {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks`);
  }
  eat() {
    console.log(`${this.name} eats`);
  }
}
let d = new Dog('M');
d.speak();
d.eat();
function Animal2 (name) {
  this.name = name;  
}
Animal2.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
}
const Animal4 = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};
class Cat {
  constructor(name) {
    this.name = name;
  }
}
Object.setPrototypeOf(Cat.prototype, Animal4);
let c = new Cat('J');
c.speak();

// 4. Species
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
let a = new MyArray(1, 2, 3);
let mapped = a.map(x => x**2);
console.log(mapped instanceof MyArray);
console.log(mapped instanceof Array);

// 5. Super class calls with super
class Cat2 {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a noise.`);}
}

class Lion extends Cat2 {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}
let l = new Lion('Fuzzy');
l.speak();

// 6. Mix-ins
let calculatorMixin = Base => class extends Base {
  calc() { }
};

let randomizerMixin = Base => class extends Base {
  randomize() { }
}