class Department {
    static fiscalYear = 2020;

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

    static createEmployee(name: string){
        return  {name: name};
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

    private lastReport: string ='';

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error ('Not report found');
        
    }
    set mostRecentReport(value: string) {
        if (!value)        {
            throw new Error ('please pass in a valid value');
        }
        this.addReport(value);

    }

    constructor(id:string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport=text;
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

const employee1 = Department.createEmployee(`David`);
console.log("employee1:" ,employee1, "fiscal year:", Department.fiscalYear);

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

account.mostRecentReport = 'Year End Report';
account.addReport("everything is ok... so far.");

console.log('mostRecentReport:;',account.mostRecentReport);


account.printReports();
account.addEmployee('alex');
account.addEmployee('vicente');
console.log("printEmployeeInfo:",account.printEmployeeInfo());

