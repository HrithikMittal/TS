function add(num1: number, num2: number) {
  return (num1 + num2);
}
console.log(add(3, 4));



// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;
console.log(combineValues(8, 8));


function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 22, (res) => {
  console.log(res);
})

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: 'Hi there!' });
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
});