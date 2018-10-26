// Part 1

const fs = require('fs');

const fileContents = fs.readFileSync('names.txt', 'utf-8');
const arrayOfNames = fileContents.split("\n");
// slice for not mutate original array
const reversedContents = arrayOfNames.slice().reverse().join("\n");

console.log(reversedContents);

fs.writeFileSync('names-reversed.txt', reversedContents, 'utf-8');

// Part 1 Challenge

arrayOfNames.forEach((name, i) => {
  let reversedName = name.split("").reverse().join("");
  fs.writeFileSync(`${name}-${i}.txt`, reversedName, 'utf-8');
});
