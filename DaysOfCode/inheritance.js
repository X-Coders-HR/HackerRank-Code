/* eslint-disable consistent-return */
/* eslint-disable no-control-regex */
/* eslint-disable no-const-assign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-plusplus */

const _input = '';
const _index = 0;
process.stdin.on('data', (data) => { (_input) += data; });
process.stdin.on('end', () => {
  _input = _input.split(new RegExp('[ \n]+'));
  main();
});
function read() { return _input[_index++]; }

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      `Name: ${this.lastName}, ${this.firstName
      }\nID: ${this.idNumber}`,
    );
  }
}

// STEV-CODE
class Student extends Person {
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }

  calculate() {
    const prom = (this.scores.reduce((acum, val) => acum + val)) / (this.scores.length);
    if (prom >= 90 && prom <= 100) return 'O';
    if (prom >= 80 && prom < 90) return 'E';
    if (prom >= 70 && prom < 80) return 'A';
    if (prom >= 55 && prom < 70) return 'P';
    if (prom >= 40 && prom < 55) return 'D';
    if (prom < 40) return 'T';
  }
}
// END STEV-CODE

function main() {
  const firstName = read();
  const lastName = read();
  const id = +read();
  const numScores = +read();
  const testScores = new Array(numScores);

  for (let i = 0; i < numScores; i++) {
    testScores[i] = +read();
  }

  const s = new Student(firstName, lastName, id, testScores);
  s.printPerson();
  s.calculate();
  console.log(`Grade: ${s.calculate()}`);
}
