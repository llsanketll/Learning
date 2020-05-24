// Lexical this in arrow function

// ES5 version
var box = {
    color: 'red',
    position: 1,
    clickMe: function(){
        document.querySelector('.red').addEventListener('click', function () {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box.clickMe();
/* 
    clickMe is the method of the box object
    but the function inside the event handler is just a normal function
    so '.this' keyword will point to the Window object instead of the box object

 */

// ES6 version

const box6 = {
    color: 'blue',
    position: '2',
    clickMe: function() {
        document.querySelector('.blue').addEventListener('click', () => {
            var str = `This is the box ${this.position} and has color ${this.color}`;
            alert(str);
        });
    }
};
box6.clickMe();

//Another example
const box6 = {
    color: 'blue',
    position: '2',
    clickMe: () => {
        document.querySelector('.blue').addEventListener('click', () => {
            var str = `This is the box ${this.position} and has color ${this.color}`;
            alert(str);
        });
    }
};
// The this scope is transfered to the global scope because we used the arrow in the above function as well
box6.clickMe();
