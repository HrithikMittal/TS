// type Admin = {
//   name: string;
//   privilage: string[]
// };

// type Employee = {
//   name: string;
//   startDate: Date
// }


// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: 'Adhikansh',
//   privilage: ['create-server'],
//   startDate: new Date()
// }

// console.log(e1);


// type Combinable = string | number;
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric;


// // Type Guards

// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'number' && typeof b === 'number')
//     return (a + b);
// }

// console.log(add(5, 4));

// Type Guards

type UnkownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnkownEmployee) {
  console.log('Name ' + emp.name);
  if ('privilage' in emp)
    console.log('Privileges: ' + emp.privilage);
}





// Type Casting
// const userInputHTML = <HTMLInputElement>document.getElementById("user-input")!;
const userInputHTML = document.getElementById("user-input")! as HTMLInputElement;

userInputHTML.value = 'here here!';

// Index Properties
interface ErrorContainer {
  id: string;
  [prop: string]: string;   // it is opitonal and there may be any number of vaue but all should be string
}
//  key-string and value is string
const errorBag: ErrorContainer = {
  id: '101',
  email: 'adhikanshmittal@gmail.com'
}



// Function Overloading
// function sub(a: number, b: number): number;
// function sub(a: string, b: number): string;
// function sub(a: number, b: string): string;
// function sub(a: string, b: string): string;
function sub(a: Combinable, b: Combinable) {
  if (typeof a === 'number' && typeof b === 'number')
    return (a + b);
}
const result = sub('Adhi ', 'Mi ');
result.split(' ');


// Optional Chaining in Ts 

const fetchedUserData = {
  id: 'u1',
  name: 'Adhi',
  // job: {
  //   title: "intern",
  //   description: 'ReadyAssist'
  // }
}
// will not show error while running
// console.log(fetchedUserData?.job?.title);


//  Nullish Coalescing
const userInput = ''; // if it is null or undefined and '' taken as null
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);