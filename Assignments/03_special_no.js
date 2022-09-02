let n = 145

if(n === special_no(n))
{
    console.log("The given number is a special number")
}

else
    console.log("The given number is not a special number")


function  special_no(n)
{
    let sum = 0
    while(n>=1)
    {
        let rem = parseInt(n%10)
        n = parseInt(n/10)
        for(i=rem-1;i>=1;i--)
        {
            rem = rem * i
        }
        sum = sum + rem    
    }
    return sum 

}