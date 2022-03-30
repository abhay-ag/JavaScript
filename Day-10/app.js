class Car{
    constructor (name, year){
        this.name = name
        this.year = year
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car("Ford", 2014)
console.log("My car is " + myCar.age() + " years old.");

/*
    Class Definition:
        1. The number of properties and methods in that class

    Class can contain:
        1. Only one constructor of each type
            a. Empty Constructor ==> constructor() {...}
            b. Parameterized Constructor ==> constructor(param1, param2, ...) {...}
        2. Multiple methods
*/