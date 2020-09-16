/* eslint-disable no-plusplus */
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the factorial function below.
// STEV-CODE
const factorial = (n) => (n > 1 ? n * factorial(n - 1) : n);
// END STEV-CODE

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const result = factorial(n);

  ws.write(`${result}  \n`);

  ws.end();
}
