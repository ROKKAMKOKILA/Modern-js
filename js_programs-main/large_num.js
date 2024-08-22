//Write a program that finds the largest number in a given array.
function largeNum(arr){
    let max=arr[0];
    for (let i=0;i<arr.length;i++){
        if(arr[i]> max){
            max=arr[i]
        }
    }
    return max;
}
console.log(largeNum([67,9,56,97,34,14]))