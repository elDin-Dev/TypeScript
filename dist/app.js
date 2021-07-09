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
        this.lastReport = '';
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('Not report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('please pass in a valid value');
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
account.mostRecentReport = 'Year End Report';
account.addReport("everything is ok... so far.");
console.log('mostRecentReport:;', account.mostRecentReport);
account.printReports();
account.addEmployee('alex');
account.addEmployee('vicente');
console.log("printEmployeeInfo:", account.printEmployeeInfo());
