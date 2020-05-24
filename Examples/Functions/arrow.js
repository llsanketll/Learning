/**     Arrow Notation       */

//Function expressinon
var fun1 = function(){
    console.log("Do someting!");
}
fun1();

//Using arrow
var fun2 = () => console.log("In arrow!"); // Removing the function keyword and the brakets{}
fun2();

//Another example (Normal function expression)
var square = function(num){
    return num * num;
}
console.log(square(5));

// Using Arrow 
var sum = (a, b)=> a + b;
console.log(sum(2,3));



