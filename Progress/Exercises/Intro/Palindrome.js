const isPalindrome = function(chain) {
    let process = chain.toLowerCase().replace(/[^a-z]/g, '');
    console.log(process);
    let reverseChain = process.split("").reverse().join("");
    if(reverseChain === process) {
        return true;
    } else {
        return false;
    }
}

let phrase = "Anita lava la tina";
console.log(isPalindrome(phrase));