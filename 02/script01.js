let fs = require("fs");

const passwords = fs.readFileSync("./input.txt").toString().split("\n");

let count = 0;

passwords.forEach((elem) => {
  let [minMax, char, pwd] = elem.split(" ");

  let [min, max] = minMax.split("-");

  char = char.split(":")[0];

  let result = pwd.match(new RegExp(char, "g")) || [];

  if (result.length >= min && result.length <= max) {
    count++;
  }
});

console.log("Count: " + count);
