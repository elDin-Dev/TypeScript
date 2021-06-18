function combine(input1: number | string, input2: number | string) {
    //yuou can specify as many types as you want using | 
    let result:number | string;
    if ( (typeof input1==='number') && (typeof input2==='number'))
    {
        result= input1 + input2
    } else {
        result= input1.toString() + input2.toString();
    }
    
    return result;
}

console.log(combine(5,8));
console.log(combine("5",8));
