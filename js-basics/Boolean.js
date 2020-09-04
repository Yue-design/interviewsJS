// The Boolean Object is an object wrapper for a boolean value.

// 1. Creating Boolean Objects with an Initial Value of false
let bNoParam = new Boolean();
let bZero = new Boolean(0);
let bZeroNeg = new Boolean(-0);
let bNull = new Boolean(null);
let bfalse = new Boolean(false);
let bNotANum = new Boolean(NaN);
let bBrowserDefault = new Boolean(undefined);
let bStrProto = new Boolean("");

console.log(bNoParam, bZero, bZeroNeg, bNull, bfalse, bNotANum, bBrowserDefault, bStrProto)

// 2. Creating Boolean Objects with an Initial Value of true
let btrue = new Boolean(true);
let btrueString = new Boolean('true');
let bfalseString = new Boolean('false');
let bArrayProto = new Boolean([]);
let bObjProto = new Boolean({});

console.log(btrue, btrueString, bfalseString, bArrayProto, bObjProto)