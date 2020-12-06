let fs = require("fs");

const route = fs.readFileSync("./input.txt").toString().split(/\r?\n/);

let y = 0;
let x = 0;
let count = 0;
while (y < route.length) {
  if (route[y][x] == "#") {
    console.log("Tree hit at " + y + " " + x)
    count++;
  }
  x = x + 3;
  if (x >= route[y].length) {
    x = x % route[y].length;
  }
  y++;
}

console.log(`Count: ${count}`);
