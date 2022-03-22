// With using objects

let student = [
    {
        name : "Abhay Aggarwal",
        rno : 2110990034,
        class : 'B.E',
        result : function(){
            return 90
        }
    },
    {
        name : "Abhijeet",
        rno : 2110990040,
        class : 'B.E',
        result : function(){
            return 90
        }
    },
    {
        name : "Aakriti",
        rno : 2110990008,
        class : 'B.E',
        result : function(){
            return 90
        }
    }
]
console.log(student);

// Without using objects

let s1name = "Abhay Aggarwal"
let s1rno = 2110990034
let s1class = 'B.E'
let results1 = function(){
    return 85
}
s1result = results1()
let s2name = "Abhijeet"
let s2rno = 2110990040
let s2class = 'B.E'
let results2 = function(){
    return 85
}
s2result = results2()
let s3name = "Aakriti"
let s3rno = 2110990008
let s3class = 'B.E'
let results3 = function(){
    return 85
}
s3result = results3()
console.log(s1name, s1rno, s1class, s1result);
console.log(s2name, s2rno, s2class, s2result);
console.log(s3name, s3rno, s3class, s3result);