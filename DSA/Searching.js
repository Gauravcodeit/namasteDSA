function linearSearch(arr, target){
    for(let i=0; i< arr.length; i++) {
        if (arr[i] == target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,3],1), "linear search")
console.log(linearSearch([1,2,3],3))
console.log(linearSearch([1,2,3],4))

function binarySearch(arr, target) {
    let left =0;
    let right = arr.length -1;
    let middle;
    while(left <= right) {
        middle = Math.floor((left + right )/2)
        if(arr[middle] == target){
            return middle
        }
        else if(arr[middle] < target) {
            left = middle + 1;
        }
        else {
            right = middle -1;
        }
    }

    return -1
}
console.log(binarySearch([1,2,4],1))
console.log(binarySearch([1,2,4],3))
console.log(binarySearch([1,2,4],4))