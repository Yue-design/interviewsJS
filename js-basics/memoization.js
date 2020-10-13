/*
memoization

Memoization is a programming technique which attempts to increase a function's performance by catching its previously computed results.

Each time a memoized function is called, its parameters are used to index the cache.
*/

const memoizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log('Fetching from cache');
      return cache[value];
    } else {
      console.log('Calculating result');
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  }
}

const addtion = memoizAddition();
console.log(addtion(20));
console.log(addtion(20));