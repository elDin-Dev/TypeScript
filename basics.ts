function add(n1: number, n2: number, showResult: boolean, phraseResult: string) {
    console.log(typeof n1)

    const result= n1 + n2

    if (showResult) {
        console.log(phraseResult,result);
    }
    return result;
}

const number = 5;
const number2 = 2.8

const printResult = true;
const phraseResult = "Result is:"

console.log(add(number,number2,printResult, phraseResult));