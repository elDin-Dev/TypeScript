class Department {
    //private name: string;

    protected employees: string[]= [];

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

class ITDepartment extends Department {

        admins: string[]
        constructor(id:string, admins: string[]) {
            super(id, 'IT');
            this.admins=admins

        }
}

class AccountingDepartment extends Department {

    constructor(id:string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string){
        if (name==='alex') {
            return
        }
        else{
            this.employees.push(name)
        }
    }
}
// creating objects

const itDept = new ITDepartment('1', ['Alex']);

itDept.addEmployee("alex");
itDept.addEmployee("vicent");

itDept.describe()

itDept.printEmployeeInfo();

console.log("IT Dept:",itDept);

/*const newAccounting = {name: "Dummy", describe: accounting.describe };
newAccounting.describe();*/

//accounting.employees[0]="pepxe";

console.log("------------------------------");


const account= new AccountingDepartment('Acc2', []);
account.addReport("everything is ok... so far.");
account.printReports();
account.addEmployee('alex');
account.addEmployee('vicente');
console.log("printEmployeeInfo",account.printEmployeeInfo());
