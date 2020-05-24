//Example to print numbers greater than 15
let points = [10, 12, 14, 57, 1, 5, 30, 20, 21];

//Single parameter doesn't need brackets
const high = points.filter(element => element > 15);

console.log(high);

// Above is same as
let newArray = [];
for(let i = 0; i < points.length; i++){
    if(points[i] > 15)
        newArray.push(points[i]);
}
console.log(newArray);


