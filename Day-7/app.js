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
*/

sum(4,5);          // Outputs TypeError exception

console.log(sum);  // Outputs Undefined
var sum = function(a,b){
    console.log(a+b);
}                  

var func = function(a,b){
    res = a+b
    console.log(res);
}
console.log(func); // Outputs the function definition