"use strict";
function add(a, b) {
    if ((typeof a === 'string') || (typeof b === 'string')) {
        return a.toString();
        +b.toString();
    }
    return a + b;
}
var result = add('alex', ' sandín');
console.log(result.split(' '));
var userInput = document.getElementById("user-input");
if (userInput) {
    userInput.value = "hi there!";
}
var errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
