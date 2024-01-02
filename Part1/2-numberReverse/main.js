

// numbersRevers


// 451
// -451

const numbersRevers=(number)=>{
    const result=number.toString().split("").reverse().join("");
    return parseInt(result) * Math.sign(number);
};


console.log(numbersRevers(451));
console.log(numbersRevers(-451));