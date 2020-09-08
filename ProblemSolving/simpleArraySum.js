/* eslint-disable prefer-const */
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map((str) => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine += 1];
}

/* Complete the simpleArraySum function below. */
function simpleArraySum(ar) {
    let result = 0;

    for (let i = 0; i < ar.length; i += 1) {
        result += ar[i];
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const ar = readLine().split(' ').map((arTemp) => parseInt(arTemp, 10));

    let result = simpleArraySum(ar);

    ws.write(`${result}\n`);

    ws.end();
}
