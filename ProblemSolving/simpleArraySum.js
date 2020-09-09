/* eslint-disable prefer-const */
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.trim().split('\n').map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

//STEV-CODE
/* Complete the simpleArraySum function below. */
function simpleArraySum(ar) {
  return ar.reduce((a, b) => a + b, 0);
}
//END STEV-CODE

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const ar = readLine().split(' ').map((arTemp) => parseInt(arTemp, 10));

  let result = simpleArraySum(ar);

  ws.write(`${result}\n`);

  ws.end();
}
