/*
event loop

Concurrency Model and the Event Loop
JavasCRIPT has a concurrency model based on an event loop,
which is responsible for executing the code,
collecting and processing events,
and executing queued sub-tasks.

The model is quite different from models in other languages like C and Java.
*/

// 1. Runtime Concepts
// 1) Visual Representation
// 2) Stack: functions calls from a stack of frames
function foo(b) {
  let a = 10;
  return a + b + 11;
};
function bar(x) {
  let y = 3;
  return foo(x * y); // foo(21)
};
console.log(bar(7));

// 3) Heap: to denote a large region of memory
// 4) Queue: A JavaScript runtime uses a message queue, which is a list of messages to be processed.

// 2. Event Loop
// 1) Run-to-completion
// 2) Adding Messages 
const s = new Date().getSeconds();
setTimeout(function() {
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);
  while (true) {
    if (new Date().getSeconds() - s >= 2) {
      console.log("Good, looped for 2 seconds");
      break;
  }
}
// 3) Zero Delays
// 4) Several runtimes communicating together

// 3. Never Blocking