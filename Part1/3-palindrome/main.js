

// palindrome


const palindrome=(str)=> {
    const result=str.split("").reverse().join("");
    return result === str;
};



console.log(palindrome("گرگ"));
console.log(palindrome("دود"));
console.log(palindrome("hello world"));
console.log(palindrome("abba"));


const secondWay=(str)=>{
    const result=str.split("").every((char,index)=>{
        return char === str[str.length - index - 1]
    })

    return result;
}

console.log(secondWay("گرگ"));