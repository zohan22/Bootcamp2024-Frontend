function sum(a, b=2) {
    return a + b;
}

const sum1 = function(a, b) { return a + b; }
const sum2 = (a,b) => { return a + b; }
const sum3 = (a,b) => a + b; 

const square = (x) => Math.pow(x,2);
console.log(square(4));

function square1(x) {
    return x*x;
}
console.log(square1(4));

const items = [1,2,3,4,5]

console.log(items.map(square1));

console.log(items.map(item => square(item)));