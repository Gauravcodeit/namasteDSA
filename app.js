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

function starpattern4(n){
    console.log("Break")
    let row,val =0;
    for (let i=0; i< n ; i++){
        row= "";
        for (let j=n-1-i; j > -1 ; j--){
            row = row + (n-j -i)
        }
        console.log(row)

    }
}
starpattern4(5);

function starpattern5(n){
    console.log("Break")
    let row,val =0;
    for (let i=0; i< n ; i++){
        row= "";
        for (let j=0; j < n-i ; j++){
            row = row + (j+1)
        }
        console.log(row)

    }
}
starpattern5(5);

function starpattern6(n){
    console.log("Break")
    let row,val =0;
    for (let i=0; i< n ; i++){
        row= "";
        for (let j=0; j < n ; j++){
            if ((n-i-1) <= j) {
                row = row + "*"
            }
            else{
                row = row + "1"
            }

        }
        console.log(row)

    }
}
starpattern6(6);

function starpattern7(n){
    console.log("Break")
    let row,val =0;
    for (let i=0; i< n ; i++){
        row= "";
        for (let j=0; j < n-(i+1) ; j++){
            row= row + "."
        }

        for (let j=0; j < 2*i+ 1 ; j++){
            row= row + "*"
        }
        for (let j=0; j < n-(i+1) ; j++){
            row= row + "."
        }

        console.log(row)

    }
}
starpattern7(6);

function starpattern8(n){
    let row,val =0;
    for (let i=0; i< n ; i++){
        row= "";
        val =0;
        for (let j=0; j< i+1 ; j++){
            val = j+1;
            row = row + val%2
        }
        console.log(row)

    }
}
starpattern8(6);
function starpattern9(n){
    let row,val =0;
    let toggle =0;
    for (let i=0; i< n ; i++){
        row= "";
        for (let j=0; j< i+1 ; j++){
            row = row + toggle;
            toggle= !toggle ? 1 : 0;
        }
        console.log(row)

    }
}
starpattern9(6);

function countDigit(n){
    if (n==1) {console.log(1, "cnt")
        return
    }
    n = Math.abs(n);
    let  cnt=0;
    while (n>0){
        n= Math.floor(n/10);
        cnt++
    }
    console.log(cnt, "cnt")
}
countDigit()

function isPalindrome(n){
    if (n <0) return false
    let ncopy = n;
    let rev =0;
    let rem;
    while (n >0){
        rem = n%10;
        rev = 10* rev + rem;
        n = Math.floor(n/10)
    }

    return ncopy === rev;
}
 console.log(isPalindrome(1221))
 console.log(isPalindrome(-121))
 console.log(isPalindrome(4884))
 console.log(isPalindrome(1212))

 function reverse(n){
    let ncopy = n;
    if(n == 0) return 0

    n = Math.abs(n)
    let rev= 0;
    let rem;
    while (n >0){
        rem = n%10;
        rev = rev* 10 + rem
        n =Math.floor(n/10);
    }
    let limit = 2**31
    if (rev > limit) return 0
    return ncopy < 0 ? -rev : rev;
 }
 console.log(reverse(-22351))

 // Time complexity - It is used to measure efficeny of an algorithm in terms of
 // speed , as the inputs grows  O(logn),O(n), O(nLogn), O(n2)

 function removeDuplicate(num){
    let arrywithoutDuplicate = [];
    let temp = num[0];
    arrywithoutDuplicate.push(temp)
     for(let i =0; i < num.length; i++ ){
        if(temp != num[i] ){
            arrywithoutDuplicate.push(num[i])
            temp = num[i];
        }
     }
     console.log(arrywithoutDuplicate)
 }
 removeDuplicate([-1, -1,0,1,2,2,2,3,4])