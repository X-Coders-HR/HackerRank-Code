/* eslint-disable no-plusplus */
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

function main() {
  const n = parseInt(readLine(), 10);

  // STEV-CODE
  const arrN = n.toString(2).split('0'); // separa los valores del array por cero, cuando hay repetidos quedan juntos

  // ... = Operador de propagacion, itera todos los valores del array.
  // Obtiene el mayor del nuevo array, o sea la mayor cantidad de unos juntos
  const max = Math.max(...arrN);

  console.log(max.toString().length); // convierte el max a string y cuenta los caracteres
  // END STEV-CODE
}
