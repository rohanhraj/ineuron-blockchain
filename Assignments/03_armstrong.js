"use strict"
let n = 153

if(n === Armstrong_No(n))
    console.log("The given number is Armstrong Number")
else
    console.log("The given number is not Armstrong Number")

function Armstrong_No(n)
{
    let sum = 0
    let cube
    while(n>=1)
    {
        let rem = parseInt(n%10)
        n =  parseInt(n/10)
        cube = rem*rem*rem
        sum = sum + cube
    }
    return sum
}