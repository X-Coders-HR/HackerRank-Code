/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;

process.stdin.on('data', (data) => {
  input_stdin += data;
});

process.stdin.on('end', () => {
  input_stdin_array = input_stdin.split('\n');
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  const n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);

  // STEV-CODE
  let numberOfSwaps = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        numberOfSwaps++;
      }
    }
  }

  console.log(`Array is sorted in ${numberOfSwaps} swaps.\nFirst Element: ${a.shift()}\nLast Element: ${a.pop()}`);
  // END STEV-CODE
}
