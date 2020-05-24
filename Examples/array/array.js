// Array
let number = [1, 2, 4, 5];
number[4] = 'Sanket';// Array can store multiple variables in JS
number.push(23); // To a the number at last
number.pop();// To remove the last number

// Multidimensional Array
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

for(let i = 0; i < matrix.length; i++){
    console.log(matrix[i]);
    
}

//Using forEach

matrix.forEach(function(row){
    row.forEach(function(e){
        console.log(e);
        
    })
})
