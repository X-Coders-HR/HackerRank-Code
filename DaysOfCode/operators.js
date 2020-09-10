/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
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

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  // STEV-CODE
  const porc = (tot, proc) => (tot.toFixed(2)) * (proc.toFixed(2)) / 100;

  const totTip = (porc(meal_cost, tip_percent));
  const totTax = (porc(meal_cost, tax_percent));
  const resul = Math.round(meal_cost + totTip + totTax);

  console.log(resul);
  // END STEV-CODE
}

function main() {
  const meal_cost = parseFloat(readLine());
  const tip_percent = parseInt(readLine(), 10);
  const tax_percent = parseInt(readLine(), 10);

  solve(meal_cost, tip_percent, tax_percent);
}
