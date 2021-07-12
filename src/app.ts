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

@WithTemplate('<h1>My person Object</h1>', 'app')
class Person {
    name= 'Max';

    constructor() {
        console.log('Creating a person');
    }

}

const pers = new Person();

console.log(pers);