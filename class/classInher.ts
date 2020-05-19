class Department {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  get getname() {
    return this.name;
  }

}


class SubDep extends Department {
  files: string[]
  constructor(name: string, age: number, files: string[]) {
    super(name, age);
    this.files = files;
  }
  set setname(name: string) {
    this.name = name;
  }
}

const obj1 = new SubDep("Adhikansh", 54, ['a', 'b', 'c']);
var s = obj1.getname;
console.log(s);

obj1.setname = 'Vidu';
console.log(obj1);