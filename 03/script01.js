let fs = require("fs");

const route = fs.readFileSync("./input.txt").toString().split("\n");

let y = 0;
let x = 0;
let count = 0;
while (y < route.length) {
  if (route[y][x] == "#") {
    count++;
  }
  x = x + 3;
  if (x >= route[y].length) {
    x = x % route[y].length;
  }
  y++;
}

console.log(`Count: ${count}`);
