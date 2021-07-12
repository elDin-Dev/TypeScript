// const button = document.querySelector("button")!;

// button.addEventListener('click', () => {
//     console.log("CLICKED!");
// });


// const names: Array<string> = [];    //string[]
// names[0].split(' ');

// const promise:Promise<number> = new Promise( (resolve, reject)=>{

//     setTimeout(()=>{
//         resolve('this is done');
//     } , 2000);

// }  );

// promise.then(data =>{
//     data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name:'alex'},{age:45});
const mergedObj2 = merge<{name:string},{age:number}>({name:'alex'},{age:45});
console.log(mergedObj);
console.log(mergedObj.name);

interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'No value';

    if (element.length===1){
        descriptionText= `Got 1 element`;
    }
    else{
        descriptionText= `Got ${element.length} elements`;
    }

    return [element, descriptionText];
}

console.log(countAndDescribe(' Hi there'));
console.log(countAndDescribe(['Sports','Books']));
//console.log(countAndDescribe(30));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return `value: ${obj[key]}`;
}

console.log(extractAndConvert({name: 'alex'},'name'));

class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];
    
    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
        if (this.data.indexOf(item)===-1){
            return;
        }
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems() {
        return [...this.data];
    }
}

const textStorage= new DataStorage<string>();
textStorage.addItem('Alex');
textStorage.addItem('Vicente');
textStorage.removeItem('Alex');
console.log(textStorage.getItems());

const numberStorage= new DataStorage<number>();

// DO NOT WORK WITH OBJECTS
// const objStorage = new DataStorage<Object>();
// objStorage.addItem({name: 'Alex'});
// objStorage.addItem({name: 'Vicente'});
// objStorage.removeItem({name: 'Alex'});
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title= title;
    courseGoal.description= description;
    courseGoal.completeUntil= date;

    return courseGoal as CourseGoal;
}

const namesArr: Readonly<string[]> =  ['alex','vicent'];
//namesArr.push('david'); //Compilation error