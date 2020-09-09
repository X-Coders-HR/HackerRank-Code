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

//END STEV-CODE
function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  return a + b;
}
//END STEV-CODE
