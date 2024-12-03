const input = require("fs").readFileSync("day3/_input.txt", "utf-8");

const regex = /(do|don't)\(\)|mul\((\d{1,3}),(\d{1,3})\)/g;
let sum = 0;
let enabled = true;
let match;

while ((match = regex.exec(input)) !== null) {
    if (match[1] === "do") {
        enabled = true;
    } else if (match[1] === "don't") {
        enabled = false;
    } else if (enabled && match[2] && match[3]) {
        const num1 = parseInt(match[2]);
        const num2 = parseInt(match[3]);
        sum += num1 * num2;
    }
}

console.log(sum);
