// Write a JS program to the smallest number in the array
// Sample: let arr1 = [12,6,10,2,45,100] ----- Output: 2

const array = [12,6,10,2,45,100];

const smallestNumber = array.reduce((acc, cur) => {
    return acc < cur ? acc : cur;
}, array[0])

console.log(smallestNumber);