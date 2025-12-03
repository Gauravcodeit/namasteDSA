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

 // how to do it duplicate problem in the same array by modifying it

  function removeDuplicate2(num){
    let pos = 0;
     for(let i =0; i < num.length; i++ ){
        if(num[pos] < num[i] ){
             pos++;
            num[pos] = num[i];

        }
     }
     console.log(num, pos + 1)
 }
 removeDuplicate2([-1, -1,0,1,2,2,2,3,4,4])

 function removeValInArry(num, val){
    let pos =0;
     for(let i =0; i < num.length; i++ ){
        if(num[i] != val){
            num[pos] = num[i];
            pos++;
        }
     }
     console.log(num, pos)

 }
 removeValInArry([1,2,3,2,1,4], 1);

 function reverseString(num){
    let len = num.length;
    let halfLen = Math.floor(len/2);
    let temp;
    for (let i =0; i < halfLen; i++){
        temp = num[i];
        num[i] = num[len - 1- i];
        num[len - 1- i] = temp;
    }
    return num
 }
 console.log(reverseString(['a','b','c','d']))

 function maxProfit(price){

    let buyPrice = price[0];
    let sellPrice = price[0];
    let profit= sellPrice - buyPrice;
    for (let i =0; i < price.length; i++){
        for(let j= i + 1; j < price.length; j++){
            if (price[j] - price[i] > profit){
                profit = price[j] - price[i];
                sellPrice =  price[j];
                buyPrice = price[i];
            }
        }
    }
    if(profit <=0) profit=0;
    console.log(buyPrice, sellPrice, profit )
 }
 maxProfit([1, 1, 1, 3,4])


  function OptMaxProfit(price){

    let min = price[0];
    let maxprofit= 0;
    for (let i =1; i < price.length; i++){
        if(price[i] - min > maxprofit){
           maxprofit = price[i] - min;
        }
        if(min > price[i]){
            min = price[i];
        }
    }
    console.log(maxprofit )
 }
 OptMaxProfit([1, 8, 1, 1, 3,4, -1, 10])

 function mergeSortedArry(num1, n, num2, m){
   let num1copy = num1.slice(0,n);
    let p1=0; p2=0;
    for (let i=0; i < (m+n); i++){
        if(((num1copy[p1] > num2[p2] && p2 < m ) || p1 >= n) ){
            num1[i] = num2[p2];
            p2++;
        }
        else if (p1 < n){
            num1[i] = num1copy[p1];
            p1++;
        }
    }
    return (num1)
 }
console.log(mergeSortedArry([1,3,4,4,6], 5, [2,2,3,4], 4))

 function mergeSortedArry2(num1, n, num2, m){
   let num1copy = num1.slice(0,n);
    let p1=0; p2=0;
    for (let i=0; i < (m+n); i++){
        if(((num1copy[p1] < num2[p2] && p1 < n ) || p2 == m) ){
            num1[i] = num1copy[p1];
            p1++;
        }
        else {
            num1[i] = num2[p2];
            p2++;
        }
    }
    return (num1)
 }
console.log(mergeSortedArry2([1,3,4,5,6], 5, [2,2,3,4], 4))
console.log(mergeSortedArry2([1,3,], 2, [2,2,3,4], 4))

function optMergeSortArry(num1, n, num2, m){
    let p1 = n - 1;
    let p2 = m - 1;
    for(let i= m+n-1; i >=0; i--){
        if (p2 < 0) break;
        if(num1[p1] < num2[p2] || p1 < 0 ){
            num1[i] =num2[p2]
            p2 --;
        }
        else{
            num1[i] = num1[p1]
            p1 --;
        }
    }
    return num1

}

console.log(optMergeSortArry([1,3,4,5,6], 5, [2,2,3,4], 4))
console.log(optMergeSortArry([1,3,], 2, [2,2,3,4], 4))

// x=0;
// 1 0 1 2 0 => x=0; i=0; shift non zero to x position then update x
// 1 0 1 2 0 => x=1; i=1; do not shift and update
// 1 1 1 2 0 => x=2; i=2; shift non zero to x position then update x
// 1 1 2 2 0 => x=3; i=3; shift non zero to x position then update x
// 1 1 2 2 0 => x=3; i=4; do not shift and update
//  now add zero to all from pos x to array length => 1 1 2 0 0

function moveZeros(num){
    let x =0;
    for (let i=0; i < num.length; i++){
        if(num[i] != 0){
            num[x] = num[i];
            x++;
        }
    }
    for (let i= x; i < num.length; i++){
            num[i] = 0;
    }
    return num
}

console.log(moveZeros([1, 0, 1, 2, 0]))
console.log(moveZeros([0, 0, 2, 2, 0]))

function consecutiveOnes(num, text){
    let maxCount =0;
    let count =0;
    for (let i=0; i < num.length; i++){
        if(num[i] == 1){
            count++;
            maxCount = Math.max(maxCount, count);
        }
        else{
            count = 0;
        }
    }
    console.log(maxCount + " " +text);
}

consecutiveOnes([1,1,0,1,1,1], "ans1")
consecutiveOnes([1,0,0,1,1,0,1,1,1,1], "ans2")
consecutiveOnes([1,1,0,1,1,1,1], "ans3s")

function missingNumber(num){
    let n = num.length;
    let expectedSum = (n*(n+1))/2;
    let actualSum =0;
    for (let i=0; i < num.length; i++){
        actualSum += num[i];
    }
    return expectedSum - actualSum;
}
console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

function singleNumber(num){
    let hashMap = {};
    for (let i=0; i < num.length; i++){
        if(!hashMap[num[i]]){
            hashMap[num[i]] = 1;
        }
        else{
            hashMap[num[i]] ++;
        }
    }
    for (let i=0; i < num.length; i++){
        if(hashMap[num[i]] == 1){
            return num[i];
        }
    }
}
function singleNumber2(num){
    let hashMap = {};
    for (let i=0; i < num.length; i++){
        if(!hashMap[num[i]]){
            hashMap[num[i]] = 1;
        }
        else{
            hashMap[num[i]] ++;
        }
    }
    for (key in hashMap ){
        if(hashMap[key] == 1){
            return key
        }
    }
}
function singleNumber3(num){
    let result = 0;
    for (let i=0; i < num.length; i++){
        result = result ^ num[i]
    }
    return result;

}


console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([2,2,1]))

console.log(singleNumber2([4,1,2,1,2]))
console.log(singleNumber2([2,2,1]))

console.log(singleNumber3([4,1,2,1,2]))
console.log(singleNumber3([2,2,1]))
console.log(singleNumber3([8,8, 9, 6, 1,2,2,1])) // it will fail in this case