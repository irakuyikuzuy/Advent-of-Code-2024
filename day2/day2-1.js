const input = require("fs")
    .readFileSync("day2/_input.txt", "utf-8")
    .split("\n")
    .map((v) => v.split(" ").map(Number));

function checkSafety(e = Array) {
    if (e.length < 2) return false;
    let flag = e[0] < e[1] ? 1 : -1;

    for (let i = 0; i < e.length - 1; i++) {
        const diff = e[i + 1] - e[i];
        if (flag > 0 && diff > 0 && diff >= 1 && diff <= 3) {
            continue;
        }
        if (flag < 0 && diff < 0 && diff <= -1 && diff >= -3) {
            continue;
        }
        return false;
    }
    return true;
}

const count = input.reduce((cnt, e) => cnt + checkSafety(e), 0);

console.log(count);