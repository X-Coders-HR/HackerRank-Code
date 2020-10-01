/* eslint-disable no-undef */
// STEV-CODE
function processData(input) {
  const [actual, expec] = input.split('\n').map((val) => {
    const [day, month, year] = val.split(' ').map(Number);
    return { day, month, year };
  });

  const y = (actual.year - expec.year) !== 0 ? actual.year - expec.year : 0;
  const m = (actual.month - expec.month) >= 1 ? actual.month - expec.month : 0;
  const d = (actual.day - expec.day) >= 1 ? actual.day - expec.day : 0;

  if (d >= 27 && m >= 11) {
    process.stdout.write(String(0));
  } else if (d >= 27 && m >= 11 && y === -1) {
    process.stdout.write(String(0));
  } else if (d > 0 && m === 0 && y === 0) {
    process.stdout.write(String(d * 15));
  } else if (m > 0 && y === 0) {
    process.stdout.write(String(m * 500));
  } else if (y >= 1) {
    process.stdout.write(String(10000));
  } else {
    process.stdout.write(String(0));
  }
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
