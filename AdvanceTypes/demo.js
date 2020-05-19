var e1 = {
    name: 'Adhikansh',
    privilage: ['create-server'],
    startDate: new Date()
};
console.log(e1);
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return (a + b);
}
console.log(add(5, 4));
console.log(add('4', '5'));
// combinable - > string | number 
// Type Guards in Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driviing a car....');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Truck is driving...');
    };
    Truck.prototype.loadCargo = function () {
        console.log('Load Cargo');
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
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
