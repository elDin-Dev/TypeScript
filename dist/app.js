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
}
const accounting = new ITDepartment('1', 'Accounting');
accounting.addEmployee("alex");
accounting.addEmployee("vicent");
accounting.describe();
accounting.printEmployeeInfo();
