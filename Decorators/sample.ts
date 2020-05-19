// How to run a decorator at the time of creating the object ot instance of class

function withTemplate(template: string, hookId: string) {
  console.log('Template Factory');
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        // const hookEl = document.getElementById(hookId);
        // if (hookEl) {
        //   hookEl.innerHTML = template;
        //   hookEl.querySelector('h1')!.innerHTML = this.name;
        // }
      }
    }
  }
}

// NOTE: we are new returning a new class

@withTemplate('<h1>My Friends</h1>', 'app')
class Pers {
  name = 'Max';
  constructor() {
    console.log('Creating person object...');
  }
}

const per = new Person();
console.log(per);