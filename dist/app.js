"use strict";
let user1;
user1 = {
    name: 'Alex',
    age: 45,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet("Hi there. I'm ");
