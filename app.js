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

function findSecondlargest(arr){
    if(arr.length < 2){
        return "Not required length"
    }

    let largest = -Infinity;
    let secondlargest = -Infinity;
    for(let i=0; i< arr.length; i++){
        if(arr[i]> largest){
            secondlargest =largest;
            largest = arr[i];

        }
        else if (arr[i] > secondlargest && arr[i] != largest){
            secondlargest = arr[i]
        }
    }
    return secondlargest
}
console.log(findSecondlargest([-1,-2,-14,-15,-1]), "second largest")

function starpattern1(n){
    for (let i=0; i< n ; i++){
        let row= ""
        for (let j=0; j< i+1 ; j++){
            row = row + '*'
        }
        console.log(row)

    }
}
starpattern1(10);

function starpattern2(n){
    let row,val =0;
    for (let i=0; i< n ; i++){
        row= "";
        val =0;
        for (let j=0; j< i+1 ; j++){
            val = j+1;
            row = row + val
        }
        console.log(row)

    }
}
starpattern2(5);

function starpattern3(n){
    let row,val =0;
    for (let i=0; i< n ; i++){
        row= "";
        val =0;
        for (let j=0; j< i+1 ; j++){
            val = i+1;
            row = row + val
        }
        console.log(row)

    }
}
starpattern3(5);
