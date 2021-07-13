function Logger(logString: string) {

    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    
    }
}
function WithTemplate(template: string, hookId : string) {
    return function(constructor: any){

        const p = new constructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl){
            
            hookEl.innerHTML=template
            hookEl.querySelector('h1')!.textContent=p.name;
        }
    }
}

@Logger('LOGGING')
@WithTemplate('<h1>My person Object</h1>', 'app')
class Person {
    name= 'Max';

    constructor() {
        console.log('Creating a person');
    }

}

const pers = new Person();

console.log(pers);

//----

function Log(target: any, propertyName :  string | Symbol){
    console.log('Property decorator');
    console.log(target,  propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number){
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
        if (val>0){
            this._price=val
        }
        else{
            throw new Error('No valid prices');
        }

    }

    constructor(t:string, p:number){
        this.title=t;
        this._price=p;

    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price* ( 1 + tax);
    }
}