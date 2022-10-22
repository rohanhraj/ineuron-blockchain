
const prompt = require("prompt-sync")();

let arr = [3,45,6,7,23,5,7,8];
let n = parseInt(prompt("Enter the number n to find the nth largest number in the array"));

console.log("The nth largest number is :" +find_largest(arr,n));

function find_largest(arr,n)
{   
    arr.sort(compare = (a,b) => b-a);
    
    return arr[n-1];
}