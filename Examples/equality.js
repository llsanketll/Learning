// Comparison Operator
let x = 10;
let str = '10';

//Strict Equality
    (x === str)//result = false . It will check the value and datatype


//Abstract Equality
     (x == str)//result = true. It will check only the value

//Converting str into Number using strict equality
    (x === Number(str));// Result = true

// Not
    (x !== Number(str)); // result = false
