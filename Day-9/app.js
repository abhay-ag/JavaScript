/* 
    Objects:
        1. An object is a collection of properties, and a property is an association between a key and a value
        2. A function can be a property's value and is known as a method
            Declaration : 
                Eg: const func = {
                        result : function(){
                            let num1 = 90;
                        }
                    }
        3. It's a standalone entity and it binds properties and has its type.
*/

// First Type

const std = {
    name: "Abhay",
    class:"BE",
    res : function(){
        console.log(this.class);
    }
}

std.res();

/* 
    Accessing object properties:
        1. using dot notation
            eg: objectName.propertyName
*/

// Second Type

const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1980;

console.log(myCar);

/* 
    Explanation:
        1. using new Object(); we create an instance of pre created object and dynamically allocates memory
        2. Then we add properties using dot notation.
*/

// Third Type --> Using Classes

/* 
    Classes:
        1. They are special function, has two components 'class expressions' and 'class declarations'.
        2. First letter of the class name should be Capitalized.
        3. Classes are NOT HOISTED.
*/

/* 
    Difference in between constructor and a function:
        A function has to be called to run it but constructor automatically runs.
        In order to execute a function it has to be called, however constructor calls itself automatically when an instance of the class is created.
*/

// Declaring a Class

class Rectangle{
    constructor (height, breadth){
        this.height = height;
        this.width = breadth
    }
}

// Declaring a class using expressions

// UnNamed
let Rect = class{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}
console.log(Rect.name);

// Named

let Rect1 = class Rect2{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

console.log(Rect1.name);