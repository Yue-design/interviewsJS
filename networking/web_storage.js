/*
Web Storage (recommended, than Cookies)

Web storage API provides a mechanism to let browser store key/value pairs locally. Large amounts of data can be stored locally, without affecting website performance. Web storage is more secure, and the information is never transferred to the server.

1) local storage: which no expriation date
2) session storage: lost when the browser tab is closed

Post message is a method that enables cross-origin commuication between Window objects.

The StorageEvent is an event that fires when a storage area has been changed in the context of another document.
window.onstorage = functionRef;
*/

myStorage = window.localStorage;
localStorage.setItem('key', 'value');
const cat = localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();

myStore = window.sessionStorage;