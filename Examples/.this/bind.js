function printCoordinates(){
    console.log('X = ' + this.x + ' and Y = ' + this.y);
    //Currently this doesn't have any context
    //So it's going to refer to the global scope and try to find x and y variables in the Window Object

    console.log(this);//We can see which object this is pointing to
    
}

//Now let's create a object of coordinates

var c1 = {
    x : 5,
    y : -10
};

// Now give the function context of c1 by binding it with bind method

var c1_function = printCoordinates.bind(c1); // Done :)

// We store it in a new function unlike call method

//Calling the function
c1_function();

//Example in ES5

var Person = function(name){
    this.name = name;
};

Person.prototype.getName = function(friends){
    var array = friends.map(function(e)
    {
        return this.name + ' is friends with ' + e;
    }.bind(this));
    console.log(array);
};

var friends = ['Sanket', 'Sanyog', 'Binita '];

new Person('Milan').getName(friends);

