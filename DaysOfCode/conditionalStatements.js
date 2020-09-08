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

function main() {
    const N = parseInt(readLine(), 10);

    /* El operador restante (%) devuelve el resto que queda
    cuando un operando se divide por un segundo operando. */

    if (N >= 2 && N <= 5 && N % 2 === 0) {
        console.log('Not Weird');
    } else if (N >= 6 && N <= 20 && N % 2 === 0) {
        console.log('Weird');
    } else if (N > 20 && N % 2 === 0) {
        console.log('Not Weird');
    } else {
        console.log('Weird');
    }
}
