let fs = require("fs");

const boardingPasses = fs.readFileSync("./input.txt").toString().split(/\r?\n/);

let allSeats = []
let bookedSeats = []

const getAllSeats = (rows, cols) => {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            allSeats.push(getSeatID(row, col))
        }
    }
}

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

        bookedSeats.push(seatId)
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

const getDiff = (allSeats, bookedSeats) => {
    return (
        allSeats.filter(seat => !bookedSeats.includes(seat)).concat(bookedSeats.filter(seat => !allSeats.includes(seat)))
    )
}

const findSeat = () => {
    const availableSeats = getDiff(allSeats, bookedSeats)

    availableSeats.forEach((seat, index) => {
        if (allSeats.includes(seat - 1) && allSeats.includes(seat + 1) && seat > 100 && seat < 900)
            console.log(`Your seat ${seat} is between seat ${seat - 1} and seat ${seat + 1} `)

    })
}

getAllSeats(128, 8)
decode(boardingPasses)

findSeat()

