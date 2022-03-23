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