/*
web workers DOM

WebWorkers don't have access to below javascript objects since they are defined in an external files:
1) window object
2) document object
3) parent object
*/

// step one: create a web worker file
let i = 0;
function timedCount() {
  i += 1;
  postMessage(i);
  setTimeout('timedCount()', 500);
}
timedCount();

// step two: create a web worker object
if (typeof(w) == "undefined") {
  w = new Worker("counter.js");
}
w.onmessage = function(event) {
  document.getElementById("message").innerHTML = event.data;
}

// step three: terminate a web worker
w.terminate();

// step four: reuse the web worker
w = undefined;