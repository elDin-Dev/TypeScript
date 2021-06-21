function add (n1: number, n2: number) {
    return n1+n2;
}


function printResult (num: number):void {
    console.log('Result' + num);
}

printResult(add(5,12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void)  {
    const result = n1 + n2;
    cb(result);
}



let combineValues: (a: number, b:number) => number;

combineValues=add;
//combineValues=printResult;

//console.log(combineValues(3,58));

addAndHandle(10, 10, (result) => {
    console.log(result);
})
