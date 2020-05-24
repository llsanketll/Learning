/** Call method */

//First know bind then it's the same

//Let's say we have a function to print the full name of a person and the mood
function printMood(mood){
    console.log(`${this.name} is ${this.age} years old and is ${mood} right now`);
    //Currently the this is pointing to Window Object as it has no context   
}

// Let's create another object
var n2 = {
    name: 'Sanket Lamsal',
    age: 19
}

//As the name suggests the call method calls the funciton immediately unlike the bind method in which we could store the function 
printMood.call(n2, 'Happy');

// Giving the printMood the context of n2