function sumOfEvenNumbersUpTo(number) {
    let sum = 0;
    let i = 2;
    while(i <= number) {
        sum += i;
        i += 2;
    }
    return sum;
}

let number = 6;
console.log(sumOfEvenNumbersUpTo(number));