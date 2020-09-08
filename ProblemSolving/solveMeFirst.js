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
    // eslint-disable-next-line no-undef
    main();
});

// eslint-disable-next-line no-unused-vars
function readLine() {
    return inputStdinArray[inputCurrentline += 1];
}

// eslint-disable-next-line no-unused-vars
function solveMeFirst(a, b) {
    // Hint: Type return a+b below
    return a + b;
}
