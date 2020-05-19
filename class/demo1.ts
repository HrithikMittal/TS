// custom type
interface Person {
  // public private is not possible but we can use readonly
  name: string;
  readonly age: number;
  greet(phrase: string): void;
}



var user1: Person = {
  name: 'Adhikansh',
  age: 18,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

user1.greet('Hi there - I am');

console.log(user1);

class ImplementPerson implements Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  greet(phase: string): void {
    console.log(phase + ' ' + this.name);
  }
}

const user2 = new ImplementPerson('Vidushi', 21);
user2.greet('Hello friends ');
// user1.age = 20;
console.log(user1.age);


// Extending the interface is possible
// interface childinterf extends interf1{

// }

interface Named {
  name: string;
  outputName?: string; // now it is opitional same as method too
  mymethod?(): void;
}

const NamedUser: Named = {
  name: "hh"
}

console.log(NamedUser);