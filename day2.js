function reverse(str){
    return str.split('').reverse().join('');
}
console.log(reverse('Olenka'));

function palindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(palindrome("aba")); 
console.log(palindrome("abc")); 

function paired(arr) {
    let pairedNumbers = arr.filter(num => num % 2 === 0);
    return pairedNumbers.reverse();
}

console.log(paired([1, 2, 3, 4, 5, 6]));