"use strict";
class Person {
    constructor(n) {
        this.age = 45;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name + ' age ' + this.age);
    }
}
let user1;
user1 = new Person('Alex');
user1.greet("Hi there. I'm ");
