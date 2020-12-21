let fs = require("fs");

const input = fs
    .readFileSync("./input.txt")
    .toString()
    .split(/\r\n|\n|\r/);


const bags = new Set([])

const findThis = "shiny gold"

const countBags = bagColor => {

    input.find(rule => {
        let [containing, contains] = rule.split("contain")

        containing = containing.split("bags")[0]


        if (contains.includes(bagColor)) {

            let [x, number, bag] = contains.split(/(\d+)/)

            bags.add(containing)
            countBags(containing)
        }
    })

}

countBags(findThis)
console.log(`${bags.size}`)