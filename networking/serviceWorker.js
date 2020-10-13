/*
service workers

A service worker is basically a script (JavaScript file) that runs in background, 
separate from a webpage and provide features that don't need a web page and user interaction.

Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the postMessage interface.

The problem of service worker is that it gets terminated when not in use.

IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs.
*/

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw-test/sw.js', {scope: './sw-test'})
  .then((reg) => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  })
  .catch((error) => {
    console.log('Registration failed with ' + error);
  });
}