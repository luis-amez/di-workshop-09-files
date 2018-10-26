// Part 1

const fs = require('fs');

const fileContents = fs.readFileSync('names.txt', 'utf-8');
const reversedContents = fileContents.split("\n").reverse().join("\n");

console.log(reversedContents);

fs.writeFileSync('names-reversed.txt', reversedContents, 'utf-8');
