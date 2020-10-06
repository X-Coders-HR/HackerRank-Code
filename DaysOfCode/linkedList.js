/* eslint-disable radix */
/* eslint-disable max-classes-per-file */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
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
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// STEV-CODE
class Solution {
  constructor() {
    // inserta elementos en una lista en memoria de la clase Node
  // se inserta al azar, se ordena al ligar el elemento con el siguiente
  // cuando el siguiente es null es porque es el ultimo.
    this.insert = (head, data) => {
      const node = new Node(data); // crea un nodo con el dato del parametro
      let current; // guarda los nodos (si existen)
      let linkedHeads = head; // guarda el estado actual de la lista enlazada

      // cuando es el primer elemento que se agrega a la lista
      if (linkedHeads == null) {
        linkedHeads = node;
      } else {
        // si no es el primero guarda todos los nodos existentes en current
        current = linkedHeads;
        // itera todos los nodos hasta que obtenga el current.next = false
        // o sea el ultimo nodo
        while (current.next) {
          current = current.next;
        }
        // agrega el nodo a la ultima posicion
        current.next = node;
      }
      return linkedHeads; // retorna la lista enlazada pero con el nuevo elemento de ultimo.
    };

    this.display = (head) => {
      let start = head;
      while (start) {
        process.stdout.write(`${start.data} `);
        start = start.next;
      }
    };
  }
}
// END STEV-CODE

function main() {
  const T = parseInt(readLine());
  let head = null;
  const mylist = new Solution();
  for (let i = 0; i < T; i++) {
    const data = parseInt(readLine());
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}
