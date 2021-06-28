"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department describe:" + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee("alex");
accounting.addEmployee("vicent");
accounting.describe();
accounting.printEmployeeInfo();
