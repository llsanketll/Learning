/**
 * Rest Parameter
 * Converts multiple arguments into an Array
 */



// ES5
function fullAge() {
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(e => {
        console.log(2020 - e >= 18);
    });
}
fullAge(2000, 2004, 1991);




// ES6
function isFullAge(...years) {
    years.forEach(e => {
        console.log(2020 - e >= 18);
        
    });
}
isFullAge(1980, 1999, 1965);

// With Multiple parameter

function isNice(type, ...years){
    years.forEach(e =>{
        console.log(e + type);
    })
}

isNice('Hello', 1980, 1990, 1989);