let fs = require("fs");

const route = fs.readFileSync("./input.txt").toString().split("\n");

let y = 0;
let x = 0;
let count = 0;
while (y < route.length) {
  if (route[y][x] == "#") {
    count++;
  }
  x = x + 1;
  if (x >= route[y].length) {
    x = x % route[y].length;
  }
  y = y + 2;
}

let mult = 178 * 78 * 75 * 86 * 39;
// let slopes = [
//   {
//     c: 0,
//     x: 0,
//     y: 0,
//     moveY: () => this.y++,
//     moveX: () => (this.x = this.x + 1),
//     oneUp: () => (this.c = this.c + 1),
//   },
// ];

// slopes.forEach((slope) => {
//   while (slope.y < route.length) {
//     // if (route[slope.y][slope.x] == "#") {
//     //   slope.oneUp();
//     // }

//     console.log("He " + slope.y);

//     slope.moveY();
//     // slope.moveX();

//     // if (slope.x >= route[slope.y].length) {
//     //   slope.x = slope.x % route[slope.y].length;
//     // }
//   }
// });

console.log(`Count: ${count}`);
