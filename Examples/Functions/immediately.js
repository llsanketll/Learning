//Immediately Invoked funciton

(function(){
    console.log("Do Somethig");
})();

//The is function is insidea two brackets as an expression
// and the last two brackets tell to execute the funciton


//We can also create a named function
(favNum = function(num = 3){
    console.log(`Fav number is ${num}`);
})();
favNum(5);

/*
    Main reason to use this is to avoid declaring variables in global scope and create closures
 */

 //Using arrow
 (favSum = (a = 5, b = 5) =>{
     console.log(a + b);
 })();
 favSum(4, 2);