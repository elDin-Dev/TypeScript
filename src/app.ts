const button = document.querySelector("button")!;

button.addEventListener('click', () => {
    console.log("CLICKED!");
});


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
