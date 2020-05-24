/**     Let vs Var vs Const */

function foo(){
    for(let i = 0; i < 5; i++){
        if(i == 2){
            var fun = 'Fun';
        }
        console.log(i);
    }
    console.log(fun); // Can be accessed outside it's block (but within the function)
}
foo();

//Var has funciton Scoping. "fun" can't be accessed outside the function foo

// Let has block Scoping. So it can only be accessed in the block in which it is defined

// Const same as Let