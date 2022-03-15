// Why we add JS in HTML?
// JS is an object based language
// Request > Process > Response

// controls for client side are called lightwieght controls -->Client Side Validation
// Controls which bind themselves and goto the server are called heavyweight controls

// Events are always fired but functions are called

/*

    Variable
        |
        |--Local ---> Can be accesed in the block it is declared
        |
        |--Global --> Can be accesed anywhere in the code

    var --> Global
    let --> Block, Can be reassigned
    const-> Block, Can't be reassigned

*/

/*
    --> Variables and Data Types
    VARIABLES: Variables are the containers to store the values.
    // Can contain a number, string, character, BOOLEAN, arrays //

    DATA TYPES 
        |
        |
        |--Primitive Data Types - Inbuilt Data types/Standard || EG: number, string, boolean, null, undefined, symbol
        |                                                        [null Means Emptiness] [undefined mean tge variable is declared but not assinged]
        |--Refernce Data Types - Value can be accessed using a certain reference only || EG: arrays, objects
*/

const button =document.getElementById('but')
const h1 = document.getElementById('h1')

const date = new Date().getDate();
const year = new Date().getFullYear();
const month = new Date().getMonth();
const dateBox = document.getElementById('date')

function putDate(){
    dateBox.textContent = date +"/"+month+"/"+year
}

button.addEventListener('click', ()=>{
    h1.textContent = "Hello World"
    putDate()
    setTimeout(() => {
        h1.textContent = "Click the button to change text."
        dateBox.textContent = ''
    }, 1000);
})