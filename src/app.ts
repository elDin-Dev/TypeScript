interface Greetable {
    name: string,

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

user1.greet("Hi there. I'm ");