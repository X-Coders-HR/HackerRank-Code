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
  return inputString[currentLine += 1];
}

function main() {
  const n = parseInt(readLine(), 10);
  const result = [];

  for (let i = 1; i <= 10; i += 1) {
    result[i] = `${n} x ${i} = ${n * i}`;
  }

  for (let r = 1; r < result.length; r += 1) {
    console.log(result[r]);
  }
}
