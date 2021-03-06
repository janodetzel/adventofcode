let fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(/\n\s*\n/);

const getAnswers = (groups) => {
  let result = 0;

  groups.forEach((group) => {
    let answers = new Set();

    group.split(/\r?\n/).forEach((person) => {
      [...person].forEach((answer) => {
        answers.add(answer);
      });
    });

    result = result + answers.size;
  });

  return result;
};

console.log(getAnswers(input));
