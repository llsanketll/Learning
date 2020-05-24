// Object
let person = {
    name: 'Sanket Lamsal',
    age : 19
}

// Dot Notation
console.log(person.age);// To access the element age

// Bracket Notation
let selection = 'name';
person[selection] = 'Changed'; //Needs to be string
console.log(person.name);