"use strict";
var e1 = {
    name: 'Alex',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if ((typeof a === 'string') || (typeof b === 'string')) {
        return a.toString();
        +b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name:' + emp.name);
    if ('privileges' in emp) {
        console.log('Name:' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate:' + emp.startDate);
    }
}
printEmployeeInformation(e1);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('driving a car');
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('driving a truck');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('loading cargo: ' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(a) {
    var speed;
    switch (a.type) {
        case "Bird":
            speed = a.flyingSpeed;
            break;
        case "Horse":
            speed = a.runningSpeed;
            break;
    }
    console.log('Moving with speed:' + speed);
}
moveAnimal({ type: 'Bird', flyingSpeed: 50 });
var userInput = document.getElementById("user-input");
userInput.value = "hi there!";
