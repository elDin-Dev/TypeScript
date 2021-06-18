
//Explicit object type creation
/*const person: {
    name: string;
    age: number
} = {
    name: 'Alex',
    age: 45
    
}*/

//leave typeScript infer the types.



enum ROLE {DEV=3, READ_ONLY='a', AUTHOR=9}

const person = {
    name: 'Alex',
    age: 45,
    hobbies: ['Sports', 'Cooking'],
    //role: [2,'author']
    role: ROLE.READ_ONLY
}

//person.role.push('admin');
person.role[1]=10;
console.log(person)

let favouriteHobbies: string[];
favouriteHobbies = ['a']
console.log(person.name);

for (const h of person.hobbies ) {
    console.log(h.toLocaleUpperCase());
}