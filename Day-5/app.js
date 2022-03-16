// Program 8

let evenNos = () =>{
    for (let i = 2; i <= 20 ; i = i+2){
        console.log(i)
    }
}
evenNos()

console.log("###################");

// Program 9

let oddNos = () =>{
    for (let i = 1; i <= 20 ; i = i+2){
        console.log(i)
    }
}
oddNos()

console.log("###################");
// Program 10

let sum = (n) =>{
    let res = (n * (n+1)) / 2;
    return res;
}

let sumRes = sum(10);
console.log(sumRes);

console.log("###################");

// Program 11
let oddSum = (n) =>{
    let res = 0;
    for ( let i = 1; i <= n ; i +=2){
        res += i;
    }
    return res;
}
let oddSumRes = oddSum(10);
console.log(oddSumRes);

console.log("###################");
// Program 14

let avgSeries = (arr)=>{
    let sum = 0;
    arr.forEach((index) =>{
        sum += index
    })
    return sum/arr.length;
}

let avg = avgSeries([1,2,3,4,5,6,7,8,9,10])

console.log(avg);

// ## DOUBT ## //
// console.log("###################");
// // Program 11

// let fib = (n) =>{
//     let series = "0,";
//     let sum = 0;
//     let firstNum = 0;
//     let secondNum = 1;
//     for (let i = 0;i < n;i++ ){
//         sum = firstNum + secondNum;
//         series += sum + ","
//         firstNum = secondNum
//         secondNum = sum

//     }
//     console.log(series);
// }

// fib(10)

/* Arrow function is great for single line return 
    It doesn't create a new scope
*/