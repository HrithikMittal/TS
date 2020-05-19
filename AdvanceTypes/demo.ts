type Admin = {
  name: string;
  privilage: string[]
};

type Employee = {
  name: string;
  startDate: Date
}

type ElevatedEmployee = Admin | Employee;

const e1: ElevatedEmployee = {
  name: 'Adhikansh',
  privilage: ['create-server'],
  startDate: new Date()
}

console.log(e1);

// type guards

type Combinable = string | number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'number' && typeof b === 'number')
    return (a + b);

}

console.log(add(5, 4));
console.log(add('4', '5'));

// combinable - > string | number 


// Type Guards in Classes
class Car {
  drive() {
    console.log('Driviing a car....');
  }
}

class Truck {
  drive() {
    console.log('Truck is driving...');
  }
  loadCargo() {
    console.log('Load Cargo');
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

useVehicle(v1);
useVehicle(v2);


// special guards
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving with speed:' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
