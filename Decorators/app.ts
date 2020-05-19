// Decorator is just a function

// function Logger(constructor: Function) {
//   console.log(`Logging...`);
//   console.log(constructor);
// }

// @Logger
// class Person {
//   name = 'Max';
//   constructor() {
//     console.log('Creating person object...');
//   }
// }

// const p1 = new Person();













// decorator factory
function Logger(logstring: string) {
  console.log('Logger Factory');
  return function (constructor: Function) {
    console.log(logstring);
    console.log(constructor);
  }
}

function withTemplate() {
  console.log('Factory');
  return function (constructor: any) {
    console.log('Rendering Template');
  }
}

// NOTE: In place of constructor use _ means we are not using the parameters coming but we know them

@Logger('Logging-Person')
@withTemplate()
class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object...');
  }
}

// const pers = new Person();
// console.log(pers);














// ---
/*
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  get price() {
    return this._price;
  }
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// Decorator doesn't execute at the time of creating the instance
// const p1 = new Product('Book', 19);
// const p2 = new Product('Book 2', 29);


*/