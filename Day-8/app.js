// Order of HOISTING
console.log("i am a1 ", data);
var data =  "Teacher"
console.log("i am a2 ", data);

function whoAmI(){
    console.log("i am a3 ", data);
    var data = "Computer"
    console.log("i am a4 ", data);
}

whoAmI()

/*
    Hoisting order:

        var data = undefined
        console.log("i am a ", data)
        data = teacher
        console.log("i am a ", data)

        function whoAmI(){
            var data = undefined; //Function scoped variable
            console.log("i am a ", data)
            data = "Computer";
            console.log("i am a ", data)
        }

    OUTPUT:

        undefined
        Teacher
        undefined
        Computer
 */


// SCOPE CHAIN

var data1 = "Hello Students"
function first(){
    var data2 = "How are you?"
    second();
    function second(){
        var data3 = "Let's Understand scope chain"
        console.log(data1+ " " + data2 + " " + data3);
    }
}
first();

//Child function can access the global variable and variables of its parent function but this is not true vice-versa

// Another Example

var data1 = "Hello students"
function first(){
    var data2 = "How are you?"
    second();
    function second(){
        var data3 = "Let's Understand scope chain"
        console.log(data1+ " " + data2 + " " + data3);
        three();
    }
}
function three(){
    var data4 = "of Group-01";
    // console.log(data1+ " " + data2 + " " + data3 + " " + data4);        // This line of code will show error as data2 and data3 are local variables of first() and second();
}
first()


// More about OBJECTS

const students = {
    name: "Raman",
    class : "B-Tech-CSE",
    sum : function(){
        var res = 10+30
        console.log(res);
        console.log(this);      // this refers to the current object it is declared in
    }
}

students.sum();

/*
    More About This
        1. In the illustration above this keyword refers to the owner object that is students. Therefore it will display
        the student object.
        2. In a Regular function like the illustration below this keyword will refer to the global object that is window object
        3. In a function in STRICT MODE this keyword will refer as UNDEFINED.
*/

function sum1(){
    var res = 10+30
    console.log(res);
    console.log(this);          //Declared in global scope so refers to the window object
}
sum1()

function sum2(){
    "use strict"
    var res = 10+30
    console.log(res);
    console.log(this);          // Will print undefined as STRICT MODE is Enabled
}
sum2();