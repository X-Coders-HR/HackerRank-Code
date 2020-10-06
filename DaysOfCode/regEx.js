/* eslint-disable array-callback-return */
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

function order(emailList) {
  const list = (emailList.split('\n')).slice(0, (emailList.split('\n')).length - 1).sort();

  list.map((val) => {
    const [name, email] = val.split(',');

    if (name.search(/[a-z]/g) !== -1 && name.length <= 20) {
      if (email.search(/[a-z]@gmail.com/g) !== -1 && email.length <= 50) {
        process.stdout.write(`${name}\n`);
      }
    }
  });
}

function main() {
  const N = parseInt(readLine(), 10);
  let emailTbl = '';

  for (let NItr = 0; NItr < N; NItr++) {
    const firstNameEmailID = readLine().split(' ');

    emailTbl += `${firstNameEmailID}\n`;
  }

  order(emailTbl);
}
