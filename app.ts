enum AsTypes {AS_NUMBER = 5, AS_STRING=10};
enum ROLE {DEV=3, READ_ONLY='a', AUTHOR=9}

type Combinable = number | string;
type CombinableDescriptor = 'as-numbers' | 'as-strings';

function combine(input1: Combinable, input2: Combinable, type: CombinableDescriptor ) {
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

console.log(combine(5,8,'as-numbers'));
console.log(combine("a",8,'as-strings'));


function testType (arg: AsTypes)
{
    console.log(arg);
}

console.log(testType(AsTypes.AS_NUMBER));
