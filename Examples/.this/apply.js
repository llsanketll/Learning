/* Apply */

//It takes the function's argument as an array
sum = function(){
    var sum = 0;
    for(var i = 0 ; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
    console.log(this.name + ' is my Context');
}

var sanket = {
    name: 'Sanket Lamsal',
    age : 20
};

var arr = [5, 10, 30, 20];

sum.apply(sanket, arr);
//Immediately invoked

