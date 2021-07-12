"use strict";
var _a;
function add(a, b) {
    if ((typeof a === 'string') || (typeof b === 'string')) {
        return a.toString();
        +b.toString();
    }
    return a + b;
}
var result = add('alex', ' sandín');
console.log(result.split(' '));
var fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My company' }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInputData = undefined;
var storedData = userInputData !== null && userInputData !== void 0 ? userInputData : 'DEFAULT';
console.log(storedData);
var userInput = document.getElementById("user-input");
if (userInput) {
    userInput.value = "hi there!";
}
var errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
