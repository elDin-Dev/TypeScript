// Defining functions types
//type AddFn = (a: number, b:number) => number;
interface AddFn {
    (a: number, b:number):number;
}

let add: AddFn;

add = (n1: number, n2: number) =>{
    return n1+n2;
}

interface Name {
    readonly name?: string,
    outputName?: string, //?means optionality in fields and methods.
}

interface Greetable extends Name{
      greet(phrase: string):void;
}

class Person implements Greetable {
    name?: string;
    age:number= 45;
    constructor(n?: string) {
        if(n){
            this.name=n;
        }        
    }
    greet(phrase: string): void {
        if (this.name){
            console.log(phrase + ' ' + this.name + ' age ' +this.age);
        }
        else{
            console.log('hi!');
        }
        
    }
    
}

let user1: Greetable;

user1 = new Person();

//user1.name="Pedro" ;//Error by readonly 

user1.greet("Hi there. I'm ");