/*
setTimeout() - after a specified number of millisecond

setInterval() - at specified intervals
*/

var msg;
function greeting1() {
  alert("Good Morning!");
}
function start() {
  msg = setTimeout(greeting, 3000);
}
function stop() {
  clearTimeout(msg);
}
function greeting2() {
  alert("Good Afternoon!");
}
function begin() {
  msg = setTimeout(greeting, 3000);
}
function end() {
  clearTimeout(msg);
}
