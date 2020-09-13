/* eslint-disable no-undef */
// STEV-CODE
function processData(input) {
  // Enter your code here
  const newInput = input.split('\n');
  const wordValues = (Array.prototype.map).call(newInput, (word) => word);
  wordValues.shift();

  const oddAndCoupe = wordValues.map((i) => {
    const arr = (Array.prototype.map).call(i, (char) => char);
    const salOdd = arr.map((char, index) => {
      let odd = '';
      if (index % 2 === 0) {
        odd += char;
      }
      return odd;
    });

    const salCoupe = arr.map((char, index) => {
      let coupe = '';
      if (index % 2 !== 0) {
        coupe += char;
      }
      return coupe;
    });

    return `${salOdd.join('')} ${salCoupe.join('')} `;
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
