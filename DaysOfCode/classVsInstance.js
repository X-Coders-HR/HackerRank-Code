/* eslint-disable prefer-const */
/* eslint-disable radix */

let inputStdin = '';
let inputStdinArray = '';
let inputCurrentline = 0;

process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', (data) => {
    inputStdin += data;
});

process.stdin.on('end', () => {
    inputStdinArray = inputStdin.split('\n');
    main();
});

function readLine() {
    return inputStdinArray[inputCurrentline += 1];
}

function Person(initialAge) {
    let age = 0;
    // Add some more code to run some checks on initialAge
    if (initialAge < 0) {
        console.log('Age is not valid, setting age to 0.');
        age = 0;
    } else {
        age = initialAge;
    }
    this.amIOld = () => {
        // Do some computations in here and print out the correct statement to the console
        if (age < 13) {
            return console.log('You are young.');
        }
        if (age >= 13 && age < 18) {
            return console.log('You are a teenager.');
        }
        return console.log('You are old.');
    };
    this.yearPasses = () => {
        // Increment the age of the person in here
        age += 1;
    };
}

function main() {
    let T = parseInt(readLine());
    for (let i = 0; i < T; i += 1) {
        let age = parseInt(readLine());
        const p = new Person(age);
        p.amIOld();
        for (let j = 0; j < 3; j += 1) {
            p.yearPasses();
        }
        p.amIOld();
        console.log('');
    }
}
