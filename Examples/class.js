class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet() {
        console.log(`Hello, I'm ${name} and I'm ${age} and I'm a ${gender}`);
    }
}

// Inherit from Person
class Athlete extends Person {
    constructor(name, age, gender, medals, speed) {
        super(name, age, gender);
        this.medals = medals;
        this.speed = speed;
    }
    hasMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const a1 = new Athlete('Sanket', 19, 'M', 12, 3);



