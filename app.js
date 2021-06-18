//Explicit object type creation
/*const person: {
    name: string;
    age: number
} = {
    name: 'Alex',
    age: 45
    
}*/
//leave typeScript infer the types.
var ADMIN = 0;
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["READ_ONLY"] = 1] = "READ_ONLY";
    ROLE[ROLE["AUTHOR"] = 2] = "AUTHOR";
})(ROLE || (ROLE = {}));
var person = {
    name: 'Alex',
    age: 45,
    hobbies: ['Sports', 'Cooking'],
    //role: [2,'author']
    role: ROLE.ADMIN
};
//person.role.push('admin');
person.role[1] = 10;
console.log(person.role);
var favouriteHobbies;
favouriteHobbies = ['a'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var h = _a[_i];
    console.log(h.toLocaleUpperCase());
}
