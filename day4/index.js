// Anonymous function & IIFE for printing odd numbers in an array
(function(arr) {
    console.log(arr.filter(function(n) { return n % 2 !== 0 }));
})([1,2,3,4,5,6,7,8,9]);

// Convert all the strings to title caps in a string array
(function(arr) {
    console.log(arr.map(function(str) { 
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
    }));
})(["apple", "banana", "cherry"]);

// Sum of all numbers in an array
(function(arr) {
    console.log(arr.reduce(function(acc, val) { return acc + val; }, 0));
})([1,2,3,4,5]);

// Return all the prime numbers in an array
(function(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    console.log(arr.filter(isPrime));
})([1,2,3,4,5,6,7,8,9,10]);

// Return all the palindromes in an array
(function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    console.log(arr.filter(isPalindrome));
})(["level", "hello", "radar", "world"]);

// Return median of two sorted arrays of the same size
(function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a,b) => a-b);
    let mid = merged.length / 2;
    console.log((merged[mid - 1] + merged[mid]) / 2);
})([1,2,3], [4,5,6]);

// Remove duplicates from an array
(function(arr) {
    console.log([...new Set(arr)]);
})([1,2,3,4,4,5,6,6,6]);

// Rotate an array by k times
(function(arr, k) {
    while (k--) {
        arr.unshift(arr.pop());
    }
    console.log(arr);
})([1,2,3,4,5], 2);

// Arrow function for printing odd numbers in an array
let printOdds = arr => arr.filter(n => n % 2 !== 0);
console.log(printOdds([1,2,3,4,5,6,7,8,9]));

// Convert all the strings to title caps in a string array
let toTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(toTitleCaps(["apple", "banana", "cherry"]));

// Sum of all numbers in an array
let sumNumbers = arr => arr.reduce((acc, val) => acc + val, 0);
console.log(sumNumbers([1,2,3,4,5]));

// Return all the prime numbers in an array
let getPrimes = arr => {
    let isPrime = num => {
        if (num <= 1) return false;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    return arr.filter(isPrime);
};
console.log(getPrimes([1,2,3,4,5,6,7,8,9,10]));

// Return all the palindromes in an array
let getPalindromes = arr => {
    let isPalindrome = str => str === str.split('').reverse().join('');
    return arr.filter(isPalindrome);
};
console.log(getPalindromes(["level", "hello", "radar", "world"]));
