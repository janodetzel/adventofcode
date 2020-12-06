let fs = require("fs");

const boardingPasses = fs.readFileSync("./input.txt").toString().split(/\r?\n/);

let result = 0;


const decode = boardingPasses => {

    boardingPasses.forEach(element => {
        const rows = [0, 127];
        const cols = [0, 7];

        [...element].splice(0, 7).forEach(char => {
            getPos(char, rows)
        });

        [...element].splice(7).forEach(char => {
            getPos(char, cols)
        })

        const seatId = getSeatID(rows[0], cols[0])

        result < seatId && (result = seatId);
    });
}


const getPos = (char, arr) => {
    switch (char) {
        case "F":
        case "L":
            arr[1] = arr[1] - Math.round((arr[1] - arr[0]) / 2)
            break;
        case "B":
        case "R":
            arr[0] = arr[0] + Math.round((arr[1] - arr[0]) / 2)
            break;
        default:
            break;
    }
}

const getSeatID = (row, col) => {
    return row * 8 + col
}

decode(boardingPasses)

console.log(result)