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
        num = 6;    // Initialization


    eg:
        console.log(num)
        num = 6;    //Throws a ReferenceError exception
*/