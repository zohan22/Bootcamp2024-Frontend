/*
Write a JS program to remove duplicates in an array.
Sample: let arr2 = [7,9,1,'a','a','f',9,4,2,'d','d']
Output: [7,1,'f',4,2]
*/

const arr2 = [7,9,1,'a','a','f',9,4,2,'d','d'];
const duplicates = arr2.filter((element, index, array) => {
    return array.indexOf(element) === index && array.lastIndexOf(element) === index;
});

console.log(duplicates);