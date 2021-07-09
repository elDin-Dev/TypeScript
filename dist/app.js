"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 45;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name + ' age ' + this.age);
        }
        else {
            console.log('hi!');
        }
    }
}
let user1;
user1 = new Person();
user1.greet("Hi there. I'm ");
