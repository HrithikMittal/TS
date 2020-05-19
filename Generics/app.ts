// Built in Generics

const names: Array<string> = ['Max', 'Manuel'];

function merge<T, U>(objA: T, objB: U) {
  return ({ ...objA, ...objB });
  // return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Adhikansh' }, { age: 18 });
// OR
// const mergeObj = merge<{ name: string }, { age: number }>
// ({ name: 'Adhikansh' }, { age: 18 });

console.log(mergeObj.name);
// before it shows that it will return the object but now it is returing the T&U (interaction) and object doesn't tell us whats the parameters into it.


// TODO: WORKING WITH CONTSRAINTS
const mergeobj1 = merge({ name: 'Adhikansh' }, 18);
console.log(mergeobj1);

// const mergeobj2 = merge<object, object>({ name: 'Adhikansh' }, 18);
// console.log(mergeobj1);
// OR
// You can extends in the function decalaration

function mergeAgain<T extends object, U extends object>(objA: T, objB: U) {
  return ({ ...objA, ...objB });
  // return Object.assign(objA, objB);
}


// TODO: ANOTHER GENERIC FUNCTION 
interface lengthy {
  length: number;
}

function countAndPrint<T extends lengthy>(element: T): [T, string] {
  let desc = 'Got no value.';
  if (element.length > 0) {
    desc = 'Got ' + element.length + ' elements.';
  }
  return [element, desc];
}

console.log(countAndPrint('Hi There'));
console.log(countAndPrint(['Hi There', 'Bye bro']));


// The key of Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'MAx' }, 'name'));
