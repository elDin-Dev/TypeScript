type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmpployee = Admin & Employee;


const e1: ElevatedEmpployee = {

    name: 'Alex',
    privileges:['create-server'],
    startDate: new Date(),

}
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if ( (typeof a==='string') || (typeof b==='string') ) {
        return a.toString(); + b.toString();
    }

    return a+b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee)
{
    console.log('Name:' + emp.name);
    if ('privileges' in emp) {
        console.log('Name:' + emp.privileges);
    }

    if ('startDate' in emp) {
        console.log('startDate:' + emp.startDate);
    }

}

printEmployeeInformation(e1);

class Car {
    drive(){
        console.log('driving a car');
    }
}

class Truck {
    drive(){
        console.log('driving a truck');
    }

    loadCargo(amount: number){
        console.log('loading cargo: '+amount);
    }
}

type Vehicle= Car | Truck;
const v1= new Car();
const v2= new Truck();

function useVehicle(v: Vehicle) {
    v.drive();
    //it is possible to use instanveof cuase class is transpiled to
    //constructor which vanila js knows. is not possible to use wiht interfaces.
    if (v instanceof Truck) {
        v.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'Bird';
    flyingSpeed : number;
    
}
interface Horse {
    type: 'Horse';
    runningSpeed : number;
    
}

type Animal=  Bird | Horse;

//Discrimination using a common property
function moveAnimal(a: Animal ){
    /*
    if ('flyingSpeed' in a ){
        console.log('Moving with speed:' + a.flyingSpeed);
    }
    */
   let speed;

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

moveAnimal({type: 'Bird', flyingSpeed:50});

//const paragraph = document.querySelector("p");
//const paragraph = document.querySelector("message-output");

//Type casting #1
//const userInput = <HTMLInputElement>document.getElementById("user-input");

//Type casting #2
const userInput = document.getElementById("user-input")! as HTMLInputElement ;

userInput.value="hi there!";
