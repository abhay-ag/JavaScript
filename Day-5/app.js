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