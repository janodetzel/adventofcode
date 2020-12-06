let fs = require("fs");

const arr = fs.readFileSync("./input.txt").toString().split("\n");

arr.forEach((val1) => {
  arr.forEach((val2) => {
    arr.forEach((val3) => {
      let result = Number(val1) + Number(val2) + Number(val3);
      if (result == 2020) {
        console.log(`${val1} + ${val2} + ${val3}`);
        console.log(
          `Multiplicated ${Number(val1) * Number(val2) * Number(val3)}`
        );
        return;
      }
    });
    return;
  });
  return;
});
