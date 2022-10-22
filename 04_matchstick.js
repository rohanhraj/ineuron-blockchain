const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter the step to find number of matchsticks = "));

console.log("The number of matchsticks in that step is :" + matchstick(n));

function matchstick(n)
{
    let ans;
    ans = 6*n - (n-1);
    return ans;
}