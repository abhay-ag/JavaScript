// Variable and function hoisting

/*
    Web browser is the compiler for JavaScript
    HLL -> Assembly Language -> Machine level language
    Steps: 
        1. Compiler reads the source code file [Input - Processing - Output]. File is filtered of variables, and memory in allocated accordingly.
        2. Clear the memory allocated after the code is executed.
*/

/* 
    Hoisting move the variables and function declarations to the top of their scope before code is executed.

    No matter where the function is declared it is hoisted to the top of the code file.

    finds all the function blocks in the given code and moves them to the topmost position. [Readjusts the code]
*/

/* 
    Only the Declarations are hoisted

    eg:
        console.log(num) // Results in undefined
        var num;    // Declaration ---> Moved to the top
        var num = 6;// This will also be moved to top
        num = 6;    // Initialization


    eg:
        console.log(num)
        num = 6;    //Throws a ReferenceError exception
*/

/* 
    IF FUNCTION IS DECLARED USING AN EXPRESSION THEN IT WILL NOT BE HOISTED  // Throws an TypeError exception
    ARROW FUNCTIONS ALSO AREN'T HOISTED //Throws a ReferenceError
    IF A FUNCTION IS WRITTEN WITHIN PARENTHESIS THEN ALSO IT WILL NOT BE HOISTED // Throws a ReferenceError


    INITIALIZATIONS USING LET AND CONST ARE NOT HOISTED
*/

// sum(4,5);          // Outputs TypeError exception

console.log(sum);  // Outputs Undefined
var sum = function(a,b){
    console.log(a+b);
}                  

var func = function(a,b){
    res = a+b
    console.log(res);
}
console.log(func); // Outputs the function definition

// ____________________ //
var gb = "window"
function a(){
    var local1 = "Hello"
    console.log(local1);
    b();
    console.log("Students");
}
function b(){
    console.log("B-Tech-CSE");
    c();
}

function c(){
    console.log("Group 02");
}

a()

/* 
    Output

        Hello
        B-Tech-CSE
        Group 02
        Students
*/

/* 
    STACK Method ==> LAST IN FIRST OUT
    Explanation of output

    1) function a is moved to the calling stack and remains there untill and unless all the tasks of a aren't executed
    2) at line 3 of a function b is moved to calling stack      [function a still pending]
    3) last line of b function c is moved to the calling stack  [function b still pending]
    4) execution of c completes and c is removed (Control goes to b)                [function b completed and removed from stack]
    5) (control goes to a) a is completely executed and removed from stack
*/