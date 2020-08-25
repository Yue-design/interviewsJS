/*
The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement to be executed in the loop.

for ([initialization]; [condition]; [final-expression])
    statement
*/

// 1. for 
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

// 2. for await...of statement
// iterating over async iterables
// iterating over async generators
// iterating over sync iterables and generators
function* generator() {
  yield 0;
  yield 1;
  yield Promise.resolve(2);
  yield Promise.resolve(3);
  yield 4;
}

(async function() {
  for await (let num of generator()) {
    console.log(num);
  }
})();

// 3. for ...in
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

const object = { a: 1, b: 2, c: 3};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// 4. for ...of 
// The for...of statement creates a loop iterating over iterable objects, including: 
// built-in String, Array, array-like objects (arguments or NodeList), TypedArray, 
// Map, Set and user-defined iterables.

// 1. Iterating Over an Array, a String, a TypedArray
const arr = ['a', 'b', 'c'];
for (const e of arr) {
  console.log(e);
}

// 2. Iterating Over a Map, a Set
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const entry of iterable) {
  console.log(entry);
}
for (const [key, value] of iterable) {
  console.log(key);
  console.log(value);
}

// 3. Iterating Over the Arguments Object
(function() {
  for (const argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 4. Iterating Over a DOM Collection
// const articleParagraphs = document.querySelectorAll('article > p');
// for (const paragraph of articleParagraphs) {
//   paragraph.classList.add('read');
// }

// 5. Closing Iterators
function* foo() {
  yield 1;
  yield 2;
  yield 3;
};
for (const o of foo()) {
  console.log(o);
  break;
};
console.log('done');

// 5. Iterating Over Generators
// don't reuse generators
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}
for (const n of fibonacci()) {
  console.log(n);
  if (n >= 1000) {
    break;
  }
}

// 6. Iterating Over other Iterable Objects
const Iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const value of Iterable) {
  console.log(value);
  // console.log(done);
}