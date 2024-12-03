const input = require("fs").readFileSync("day3/_input.txt", "utf-8");

const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
let match;
let sum = 0;

while ((match = regex.exec(input)) !== null) {
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[2]);
    sum += num1 * num2;
}

console.log(sum);
