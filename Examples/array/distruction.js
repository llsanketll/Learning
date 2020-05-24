/*      Destructing Assignment Operator*/


// Normal Array decleration
const san = ['Sanket', 19, false, 'Biragnagar'];
var [aName, Age, isMarried, City] = san;





// Normal object decleration
let obj = {
    name: 'Sanyog',
    age: 20,
    married: false,
    city: 'Kathmandu'
};
//Variables must match with the key names
const { name, age, married, city } = obj;
console.log(name);

// If we don't want the variables to match 
const { age: a } = obj;
console.log(a);




//Another example
function retire(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = retire(2000);

console.log(age2);
console.log(retirement);





