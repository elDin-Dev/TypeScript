const button = document.querySelector("button")!;

button.addEventListener('click', () => {
    console.log("CLICKED!");
});


type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmpployee = Admin & Employee;

const e1: ElevatedEmpployee = {
    name: 'Alex',
}