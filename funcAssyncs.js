/*
Funções Assincronas é um recurso syntax sugar, que permite o uso do operador await, para aguardar o resolvimento, ou rejeijção de uma promisse.Exemplos:

async function DbPromisses(){

    const p1 = await promisse1(); - Aguarda o resolvimento/rejeijação da promisse para armazenar ela em uma variavel, resumindo await Promisse, aguarda uma promisse ser resolvida ou rejeitada
}

await promisse - Pausa a execução de uma função assincrona, até a promisse ser resolvida, ou rejeitada
*/

function createPromisse(msg, sleep) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") return reject("Digitar apenas strings");

    setTimeout(() => {
      resolve(msg); //Promisse sera resolvida após intervalo de tempo
    }, sleep * 1000);
  });
}

const dbRules = [
  () => createPromisse("Conectando na base de dados", 3),
  () => createPromisse("Fazendo consultas nas tabelas", 2),
  () => createPromisse("Tratando dados do Db", 3),
  () => createPromisse("Usando os dados do Db", 1),
]; //Adiando a criação das promisses

async function execDbRules(Min, Max) {
  indices = (function* (min, max) {
    while (min < max) {
      yield min;
      min++;
    }
  })(Min, Max); //Criando um iterator

  for (let value of indices) {
    let waitPromisse = await dbRules[value]();
    console.log(waitPromisse);
  } //Cada iteração vai esperar a promisse ser resolvida ou rejeitada
}

execDbRules(0, 4);
