console.log("Hello World")
findInArray =  (arr, item) => {
    for(let i=0; i <arr.length; i++) {
        if(arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(findInArray([1, 2, 3], -2))

function negativeNumberCount(arr){
    let count = 0;
    for(let i=0; i <arr.length; i++){
        if(arr[i]< 0){
            count++
        }
    }
    return count
}
console.log(negativeNumberCount([1,-1,2,3,0,-89, -3]))