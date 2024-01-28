function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('Olenka'));

function palindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(palindrome("aba"));
console.log(palindrome("abc"));

function paired(arr) {
    return pairedNumbers = arr.filter(num => num % 2 === 0).reverse();
    
}

console.log(paired([1, 2, 3, 4, 5, 6]));

function sendsSMS(smsText) {
    if (!smsText || typeof smsText !== 'string') {
        console.log('Please provide a valid SMS text.');
        return;
    }

    let smsLimit = 60;
    let smsCount = Math.ceil(smsText.length / smsLimit);

    console.log(`You need ${smsCount} sms to send text - ${smsText}`);
}

sendsSMS("This package is native ESM and no longer provides a CommonJS export.");


function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    let prefix = " ";
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];

        if (strs.some(str => str[i] !== char)) {
             break;
        }

        prefix += char;
    }

    return prefix;
}
let hasPrefix = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(hasPrefix));

let hasNoPrefix = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(hasNoPrefix));

