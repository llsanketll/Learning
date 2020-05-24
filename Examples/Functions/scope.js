/* Scope Chain*/

var a = 10;
function outer(){
    var b = a; 
    console.log(b);
    function inner(){
        var c = b; // But the intepreter hasn't given value to b so it's undefined
        console.log(c);
        var b = 20; // Compiler knows it's there
    }
    inner();
}
outer();