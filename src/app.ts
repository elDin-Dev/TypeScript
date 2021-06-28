class Department {
    //private name: string;

    private employees: string[]= [];

    constructor(private readonly id: string, public name: string) {
        //this.name=name;
    }

    describe(this: Department) {
        console.log(`Department describe: (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        //this.id=2;
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// creating objects

const accounting = new Department('1','Accounting');

accounting.addEmployee("alex");
accounting.addEmployee("vicent");

accounting.describe()

accounting.printEmployeeInfo();

/*const newAccounting = {name: "Dummy", describe: accounting.describe };
newAccounting.describe();*/

//accounting.employees[0]="pepxe";


