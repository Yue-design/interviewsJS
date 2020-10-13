/*
function

1) first class function
2) first order function 
3) higher order function 
4) unary function
5) currying function
6) pure function
*/

// higher order function
// a function that accepts other function as an argument
// or returns a function as a return value
const firstOrderFunc = () => console.log("a first order function");
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc ();
higherOrder(firstOrderFunc);

// currying function
// currying is the process of taking a function with multiple argyments 
// and turning it into a sequence of functions each with only a single argument
// curried functions are great to improve code re-uasbility and functional composition
const multiArgFunction = (a, b, c) => a + b + c;
const curryUnaryFunction = a => b => c => a + b + c;
curryUnaryFunction(1);
curryUnaryFunction(1)(2);
curryUnaryFunction(1)(2)(3);