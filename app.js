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

function largestInArray(arr){
    let temp = arr[0];
    for(let i=0; i<arr.length; i++){
        if(temp < arr[i]){
            temp =arr[i];
        }
    }
    return temp

}
console.log(largestInArray([1,2,14,-15,0]))

function smallestInArray(arr){
    let temp = Infinity;
    for(let i=0; i<arr.length; i++){
        if(temp > arr[i]){
            temp =arr[i];
        }
    }
    return temp

}
console.log(smallestInArray([1,2,-14,-15,0]))