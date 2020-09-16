/* eslint-disable no-plusplus */

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

// STEV-CODE
function arr2D(arr) {
  const sumArray = Array(16);
  let cont = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      sumArray[cont] = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
                                + arr[i + 1][j + 1]
                    + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      cont++;
    }
  }
  console.log(Math.max(...sumArray));
}
// END STEV-CODE

function main() {
  const arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ').map((arrTemp) => parseInt(arrTemp, 10));
  }
  // STEV-CODE
  arr2D(arr);
  // END STEV-CODE
}
