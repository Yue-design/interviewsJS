/*
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function () {
  statements
})();

Self-Executing Anonymous Function:
1) The first part is the anonymous function with lexical scope enclosed within the Grouping Operator ().
It prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2) The second part creates the immediately invoked function expression ().

The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.
*/

var result = (function () {
  var name = "Barry";
  return name;
})();
result;