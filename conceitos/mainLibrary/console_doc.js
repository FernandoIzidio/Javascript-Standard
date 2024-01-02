//  Console é um objeto usado para interagir com o console do navegador, ou para interagir  com o ambiente de execução

// console.log() - semelhante ao print, é usado para imprimir algo no terminal
// console.error() - Imprime erros com uma formatação destacada
// console.warn() - Imprime mensagens de aviso no terminal
// console.info() - Funciona como o console.log mas tem uma formatação personalizada para visos
// console.table() - Exibe dados de saida em formato de tabela
// console.group() - é usado em conjunto com console.groupEnd, para fazer uma saida identada nos prints que estiverem no grupo
// console.clear() - Limpa o terminal
// console.time() e console.timeEnd() - Usados para  medir o tempo de execução de um bloco de códigos

const dados = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
];

console.clear();

console.table(dados);

console.time("tempo");
console.group("Grupo A");
console.log("Mensagem A1");
console.log("Mensagem A2");
console.groupEnd(); //Agrupa saida do console

console.group("Grupo B");
console.log("Mensagem B1");
console.log("Mensagem B2");
console.groupEnd();
console.timeEnd("tempo");
