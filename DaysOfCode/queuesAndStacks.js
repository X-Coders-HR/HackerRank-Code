/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;

process.stdin.on('data', (data) => {
  input_stdin += data;
});

process.stdin.on('end', () => {
  input_stdin_array = input_stdin.split('\n');
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}
// STEV-CODE
class Solution {
  constructor() {
    this.stack = [];
    this.queue = [];
  }

  pushCharacter(char) {
    this.stack.push(char);
  }

  enqueueCharacter(char) {
    this.queue.push(char);
  }

  popCharacter() {
    return this.stack.pop();
  }

  dequeueCharacter() {
    return this.queue.shift();
  }
}
// END STEV-CODE

function main() {
  // read the string s
  const s = readLine();
  const len = s.length;
  // create the Solution class object p
  const obj = new Solution();
  // push/enqueue all the characters of string s to stack
  for (let i = 0; i < len; i++) {
    obj.pushCharacter(s.charAt(i));
    obj.enqueueCharacter(s.charAt(i));
  }

  let isPalindrome = true;
  /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters */

  for (let i = 0; i < len / 2; i++) {
    if (obj.popCharacter() != obj.dequeueCharacter()) {
      isPalindrome = false;
      break;
    }
  }
  // finally print whether string s is palindrome or not

  isPalindrome ? console.log(`The word, ${s}, is a palindrome.`) : console.log(`The word, ${s}, is not a palindrome.`);
}
