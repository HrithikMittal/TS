// Generic types in TS

// let people: Array<> = [10, 20];
// console.log(people);

function merging<T extends object, U extends object>(objA: T, objB: U): T & U {
  return ({ ...objA, ...objB });
  // return Object.assign(objA, objB);
}
const compressObj = merging({ name: 'Adhikansh' }, { age: 18 });
console.log(compressObj);

interface longhy {
  length: number
}
function fun<T extends longhy>(objA: T) {
  console.log(objA.length);
}

fun('Adhikansh Mittal');

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Melfa', age: 20 }, 'age'));
