let fs = require("fs");

const passwords = fs.readFileSync("./input.txt").toString().split("\n");

let count = 0;

passwords.forEach((elem) => {
  let [position, char, pwd] = elem.split(" ");

  let [min, max] = position.split("-");

  char = char.split(":")[0];

  if (
    (pwd[min - 1] == char && !(pwd[max - 1] == char)) ||
    (pwd[max - 1] == char && !(pwd[min - 1] == char))
  ) {
    count++;
  }
});

console.log("Count: " + count);
