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