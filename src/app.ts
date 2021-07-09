type AddFn = (a: number, b:number) => number;

let add: AddFn;

add = (n1: number, n2: number) {
    return n1+n2;
}

interface Name {
    readonly name: string,
}

interface Greetable extends Name{
      greet(phrase: string):void;
}

class Person implements Greetable {
    name: string;
    age:number= 45;
    constructor(n: string) {
        this.name=n;
    }
    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name + ' age ' +this.age);
    }
    
}

let user1: Greetable;

user1 = new Person('Alex')

//user1.name="Pedro" ;//Error by readonly 

user1.greet("Hi there. I'm ");