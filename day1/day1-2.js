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

const count = leftList
    .map((a) => rightList.reduce((cnt, e) => cnt + (a === e), 0) * a)
    .reduce((cnt, e) => cnt + e, 0);

console.log(count);
