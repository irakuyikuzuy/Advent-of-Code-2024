const input = require("fs").readFileSync("day1/_input.txt", "utf-8");

const [leftList, rightList] = input
    .trim()
    .split("\n")
    .map((line) => line.split(/\s+/).map(Number))
    .reduce(
        (acc, [left, right]) => {
            acc[0].push(left);
            acc[1].push(right);
            return acc;
        },
        [[], []]
    );

let sum = 0;

leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

function zip(a, b) {
    return a.map((k, i) => [k, b[i]]);
}

for (let [a, b] of zip(leftList, rightList)) {
    sum += Math.abs(a - b);
}

console.log(sum);
