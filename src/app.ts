class Department {
    name: string;

    constructor(n: string) {
        this.name=n;
    }
}

// creating objects
const accounting = new Department('Accounting');
console.log(accounting);
