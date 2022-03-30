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

    When a new object/instance is created then the instance refers to all the properties held by the original class and can access all of these.
    Every object/instance created can not see the data of other objects.

    Anything passed into the class brackets is automatically passed onto the constructor.
*/
/*
    STATIC VARIABLES:
        1. Memory not allocated again and again; have a common memory
        2. Static can be a property and a method.
        3. Static properties are useful for making caches and other data that is not repeated for other instances
*/