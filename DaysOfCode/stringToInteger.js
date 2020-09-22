/* eslint-disable no-restricted-globals */
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
  const S = readLine();

  // STEV-CODE
  console.log(isNaN(Number(S)) ? new Error('Bad String').message : S);
  // END STEV-CODE
}
