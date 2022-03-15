let arr = [10,15,25,35,45,50, 59, 70]

function searchArr(element){
    arr.forEach(function (index){
        if (element === index) {
            let indexofElement = arr.indexOf(element);
            console.log(index + ", Index of: " + indexofElement);
        }else if( element !== index){
            let indexNotFound = arr.indexOf(element)
            console.log('Element not found: '+ indexNotFound);
        }
    })
}
searchArr(1)


// What is scope

/*
    var is global scoped
    let is block scoped -=> Exists within a block only
    Variables declared with var consume memory and even when not in use that is why let is preffered.
    Memory Optimization is inferred by let
*/

/*
    arr.pop() ==> Deletes the element from the last index of an array
    arr.push()==> Adds a new element at the end of the array
    arr.shift()=> Removes the first element of the array
    arr.unshift()==> Adds a new element at the beginning of the array
*/
