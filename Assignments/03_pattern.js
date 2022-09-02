
let count = 0
for (row = 1; row <= 4; row++) {
    for (col = 1; col <= row; col++) {
        count++
        process.stdout.write(count + " ")
    }
    console.log("")
}