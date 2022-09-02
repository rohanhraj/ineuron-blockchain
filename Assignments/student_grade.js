"use strict"
let marks = 100

if(marks>100)
    console.log("marks entered exceeds the range \nPlease enter valid marks")

switch(parseInt(marks/10))
{
    case 10:

    case 9: console.log("Your grade is 'S' ")
        break;

    case 8: console.log("Your grade is 'A' ")
        break;
    
    case 7: console.log("Your grade is 'B' ")
        break;
    
    case 6: console.log("Your grade is 'C' ")
        break;

    case 5: console.log("Your grade is 'D' ")
        break;
    
    case 4: console.log("Your grade is 'E' ")
        break;
    
    case 3:
    
    case 2:

    case 1:

    case 0:
        console.log("Student has failed")
        break;
    
    default : console.log("Invalid Marks")
}
