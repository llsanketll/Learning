// Anonymous Function : function with no name
/**
 * Can be stored in a variable
 * Can be passed as Argument in a Function
 * Can be returned in Function
 */

 //Storing in Variable
var test = function(){
    console.log("This is unknown function");
};
test();

//Passing as Argument

function display(arg){
    console.log(arg);
}

display((function(){ 
    return "Inside the anynomous";
})());


//Returning Anonymous

function disp(a){
    return function(b){
        console.log(`Returing from the function ${a + b}`);
    }
}
var newDisp = disp(10); // This variable is equal to the fucntion inside the funciton disp
newDisp(20);
