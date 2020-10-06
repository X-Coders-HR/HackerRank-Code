/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
function processData(input) {
  const arrInp = input.split('\n').slice(1, input.split('\n').lenght);

  arrInp.forEach((value) => {
    let sal = 'Prime';
    if (value > 1) {
      for (let i = 2; i * i <= value; i++) {
        if (value % i === 0) sal = 'Not prime';
      }
    } else sal = 'Not prime';

    process.stdout.write(`${sal}\n`);
  });
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
