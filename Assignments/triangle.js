
function checkTriangle(s1,s2,s3)
{
    if(s1===s2 && s2 === s3)
        console.log("The triangle is equilateral")

    else if(s1===s2 || s2 === s3 || s1===s3)
        console.log("The triangle is isosceles")

    else
        console.log("The triangle is scalene")
}

let s1 = 8, s2 = 10, s3 = 15
checkTriangle(s1,s2,s3)