

// palindrome


const palindrome=(str)=> {
    const result=str.split("").reverse().join("");
    return result === str;
};



console.log(palindrome("گرگ"));
console.log(palindrome("دود"));
console.log(palindrome("hello world"));
console.log(palindrome("abba"));

