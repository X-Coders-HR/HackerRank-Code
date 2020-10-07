/* eslint-disable no-unused-expressions */
/* eslint-disable no-bitwise */
/* eslint-disable no-restricted-syntax */
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

function covertToObj(list) {
  const arrList = (list.split('\n')).slice(0, (list.split('\n')).length - 1);

  const process = arrList.map((val) => {
    const [n, k] = val.split(',').map(Number);
    return { n, k };
  });

  return process;
}

function bitwise(list) {
  const process = covertToObj(list);

  process.forEach((val) => {
    const array = Array.from({ length: val.n }).map((_elem, i) => i + 1);
    let maxVal = 0;
    for (const a of array) {
      for (const b of array) {
        if (a < b) {
          const temp = a & b;
          temp > maxVal && temp < val.k ? maxVal = temp : false;
        }
      }
    }
    console.log(maxVal);
  });
}

function main() {
  const t = parseInt(readLine(), 10);
  let arr = [];

  for (let tItr = 0; tItr < t; tItr++) {
    arr += `${readLine().split(' ')}\n`;
  }

  bitwise(arr);
}
