/* JS Closures*/
//Every closure has 3 scope
/**
 * Local ta bhai halo
 * Global Scope pani bhayo
 * And Outside Scope
 */

var a = 10;
function outer(){
    var b = 20; //b will be declared every time the funciton is called
    var inner = function(){
        a++;
        b++;
        console.log(a);
        console.log(b); 
    }; 
    return inner;
}

var innerFn = outer(); // Assigning the function to innerFn like a pointer
innerFn();

var innerFn2 = outer();
innerFn2();



/**************************************** */
var a = 10;

var fn = function(){
    console.log("Late");
};

setTimeout(fn, 2000);
console.log("Frist but called later");