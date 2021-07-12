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