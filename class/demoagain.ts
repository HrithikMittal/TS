interface Parent {
  name: string
  age?: number
  getMessage?()
}

const userag1: Parent = {
  name: 'Adhi',
  age: 18,
  getMessage() {
    console.log('Hi I am fine');
  }
}
console.log(userag1);

interface SuParent extends Parent {

}


class ClassImpl implements Parent {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getMessage() {
    console.log(`Hi this is work finde`);
  }
}

// const obj1 = new ClassImpl('tejas', 19);
// console.log(obj1);

// class  -> extends -> subclass 
// interface -> extends -> subinterface
// interfcae -> implements -> class