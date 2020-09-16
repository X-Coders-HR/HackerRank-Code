/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
// STEV-CODE
function processData(input) {
  // Enter your code here
  // .split() convierte en un array dividido por el caracter que se adjunta

  const arrInput = input.split('\n'); // convierto el input a un array
  const n = parseInt(arrInput[0], 10); // tomo el valor total de directorios que van a entrar
  const arrPhoneBook = arrInput.slice(1, n + 1); // tomo todos los directorios (n+1 por el espacio)
  const arrQuerys = arrInput.slice(n + 1); // tomo los querys

  const phoneBook = arrPhoneBook.reduce((acum, values) => {
    const [name, phone] = values.split(' '); // crea un array de objetos con formato name,phone ej: sam,99912222
    acum[name] = phone; // lo guarda en formato - acum[Key] = Value - en el array de salida
    return acum;
  }, {});

  arrQuerys.forEach((name) => {
    const phoneNumber = phoneBook[name];

    if (phoneNumber) {
      console.log(`${name}=${phoneNumber}`);
    } else {
      console.log('Not found');
    }
  });
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
