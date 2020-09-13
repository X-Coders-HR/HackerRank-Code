/* eslint-disable no-undef */
// STEV-CODE
function processData(input) {
  // Enter your code here
  const arrInput = input.split('\n');
  arrInput.shift();

  const oddAndCoupe = arrInput.map((i) => {
    const salOdd = (Array.from(i)).map((char, index) => (index % 2 === 0 ? char : ''));
    const salCoupe = (Array.from(i)).map((char, index) => (index % 2 !== 0 ? char : ''));
    return `${salOdd.join('')} ${salCoupe.join('')}`;
  });

  console.log(oddAndCoupe.join('\n'));
}
// END STEV-CODE

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', (input) => {
  _input += input;
});

process.stdin.on('end', () => {
  processData(_input);
});
