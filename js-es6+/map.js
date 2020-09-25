/*
Map

The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.

A Map object iterates its elements in insertion order - a for...of loop returns an array of [key, value] for each iteration.

1) Objects vs. Maps
2) Constructor
3) Static Properties
4) Instance Properties
5) Instance Methods
*/

// 1. Using the Map object 
let myMap = new Map();
let keyFunc = function() {};
myMap.set(keyFunc, "value associated with keyFunc");
console.log(myMap.size);
console.log(myMap.get(keyFunc));

// 2. Using NaN as Map keys

// 3. Iterating Map with for..of
let map = new Map();
map.set(0, "zero");
map.set(1, "one");
for (let key of map.keys()) {
  console.log(key);
};

// 4. Iterating Map with forEach()
map.forEach(function(value, key) {
  console.log(key + '=' + value);
});

// 5. Relation with Array objects
let kvArray = [['key1', 'value1'], ['key2', 'value2']];
let my_Map = new Map(kvArray);
console.log(my_Map);
// to transform a map into a 2D key-value Array
console.log(Array.from(my_Map));
console.log([...my_Map]);
console.log(Array.from(my_Map.keys()));
console.log(Array.from(my_Map.values()));

// 6. Cloning and merging Maps
let original = new Map([[1, 'one']]);
let clone = new Map(original);

console.log(clone.get(1));
console.log(original === clone);

let cloned = new Map([[2, 'two']]);
let merged_one = new Map([...original, ...cloned]);
console.log(merged_one);

let merged_two = new Map([...original, ...cloned, [3, 'eins']]);
console.log(merged_two);