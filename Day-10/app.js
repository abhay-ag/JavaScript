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
        4. They can't be called from the instance name like other functions rather it is called by the class name
*/

class Point{
    constructor(x, y){
        this.x = x; this.y = y;
    }
    static dispName = "Point"
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx,dy)
    }
}
const p1 = new Point(3,2);
const p2 = new Point(6,6);
console.log(p1.dispName);           // Return Undefined as the static can be called only using the Class name
console.log(Point.dispName);
console.log(Point.distance(p1, p2));

class CheckNosObjects{
    constructor(){
        // a+=1
    }
    static a = 0
    static count(){
        a = a+1
    }
    count_normal(){
        // a += 1
    }
}

let ob1 =new CheckNosObjects();
let ob2 =new CheckNosObjects();
let ob3 =new CheckNosObjects();
let ob4 =new CheckNosObjects();
let ob5 =new CheckNosObjects();
let ob6 =new CheckNosObjects();
let ob7 =new CheckNosObjects();
let ob8 =new CheckNosObjects();

CheckNosObjects.count()

console.log(CheckNosObjects.a);