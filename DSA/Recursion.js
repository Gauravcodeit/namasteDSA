function toprintNTo1(n) {
    if (n == 0) return
    console.log(n);
    n--;
    toprintNTo1(n)

}

toprintNTo1(15)

function toprint1ToN(n, inital) {
    if (inital > n) return
    console.log(inital);
    inital++;
    toprintNTo1(n,inital)

}
toprint1ToN(10, 1);

function sumOfFirstNNumber(n, sum){
    if(n < 0) {return sum;}
    sum = sum + n;
    n--;
    return sumOfFirstNNumber(n, sum)
}
console.log(sumOfFirstNNumber(3,0))

function sum (n){
    if(n==0) return 0;
    return (n + sum(n-1))
}
console.log(sum(5));

function sumOfArry(arr){
    if (arr.length == 0) return 0
    return (arr.pop() + sumOfArry(arr))
}
console.log(sumOfArry([1,3,4,3, 5]))

const arr1 = [4,3,4,3, 5];

function sumOfArry2(n){
    if (n == 0) return arr1[n]
    return (arr1[n] + sumOfArry2(n - 1))
}
console.log(sumOfArry2(arr1.length - 1 ))

function sumOfOddInArry(n){
    if(n == 0) {
        return (arr1[n]%2 !=0 ? arr1[n] : 0)
    }
    return (arr1[n]%2 !=0 ? arr1[n] + sumOfOddInArry(n-1) : sumOfOddInArry(n-1))
}
console.log(sumOfOddInArry(arr1.length - 1 ));

function factorial(n){
   if (n  == 1) return 1
   return n * factorial(n-1);
}
console.log(factorial(5));

function powerOfTwo(n){
    if(n== 1) return true;
    else if(n < 1) return false;
    return n % 2 == 0 ? powerOfTwo(n/2) : false;
}
console.log(powerOfTwo(4))
console.log(powerOfTwo(1))
console.log(powerOfTwo(5))

function fib(n){
    if (n <= 0) return 0;
    if(n == 1) return 1; // if(n<=1) return n
    return  (fib(n-2) + fib(n-1))

}
// 1,1,2,3, 5,8
console.log("Fib")
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log("Fib")

// there two rabbits and every month it is muliple by  2
// n is the month
function countRabbit(n){
    if(n==1) return 2
    return 2*countRabbit(n-1);
}
console.log(countRabbit(1))
console.log(countRabbit(3))
console.log(countRabbit(4))