/*
objects
a standalone entity with property and type
*/

const object = { a: 1, b: 2, c: 3 };
//1. Enumerate the properties of an object
// for..in loops
function showProps(obj, objName) {
  var result = ``;
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}
console.log(showProps(object, 'myObj'));
// Object.keys(o)
console.log(Object.keys(object));
// Object.getOwnPropertyNames(o)
console.log(Object.getOwnPropertyNames(object));

//2. Creating New objects
// Using Object Initializers
// Using a constructor function
// Using the Object.create mehtod
var Animal = {
  type: 'Invertebrates',
  displayType: function() {
     console.log(this.type);
  }
}
var fish = Object.create(Animal);
fish.displayType(); // Output: Invertebrates

//3. Define Details
// Defining Properties for an object type
// Defining Methods
// Using this for object references
// Defining Methods
// Defining Getters and Setters
// Defining Properties

//4. Comparing objects
// Objects are a reference type in JS
// Two distinct objects are never equal, even if they have the same properties.
var fruit = {name: 'apple'};
var fruitbear = {name: 'apple'};

console.log(fruit == fruitbear); // return false
console.log(fruit === fruitbear);// return false

// 5. Singleton Pattern: an object can only be istantiated one time
var object = new function() {
  this.name = 'yue';
}

// 6. Function constructor with prototype
// It is equivalent to an instance created with an object create method with a function prototype
// and then call that function with an instance and prameters as arguments
function Person() {}
Person.prototype.name = 'Yue';
var object = new Person();