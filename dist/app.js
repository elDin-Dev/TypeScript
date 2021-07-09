"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department describe: (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'alex') {
            return;
        }
        else {
            this.employees.push(name);
        }
    }
}
const itDept = new ITDepartment('1', ['Alex']);
itDept.addEmployee("alex");
itDept.addEmployee("vicent");
itDept.describe();
itDept.printEmployeeInfo();
console.log("IT Dept:", itDept);
console.log("------------------------------");
const account = new AccountingDepartment('Acc2', []);
account.addReport("everything is ok... so far.");
account.printReports();
account.addEmployee('alex');
account.addEmployee('vicente');
console.log("printEmployeeInfo", account.printEmployeeInfo());
