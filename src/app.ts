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

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name:'alex'},{age:45});
console.log(mergedObj);
console.log(mergedObj.name);