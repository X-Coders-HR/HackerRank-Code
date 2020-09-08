/* eslint-disable prefer-const */
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

// Reads complete line from STDIN
function readLine() {
    return inputStdinArray[inputCurrentline += 1];
}

function main() {
    const i = 4;
    const d = 4.0;
    const s = 'HackerRank';

    // Declare second integer, double, and String variables.
    let secI;
    let secD;
    let secS;

    // Read and save an integer, double, and String to your variables.
    secI = parseInt(readLine());
    secD = parseFloat(readLine());
    secS = readLine();

    // Print the sum of both integer variables on a new line.
    console.log(secI + i);

    // Print the sum of the double variables on a new line.
    console.log((secD + d).toFixed(1));

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secS);
}
