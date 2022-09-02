let sum =0
for( i=1;i<=1000;i++)
{
    if(i%3===0 && i%5===0)
    {
        sum = sum+i;
    }
}
console.log(sum);

//if number is both divisible by 3 and 5 then it is divisible by 15
// hence it is same as sum of multiples of 15 less than 1000

