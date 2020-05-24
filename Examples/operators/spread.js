// ... Spread operator

var sumFour = function(a, b, c, d){
    return a + b + c + d;
}

var ages = [10, 12, 20, 21];

var sum = sumFour(...ages);
console.log(sum);




// Combine arrays
var marks = [12,123, 1232, 123123];

var newArray = [...ages, ...marks];
console.log(newArray);


//We can do it with nodeList

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

let newArray = Array.from(all);

console.log(newArray);



