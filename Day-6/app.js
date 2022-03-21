// This Keyword

/* 
    var, array, object are all containers
*/

/*
    var mob_make = "Apple"
    var mob_model = "11 Pro"
    var price = 69000

    function wireless_chargin(){
        document.write("Supports")
    }

    in this case the problem will be raised when we have to store 100 different mobiles.
    In that situation we have to use the same properties again and again for 100 different mobiles.
    and we can copy and paste the same piece of code repeatedly and we have to change the values of these 
    properties every time for our particular mobile. So this is the inefficient way to tackle such kind of problems

    Here the concept of objecgt comes into the picture.
    These objects help us to bundle these propertiesor attributes into a single entity
*/

/**
    Here , all the properties and functions are coupled in a single variable, called mob
    This mob variable is called as an object
*/
// Using Object
// We dont need to specifically use strings for the object variable names.
let mob = {
    make : "Apple",
    model: "11 Pro",
    price: 69000,
    wireless_charging:()=>{
        console.log(mob.make + " " +mob.model+ " supports wireless charging.")
    }
}
console.log(mob);
mob.wireless_charging()

/*
    'this' keyword is reserved keyword in all object oriented programming.
*/

// This example

var myVar = 100;

function whoIsThis(){
    var myVar = 200;

    console.log(myVar);
    console.log(this.myVar);
}

whoIsThis()

// new keyword allocates a new memory space to anything in order to store the values against their properties and functions

var obj = new whoIsThis(); //
console.log(obj.myVar);

// 1. this in Global Scope
/**
    if a function that includes this keyword, then it is called from the global scope then this will point to the window object
 */

// Accesing this inside a object method

/*
    Global value can be changed using a local function
*/
var myTar = 100;

function hello(){
    this.myTar = 200;
}

var ob1 = new hello();

var ob2 = new hello();
ob2.myTar = 300;

console.log(ob1.myTar);
console.log(ob2.myTar);