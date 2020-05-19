class Person {
  public name: string
  public age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  describe() {
    console.log(`I am ${this.name} and my age is ${this.age}`);
  }
  set nameValue(name: string) {
    this.name = name;
  }
}

class childPerson extends Person {
  branch: string
  constructor(name: string, age: number, branch: string) {
    super(name, age);
    this.branch = branch;
  }

  fun() {
    console.log(`I am accessible ${this.name} and ${this.age}`);
  }
  get getnameValue() {
    return this.name;
  }
}

const user1 = new childPerson('Adhikansh Mittal ', 18, 'B.tech 3rd YEAR CSE');

// user1 object 
// name = Adhikansh - > shreya 
// age = 18

user1.describe();
user1.nameValue = 'Shreya';

user1.describe();
console.log(user1.getnameValue);

// Access Modifier
// private
// public
// protected
// readonly

// getter and setter