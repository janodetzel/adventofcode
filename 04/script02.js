let fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().split("\n\n");

const input = fs.readFileSync("./invalid.txt").toString().split("\n\n");

let count = 0;

const complete = (passport) => {
  return (
    passport.includes("byr") &&
    passport.includes("iyr") &&
    passport.includes("eyr") &&
    passport.includes("hgt") &&
    passport.includes("hcl") &&
    passport.includes("ecl") &&
    passport.includes("pid")
  );
};

const validate = (passport) => {
  let valid = true;
  const splitPassport = passport.replace(/(\r\n|\n|\r)/gm, " ").split(" ");

  splitPassport.forEach((credential) => {
    const splitCredential = credential.split(":");

    if (checkValue(splitCredential) == false) {
      valid = false;
    }

    console.log(
      `Check ${splitCredential}, ${
        checkValue(splitCredential) ? "valid" : "invalid"
      }`
    );
  });
  console.log(`Passport is ${valid ? "valid" : "invalid"}`);
  console.log("\n");
  return valid;
};

const checkValue = ([key, value]) => {
  switch (key) {
    case "byr": {
      return value.length == 4 && value > 1920 && value < 2002;
    }
    case "iyr": {
      return value.length == 4 && value > 2010 && value < 2020;
    }
    case "eyr": {
      return value.length == 4 && value > 2020 && value < 2030;
    }
    case "hgt": {
      const [r, hgt, unit] = value.split(/([0-9]+)/);
      switch (unit) {
        case "cm": {
          return hgt > 150 && hgt < 193;
        }
        case "in": {
          return hgt > 59 && hgt < 76;
        }
      }
    }
    case "hcl": {
      const re = new RegExp(/#([0-9a-f]{6})/);
      return re.test(value);
    }
    case "ecl": {
      const ecls = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
      if (ecls.some((v) => value.includes(v))) {
        return true;
      }
    }
    case "pid": {
      const re = new RegExp("^\\d{9}$");
      return re.test(value);
    }
    case "cid": {
      return true;
    }
  }
};

input.forEach((passport) => {
  if (complete(passport) && validate(passport)) {
    count++;
  }
});

console.log(`Count: ${count}`);
