
function bubbleSort(arr) {
    let l = arr.length;
    let temp;
    let isSwapped = false;
    for (let i =0; i < l-1; i++) {
        for(let j=0; j < l-1-i; j++ ){
            if (arr[j] > arr[j+1] ){
                temp =  arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if (isSwapped == false) break
    }
    return (arr);
}

console.log(bubbleSort([10,2, 4, 3]))

function selectionSort(arr) {
    let len = arr.length;
    let temp;
    let min;
    for (let i=0; i < len -1; i++) {
        min = i;
        for (let j=i+1; j<len; j++) {
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if (min != i) {
            temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp;
        }
    }

    return arr
}

console.log(selectionSort([10,4,3,4,2,6]));

function insertionSort(arr) {
    let len = arr.length;
    let curr, prev
    for (i = 1; i < len ; i++ ){
        curr = arr[i];
        prev = i - 1;
        while ( arr[prev] > curr && prev >=0){
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr

    }
    return arr;
}

console.log(insertionSort([10,4,3,4,2,6]));
console.log(insertionSort([2,4,3,1,10]), "insertion");
// [2,4,3,1,10] -> [2,4,3,1,10] -> [2, 3, 4,1,10] -> [1,2,3,4,10] ->  [2,4,3,1,10]

function merge(left, right){
    const result =[];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length ){
        if (left[i] < right[j]){
            result.push(left[i])
            i++;

        }
        else {
             result.push(right[j])
             j++;
        }
    }
    return ([...result, ...left.slice(i) , ...right.slice(j)])
}

function mergeSort(arr) {
    if (arr.length == 1) return arr
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right);
}
console.log(mergeSort([10,4,3,4,2,6]), "mergeSort");
console.log(mergeSort([2,4,3,1,10]), "mergeSort");