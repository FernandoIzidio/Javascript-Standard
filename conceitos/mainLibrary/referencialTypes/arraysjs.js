/*

CallBack - É uma função que vai ser chamada para cada elemento de um iterable

Array é uma extrutura de dados iterable, de tipo primitivo referencial

Metódos de mutação:
    push(element,...) - Adiciona um ou mais elementos ao final da lista
    pop() - Remove ultimo elemento da lista
    shift() - Remove primeiro elemento da lista
    unshift(element, ...) - Adiciona um ou mais elementos no inicio da lista
    sort(callback) - Ordena uma lista, pode ordenar por chaves númericas ou por chaves alfabéticas, sort segue a ordem lexicografica
    reverse() - Inverte a ordem de um array
    fill(value, start, end) - Altera os valores do array do start ao end, por um valor padrão value





splice(start, deleteCount, elements, ...)
start: índice no qual a modificação deve começar.
deleteCount: O número de elementos a serem removidos a partir do start.
elements - Novos elementos a serem adicionados a partir de start

Metódos de acesso(Não modificam array original):
    array.concat(arrays, ...) - Retorna novo array, concatenando o array atual, com os arrays que receber de argumento

    slice(start, end) - Retorna uma parte do array, sem modificar array original


    array.join(sep) - Transforma array em string, seperando cada item pelo separador


Comprehension Methods:
    array.map(func) - Passa cada elemento do array para uma função, e recebe cada valor modificado pela função e retorna um novo array

    array.filter(func) - Passa cada elemento do array para dentro da função, e a função vai retornar apenas os valores que corresponderem ao filtro, para assim criar um novo array

    reduce(func) - Passa acumulador e cada elemento da função do array, esse acumulador é recursivo, e mantém o estado, é usado para fazer operações com todos os elementos de uma lista

check methods:
    array.includes(elements) - Verifica de array tem determinado elemento

    array.every(Callback) - É um metódo usado para verificar se todos elementos correspondem a uma confição, all

    array.some(Callback) - É um metódo usado para verificar se tem ao menos um elemento da lista que satisfaz uma condição, any


iterator methods:
    values()  - Retorna um iterator com os valores da lista, equivalente ao dict.values() do python
    keys() - Retorna um iterator com os indices da lista
    entries() - Retorna um iterator de listas de valor e indice, equivalente ao dict.items() do python
*/

let lista = [1, 2, 3];

getRandom = (limit) => {
  var numbers = [];
  for (let index = 0; index < limit; index++) {
    numbers.push(Math.floor(Math.random() * 10));
  }
  return numbers;
};

lista.forEach((valor, pos) => console.log(`${pos} ${valor}`));

console.log(getRandom(10).sort());
console.log(lista);
console.log(lista.concat([123, 487], [45, 11]));
console.log(lista.every((numero) => numero > 1));
console.log(lista.some((numero) => numero > 2));
console.log(lista.includes(1));
lista.unshift(5, 4, 9);
console.log(lista);
lista.pop();
console.log(lista);
lista.push(10);
console.log(lista);
lista.shift();
console.log(lista);
console.log(lista);

const frutas = ["Maçã", "Banana", "Cereja"];
const cores = ["Vermelho", "Amarelo", "Azul"];
const iterator = cores.entries();

for (let [pos, fruta] of frutas.entries()) {
  let [pos2, cor] = iterator.next().value;
  console.log(`${fruta} e ${cor}`);
}
