/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable no-control-regex */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
let _input = '';
const _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
  _input = _input.split(new RegExp('\n'));
  main();
});
function readLine() { return _input[_index++]; }

/* *** Ignore above this line. *** */

class Book {
  constructor(title, author) {
    if (this.constructor === Book) {
      throw new TypeError('Do not attempt to directly instantiate an abstract class.');
    } else {
      this.title = title;
      this.author = author;
    }
  }

  display() {
    console.log('Implement the \'display\' method!');
  }
}

// Declare your class here.
class MyBook extends Book {
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }

  display() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`);
  }
}
// End class

function main() {
  const title = readLine();
  const author = readLine();
  const price = +readLine();

  const book = new MyBook(title, author, price);
  book.display();
}
