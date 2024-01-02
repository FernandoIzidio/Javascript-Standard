/*
String é um tipo primitivo do js, e é um iterable, ou seja pode ser iterado usando um loop, metódos e atributos uteis:

str.lenght - Retorna o número de caracters de um string
str.charAt(index) - Retorna o caracter correspondente ao indice
str.charCodeAt(index) - Retorna o caracter em Unicode correspondente ao indice
str.slice(start, end) - Retorna parte do texto
str.substring(start, end) - Retorna parte do texto
str.indexOf(substring) - Retorna a posição da primeira ocorrência de uma string
str.lastIndexOf(substring) - Retorna a ultima posiçãod e ocorrência de uma substring(pega a posição do primeiro caracter da ultima ocorrência)
str.startWith(value, pos) - Verifica se a string começa com o valor especificado, começando a partir de pos
str.endsWith(value, pos) - Verifica se termina com valor especificado, até a posição limite
str.trim() - Remove espaços em branco do inicio e final da string
str.concat(value, ...) - Concatena duas ou mais strings
str.split(sep) - Separa a string em varias partes delimitados pelo seperador, cada parte da string vai ser um item de uma lista/array
str.padStart(maxlenght, fillstring) - Preenche string com caracter de preenchimento até atingir o tamanho máximo, começa do inicio da string
str.padEnd(maxlenght, fillstring) - Preenche string até atingir tamanho maximo, preenche o final
str.valueOf() - Retorna o tipo primitivo string
str.match(regexp) - Verifica se string atual corresponde a uma expressão regular
*/

const texto = "João e Maria foram ao rio pescar Jaca com João";
console.log(texto.length);
console.log(texto.charAt(2));
console.log(texto.charCodeAt(0));
console.log(texto.substring(0, 4));
console.log(texto.slice(7, 12));
console.log(texto.indexOf("Jaca"));
console.log(texto.lastIndexOf("Jaca"));
console.log(texto.toLocaleUpperCase());
console.log(texto.toLowerCase());
console.log(texto.replace("Jaca", "Peixe"));
console.log(texto.replaceAll("João", "Tulio"));
console.log(texto.startsWith("Maria", texto.indexOf("Maria")));
console.log(texto.startsWith("Maria"));
let compras = "leite, pera, maçã";
console.log(compras.split(","));
console.log(texto.padStart(50, "="));
console.log(texto.padEnd(50, "*"));
