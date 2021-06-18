
//Explicit object type creation
/*const person: {
    name: string;
    age: number
} = {
    name: 'Alex',
    age: 45
    
}*/

//leave typeScript infer the types.


const ADMIN=0;

enum ROLE {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Alex',
    age: 45,
    hobbies: ['Sports', 'Cooking'],
    //role: [2,'author']
    role: ROLE.ADMIN
}

//person.role.push('admin');
person.role[1]=10;
console.log(person.role)

let favouriteHobbies: string[];
favouriteHobbies = ['a']
console.log(person.name);

for (const h of person.hobbies ) {
    console.log(h.toLocaleUpperCase());
}