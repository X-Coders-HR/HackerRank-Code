/* eslint-disable camelcase */
/* eslint-disable prefer-const */
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map((str) => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine += 1];
}

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    let meal = parseFloat(meal_cost).toFixed(2);
    let totTip = (meal * (parseFloat(tip_percent) / 100)).toFixed(2);
    let totTax = (meal * (parseFloat(tax_percent) / 100)).toFixed(2);
    let resul = Math.round(parseFloat(meal) + parseFloat(totTip) + parseFloat(totTax));

    return console.log(resul);
}

function main() {
    const meal_cost = parseFloat(readLine());
    const tip_percent = parseInt(readLine(), 10);
    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
