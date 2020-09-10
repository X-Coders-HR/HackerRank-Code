/* eslint-disable no-plusplus */
/* eslint-disable prefer-spread */
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

function main() {
  const n = parseInt(readLine(), 10);

  // STEV-CODE
  console.log(((Array.apply(null, Array(10)))
    .map((_x, i) => `${n} x ${i + 1} = ${n * (i + 1)}`)).join(' \n'));
  // END STEV-CODE
}
