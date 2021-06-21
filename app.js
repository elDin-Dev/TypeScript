var userInput;
var userName;
userInput = 5;
userInput = 'alex';
if (typeof userInput === 'string') {
    userName = userInput;
}
//userName= userInput;
function generateError(message, code) {
    throw { message: message, erroCode: code };
}
generateError('An error!', 500);
