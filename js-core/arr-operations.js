/*
powerful array operations

spread operator simplifies code
1) expand any 'iterable' such as a string or array into an array;
2) for passing multiple arguments to method;
3) the syntax uses the ellipsis symbol(...)
4) always on the right-side of an equal sign
*/

// convert string to array
function stringToArray() {
  let productNumber = "FR-R92B-58";
  let values = [...productNumber];
  console.log(values);
};
stringToArray();

// filter duplicates from array

// copy an array
function copyArray() {
  let arr = [1, 2, 3];
  let arr2 = [...arr];
  let arr3 = arr.slice(0);

  arr2.push(4);
  arr2[0] = 99;

  console.log(arr);
  console.log(arr2);
  console.log(arr3);
};
copyArray();

// copy object arrays
// by reference
let _products = [
  {
    productID: 680,
    name: "HL Road Frame - Black, 58",
    productNumber: "FR-R92B-58",
    color: "Black",
    standardCost: 1059.31,
    listPrice: 1431.50
  }];

function copyObjectArrays() {
  let diff = [..._products];

  diff[0].productID = 999;

  console.log(_products[0].productID);
};
copyObjectArrays(); // 999

// concatenate two arrays
let _newProducts = [{
  productID: 712,
  name: "AWC Logo Cap",
  productNumber: "CA-1098",
  color: "Multi",
  standardCost: 6.9223,
  listPrice: 8.99
}];
function concatenateArray() {
  // invalid
  // let allProducts = _products + _newProducts;

  let allProducts = _products.concat(_newProducts);
  console.log(allProducts.length);

  let spProducts = [..._products, ..._newProducts];
  console.log(spProducts.length);
};
concatenateArray();

// spread in a constructor
function spreadInConstructors() {
  let dt1 = new Date(2019, 10, 15);
  console.log(dt1); // 2019-11-15T05:00:00.000Z

  let dateFields = [2019, 11, 15];
  let dt2 = new Date(...dateFields);
  console.log(dt2); // 2019-12-15T05:00:00.000Z
};
spreadInConstructors();

// spread function arguments
// apply() method
// your own functions
function spreadForFunctionArgs() {
  multipleParams(1, 2, 3);

  // let args = [1, 2, 3];
  let args = [4, 5, 6];
  multipleParams(...args);
};
spreadForFunctionArgs();

function multipleParams(arg1, arg2, arg3) {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
  console.log("");
};
multipleParams(7, 8, 9);

// perform a shallow copy on object literals
function objectLiterals() {
  let product = {
    productID: 123,
    name: "HRF - BLACK",
    standardCost: 1059.31,
    listPrice: 1431.50
  };
  let prod2 = { ...product };
  prod2.productID = 999;
  console.log(product);
  console.log(prod2);
  console.log("");
  console.log(product.productID);
  console.log(prod2.productID);
};
objectLiterals();