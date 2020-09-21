/*
Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.

Every closure has three scopes:
1) Local Scope (Own Scope)
2) Out Functions Scope
3) Global Scope
*/

// 1. Lexical Scoping
function init() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  };
  displayName();
}
init();

// 2. Closure
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  };
  return displayName;
};
var myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
};
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2));
console.log(add10(2));

// 3. Practical Closures
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
};
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
// document.getElementById('size-12').onclick = size12;
// <a href="#" id="size-12">12</a>

// 4. Emulating Private Methods with Closures
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  };
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();
console.log(counter.value());
counter.increment();
counter.decrement();
console.log(counter.value());

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  };
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
};
var counter1 = makeCounter();
var counter2 = makeCounter();
counter1.increment();
counter1.increment();
counter2.decrement();
alert(counter1.value());
alert(counter2.value());

// 5. Closure Scope Chain
var e = 10; // global scope
function sum(a) {
  return function(b) {
    return function(c) { // outer functions scope
      return function(d) { // local scope
        return a + b + c + d + e;
      };
    };
  };
};
console.log(sum(1)(2)(3)(4));
var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3);

// 6. Creating Closures in Loops: A Common Mistake

// 7. Performance Considerations
