"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log("Accounting ITDepartment - ID: ", this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = '';
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        return this.instance = new AccountingDepartment('d2', []);
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
    describe() {
        console.log("Accounting Department - ID: ", this.id);
    }
}
const employee1 = Department.createEmployee(`David`);
console.log("employee1:", employee1, "fiscal year:", Department.fiscalYear);
const itDept = new ITDepartment('1', ['Alex']);
itDept.addEmployee("alex");
itDept.addEmployee("vicent");
itDept.describe();
itDept.printEmployeeInfo();
console.log("IT Dept:", itDept);
console.log("------------------------------");
console.log("********** ACCOUNTING ***********");
const account = AccountingDepartment.getInstance();
console.log(account.describe());
account.mostRecentReport = 'Year End Report';
account.addReport("everything is ok... so far.");
console.log('mostRecentReport:;', account.mostRecentReport);
account.printReports();
account.addEmployee('alex');
account.addEmployee('vicente');
console.log("printEmployeeInfo:", account.printEmployeeInfo());
