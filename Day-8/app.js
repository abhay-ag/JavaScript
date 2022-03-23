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