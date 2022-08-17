let year = 1995;
if(year%4 === 0)
{
    if(year%100===0){
        if(year%400===0)
        {
            console.log("The given year is leap year");
        }
        else
            console.log("The given year is not leap year");
    }
    else
        console.log("The given year is leap year");   
}
else{
    console.log("The given year is not a leap year");
}