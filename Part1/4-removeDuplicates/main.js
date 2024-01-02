

// removeDuplicates array item

const arr=[1,1,2,2,3,3,4,5,6,7,8,8,9,10];

const newArray=[];

for (let i=0; i<arr.length; i++){
    if(newArray.indexOf(arr[i])=== -1){
        newArray.push(arr[i])
    }
};

console.log(newArray);

// 2

function removeDuplicates(arr){
const result=arr.filter((item,index) => arr.indexOf(item) === index);
return result;
};

console.log(removeDuplicates([1,1,2,2,3,3,4,5,6,7,8,8,9,10]));


// 3

function removeDuplicates1(arr){
    return Array.from(new Set(arr))
};

console.log(removeDuplicates1([1,1,2,2,3,3,4,5,6,7,8,8,9,10]));


// 4

function removeDuplicates2(arr) {
    return [...new Set(arr)];
};




