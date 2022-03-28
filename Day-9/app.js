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