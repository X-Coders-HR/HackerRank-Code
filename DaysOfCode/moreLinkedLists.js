/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
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
function Node(data) {
  this.data = data;
  this.next = null;
}
function Solution() {
  this.removeDuplicates = function (head) {
    // Write your code here
    let current = head;
    let after;

    while (current) {
      after = current.next;
      if (current.next && current.data === after.data) current.next = after.next;
      else current = after;
    }
    return head;
  };

  this.insert = function (head, data) {
    const p = new Node(data);
    if (head === null) {
      head = p;
    } else if (head.next === null) {
      head.next = p;
    } else {
      let start = head;
      while (start.next != null) {
        start = start.next;
      }
      start.next = p;
    }
    return head;
  };

  this.display = function (head) {
    let start = head;
    while (start) {
      process.stdout.write(`${start.data} `);
      start = start.next;
    }
  };
}
function main() {
  const T = parseInt(readLine());
  let head = null;
  const mylist = new Solution();
  for (let i = 0; i < T; i++) {
    const data = parseInt(readLine());
    head = mylist.insert(head, data);
  }
  head = mylist.removeDuplicates(head);
  mylist.display(head);
}
