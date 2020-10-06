/* eslint-disable no-throw-literal */
/* eslint-disable no-restricted-properties */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
process.stdin.resume();
process.stdin.setEncoding('ascii');

let inputStdin = '';
let inputStdinArray = '';
let inputCurrentline = 0;

process.stdin.on('data', (data) => {
  inputStdin += data;
});

process.stdin.on('end', () => {
  inputStdinArray = inputStdin.split('\n');
  main();
});
function readLine() {
  return inputStdinArray[inputCurrentline++];
}

// STEV-CODE
class Calculator {
  power(n, p) {
    if (n < 0 || p < 0) {
      throw 'n and p should be non-negative';
    }
    return Math.pow(n, p);
  }
}
// END STEV-CODE

function main() {
  const myCalculator = new Calculator();
  let T = parseInt(readLine());
  while (T-- > 0) {
    const num = (readLine().split(' '));
    try {
      const n = parseInt(num[0]);
      const p = parseInt(num[1]);
      const ans = myCalculator.power(n, p);
      console.log(ans);
    } catch (e) {
      console.log(e);
    }
  }
}
