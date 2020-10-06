/*
Computed Property Names (ES2015)

In ES6, the object initializer syntax also supports computed property names,
it allows you to put an expression in brackets [].
*/

// example 1
let i = 0;
let a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
}

console.log(a.foo1)
console.log(a.foo2)
console.log(a.foo3)

// example 2
const items = ["A", "B", "C"];
const obj = {
  [items]: "Hello"
}
console.log(obj);
console.log(obj["A, B, C"]); // should be "Hello", why undefined
console.log(obj["A,B,C"]);

// example 3
let param = 'size'
let config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}
console.log(config)