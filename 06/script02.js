let fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(/\n\s*\n/);

const getAnswers = (groups) => {
  let result = 0;

  groups.forEach((group) => {
    let intersected = [];
    let persons = [];

    group.split(/\r?\n/).forEach((person) => {
      let answers = [];
      [...person].forEach((answer) => {
        answers.push(answer);
      });
      persons.push(answers);
    });

    intersected = persons.reduce((a, b) => a.filter((c) => b.includes(c)));

    result = result + intersected.length;
  });

  return result;
};

console.log(getAnswers(input));
