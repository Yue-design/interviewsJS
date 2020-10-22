/*
server-sent events (SSE)

to receive automatic updates via HTTP connection

events flow from server to client only - a one way communications channel

onopen, onmessage, onerror
*/

// receive server-sent event notifications
if (typeof EventSource !== "undefined") {
  // check browser support
  var source = new EventSource("sse_generator.js");
  source.onmessage = function(event) {
    document.getElementById("output").innerHTML += event.data + "<br>";
  };
}
