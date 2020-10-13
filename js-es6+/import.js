/*
import

Why Modules? => an object literal, a function, or a constructor
a) maintainability
b) reusabiligy
c) namespacing

The static import statement is used to import read only live bindings which are exported by another module.
There is also a function-like dynamic import(), which does not require scripts of type="module".

1) import an entire module's contents
import * as name from "module-name";

2) import a single export from a module
import {export1} from "module-name";

3) import multiple exports from module
import {export1, export2} from "module-name";

4) import an export with a more convenient alias
import {export1 as alias1} from "module-name";
5) rename multiple exports during import

6) import a module for its side effects only
import './module.js';

7) import default
import defaultExport from "module-name";

8) dynamic imports
let module = await import('./module.js);
*/

// 1. standard import
import React from 'react';

// 2. dynamic import
// const main = document.querySelector("main");
// for (const link of document.querySelectorAll("nav > a")) {
//   link.addEventListener("click", e => {
//     e.preventDefault();

//     import('/modules/my-module.js')
//       .then(module => {
//         module.loadPageInto(main);
//       })
//       .catch(err => {
//         main.textContent = err.message;
//       });
//   });
// }