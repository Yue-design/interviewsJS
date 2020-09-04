// question 1: what is the output?
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);  // shoule be 1

// question 2: write a function
const persons = {
  "1": {
    id: 1,
    name: "qi",
    age: 99
  },
  "2": {
    id: 2,
    name: "qi",
    age: 80
  },
  "3": {
    id: 3,
    name: "qi",
    age: 70
  },
  "4": {
    id: 4,
    name: "qi",
    age: 60
  }
};

// return an array of person
function getPeopleBiggerThan80YearsOld(obj) {
  let res = [];
  let n = Object.keys(obj).length;
  for (let i=0; i<n; i++) {
    if (Object.values(obj)[i].age > 80) {
      res.push(Object.values(obj)[i]);
    }
    // return Object.values(obj)[i][1].filter(age => age>80);
  }
  return res;
}

console.log(persons);
console.log(getPeopleBiggerThan80YearsOld(persons));

// question 3: what is the output?
function foo() {
  return a => {
    console.log(this.a);
  };
}
var obj1 = {
  a: 2
};
var bar = foo.call(obj1);
bar(); // should be 2