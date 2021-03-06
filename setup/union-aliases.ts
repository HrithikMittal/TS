type Combinable = number | string;
// Type Aliases

function combine(input1: Combinable, input2: Combinable) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else
    return input1.toString() + input2.toString();
}
console.log(combine(5, 4));
console.log(combine('Adhikansh ', 'Mittal'));
