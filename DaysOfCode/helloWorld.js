/* eslint-disable no-undef */
function processData(inputString) {
  // STEV-CODE
  // This line of code prints the first line of output
  console.log('Hello, World.');

  // Write the second line of output that prints the contents of 'inputString' here.
  const secLine = inputString;
  console.log(secLine);
  // END STEV-CODE
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', (input) => {
  _input += input;
});

process.stdin.on('end', () => {
  processData(_input);
});
