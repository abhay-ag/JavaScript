/*
    Arrow Functions are more efficient than the regular functions is JavaScript
    It reduces code as they are easy to write.
    Can be written in a single line
*/

function isPositive(number){
    return (number>0)
}

let isPos = number => {
    return (number>0)
}

let isPos1 = n => n>0;

let isPos2 = (n) => n>=0; 

let func = isPositive(59)
let arrFunc = isPos(-123)
let arrFunc1 = isPos1(321)
let arrFunc2 = isPos2(-123)

console.log(func, arrFunc, arrFunc1, arrFunc2);


// Explicitly declaring functions

let posNo = function(n){
    return n>0
}

let arrPosNo = (n) => {
    return n>0
}

let arrPosNo1 = (n) => n>0

// To write return keyword in the arrow function then we have to use curly brackets.

console.log(posNo(-220), arrPosNo(211), arrPosNo1(12-134));

let sum = (a,b)=> a+b

console.log(sum(55,55))

// Arrow function without any argument

let msg = () => "Hello"

console.log(msg());

// Getting input from the user

// let age = prompt("Enter your Age: ")

// let welcome = (age < 18) ? () => alert('You are a minor') : () => alert('Welcome to the program');

// welcome();

// TOTAL BILL

let ask = prompt("Enter the number of calls?")
const fixedRent = 100;

let billTot = (calls)=>{
    let totCall;
    let bill;
    if (calls > 100){
        totCall = calls-100;
        calls = calls-totCall;
        bill = 2*totCall + 1*calls + fixedRent;
    }else{
        bill = 1*calls + fixedRent
    }
    return bill;
}

let resBill = billTot(ask);
document.write(resBill)