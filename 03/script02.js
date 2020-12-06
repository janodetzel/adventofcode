let fs = require("fs");

const route = fs.readFileSync("./input.txt").toString().split(/\r?\n/);

let result = 1;

let slopes = [
  {
    c: 0,
    x: 0,
    y: 0,
    moveY() { this.y = this.y + 1 },
    moveX() { this.x = this.x + 1 },
    tree() { this.c++ }
  },
  {
    c: 0,
    x: 0,
    y: 0,
    moveY() { this.y = this.y + 1 },
    moveX() { this.x = this.x + 3 },
    tree() { this.c++ }
  },
  {
    c: 0,
    x: 0,
    y: 0,
    moveY() { this.y = this.y + 1 },
    moveX() { this.x = this.x + 5 },
    tree() { this.c++ }
  },
  {
    c: 0,
    x: 0,
    y: 0,
    moveY() { this.y = this.y + 1 },
    moveX() { this.x = this.x + 7 },
    tree() { this.c++ }
  },
  {
    c: 0,
    x: 0,
    y: 0,
    moveY() { this.y = this.y + 2 },
    moveX() { this.x = this.x + 1 },
    tree() { this.c++ }
  },
];

slopes.forEach((slope) => {
  while (slope.y < route.length) {
    if (route[slope.y][slope.x] == "#") {
      slope.tree();
    }

    slope.moveX();

    if (slope.x >= 31) {
      slope.x = slope.x % 31;
    }
    slope.moveY();
  }
  console.log(`🎄 Hit: ${slope.c}`)
  result = result * slope.c
});

console.log(`Multiplied: ${result}`);