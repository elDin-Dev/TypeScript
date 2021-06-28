class Department {
    name: string;

    employees: string[]= [];

    constructor(n: string) {
        this.name=n;
    }

    describe(this: Department) {
        console.log("Department describe:" + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// creating objects

const accounting = new Department('Accounting');

accounting.addEmployee("alex");
accounting.addEmployee("vicent");

accounting.describe()

accounting.printEmployeeInfo();

/*const newAccounting = {name: "Dummy", describe: accounting.describe };
newAccounting.describe();*/


