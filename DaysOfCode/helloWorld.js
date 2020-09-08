/* eslint-disable no-undef */
function processData(inputString) {
    // This line of code prints the first line of output
    console.log('Hello, World.');

    // Write the second line of output that prints the contents of 'inputString' here.
    // eslint-disable-next-line prefer-const
    let secLine = inputString;
    console.log(secLine);
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
