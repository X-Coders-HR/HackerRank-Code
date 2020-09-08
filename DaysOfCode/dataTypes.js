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
  const firtsValue = 4;
  const secValue = 4.0;
  const thirdValue = 'HackerRank ';

  // Read and save an integer, double, and String to your variables.
  const firtsReadLine = parseInt(readLine());
  const secReadLine = parseFloat(readLine());
  const thirdReadLine = readLine();

  // Print the sum of both integer variables on a new line.
  console.log(firtsReadLine + firtsValue);

  // Print the sum of the double variables on a new line.
  console.log((secReadLine + secValue).toFixed(1));

  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(thirdValue + thirdReadLine);
}
