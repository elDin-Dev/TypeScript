let userInput:unknown;
let userName: string;

userInput = 5;

userInput = 'alex';
if (typeof userInput==='string') {
    userName= userInput;
}
//userName= userInput;


function generateError(message: string, code: number):never{
    throw {message: message, erroCode:code};
}

generateError('An error!',500);