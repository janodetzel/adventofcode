let fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n\n");

let count = 0;

const validate = (pwd) => {
  return (
    pwd.includes("byr") &&
    pwd.includes("iyr") &&
    pwd.includes("eyr") &&
    pwd.includes("hgt") &&
    pwd.includes("hcl") &&
    pwd.includes("ecl") &&
    pwd.includes("pid")
  );
};

input.forEach((pwd, index) => {
  if (validate(pwd)) {
    count++;
  }
});

console.log(`Count: ${count}`);
