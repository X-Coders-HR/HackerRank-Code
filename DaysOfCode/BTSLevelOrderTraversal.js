/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);
      return this.root;
    }
    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else if (root.right) {
      this.insert(root.right, data);
    } else {
      root.right = new Node(data);
    }

    return this.root;
  };
  // Start of function levelOrder
  this.levelOrder = function (root) {
    const queue = [root];
    const result = [];

    while (queue.length) { // mientras que la lista tenga elementos
      let treeNode = queue.shift(); // quita el primero de la lista

      result.push(treeNode.data);

      treeNode.left && queue.push(treeNode.left); // si el nodo izq existe agreguelo
      treeNode.right && queue.push(treeNode.right); // si el nodo der existe agreguelo
    }

    console.log(result.join(' '));
  }; // End of function levelOrder
} // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = '';

process.stdin.on('data', (data) => {
  _input += data;
});

process.stdin.on('end', () => {
  let tree = new BinarySearchTree();
  let root = null;

  let values = _input.split('\n').map(Number);

  for (let i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  tree.levelOrder(root);
});
