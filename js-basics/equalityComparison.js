/*
eqaulity comparison

1) strict: === !==
2) type-converting: == !=
*/

// true
console.log(0 == false);

// false
console.log(0 === false);

// false, refer different objects in memory
console.log([] == [], {} == {});
console.log([] === [], {} === {});