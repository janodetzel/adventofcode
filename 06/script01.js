let fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split(/\n\s*\n/);

let result = 0

input.forEach(group => {
    let intersected = []
    let persons = []

    group.split(/\r?\n/).forEach(person => {
        let answers = [];
        [...person].forEach(answer => {
            answers.push(answer)
        })
        persons.push(answers)
    })

    intersected = persons.reduce((a, b) => a.filter(c => b.includes(c)))
    console.log(persons)
    console.log("intersec: " + intersected.length)

    result = result + intersected.length

})

console.log(result)