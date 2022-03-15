// Swapping of two Numbers

// With Third Variable
function swap(n1, n2){
    let c = n1
    n1 = n2
    n2 = c
    console.log(n1, n2);
}

swap(25,35);

// Without Third Variable

function swapWithoutThird(n1, n2){
    n1 = n1 + n2;
    n2 = n1 - n2;
    n1 = n1 - n2;
    console.log(n1, n2);
}
swapWithoutThird(25,35);

// Print the Grade (a b c)

function grade(n1, n2, n3){
    let marks = (n1 + n2 + n3)/3
    if(marks<= 100 && marks >= 85){
        console.log('Grade A');
    }else if(marks < 85 && marks >= 60){
        console.log('Grade B');
    }else if(marks < 60){
        console.log('Grade C');
    }
}
grade(85, 25, 55)

// SUM the Digits of a number

function sumDig(num){
    let len = num.toString()
    let digit;
    let sum = 0;
    for(let i = 0; i < len.length; i++){
        digit = num%10
        sum += digit
        num = parseInt(num/10)
    }
    console.log(sum)
}

sumDig(669)