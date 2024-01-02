/*
Promisses é um recurso, para quando se precisa executar multiplas tarefas em ordem, sem saber o tempo que essas tarefas vão levar para ser executadas. 
Promisses garantem que uma função só seja executado após o termino de outra função.

new Promisse((resolve, reject) => {}) - um objeto promisse, recebe duas funções, resolve, e reject, a função resolve(value) retornara um valor para o metódo .then de uma promisse, a função resolve, deve ser executada quando a tarefa for bem sucedida, já a função reject deve ser executada quando uma função promisse falhar, quando uma promisse falha, o seu retorno vai para o metódo .catch


.resolve(value) -> Recebe os dados da função resolve, é executado, quando é função é executada com sucesso
.catch(value) - capture erros da promisse, recebe o valor retornado por reject()
Promisse.all(array).then().catch() - Executa um array de promisses(funções que demoram um TEMPO  para executar), quando todas as funções forem resolvidas, a Promisse vai retornar uma resposta para o .then, se uma der falso, a promisse que deu erro vai retornado para catch


Promisse.race(array) - Retorna o valor para o then, da primeira promisse que for resolvida, e resolve a promisse, retorna para o catch, a primeira que der erro, e encerra a promisse, ou seja essa promisse vai aguardar a primeira promisse ser resolvida e receber seu valor

Promisse.resolve(msg) - Cria uma promisse já resolvida, util quando não precisa executar tarefa da promisse, pois já esta executado, mas caso precise executar a tarefa da promisse não dar divergência de tipos, e sempre poder usar o metódo .then para tratar de quando a promisse estiver resolvida.
Promisse.reject(msg) - Cria uma promisse já rejeitada


async function nameFunction(value, ...rest) - Permite executar multiplas tarefas e aguardar a execução dessas tarefas exemplo:
    async function dbManager(){
        const response = await promisse(); - O bult-in await, aguarda uma promisse ser resolvida ou rejeitada, para armazenar sua resposta
    }

Status de Promisses:
    pending - Promisse pendente
    fullfilled - Promisse resolvida
    rejected - Promisse rejeitada

*/

function dataBaseOperation(dbname, sleep) {
  return new Promise((resolve, reject) => {
    if (typeof sleep !== "number") {
      reject("Erro: Enviar apenas números");
      return;
    }
    setTimeout(() => {
      resolve(dbname);
    }, sleep);
  });
}

dataBaseOperation("Truco", "bla").catch((reason) => {
  console.log(reason);
});

dataBaseOperation("Db1", 2000).then((msg) => {
  console.log("Conectou com sucesso no banco de dados", msg);
  dataBaseOperation("Db1", 1800).then((sucessResponse) => {
    console.log("Tratando dados do banco de dados", sucessResponse);
  });
});

const promisses = [
  dataBaseOperation("Db1", 1500),
  dataBaseOperation("Db2", 500),
  dataBaseOperation("Db3", 2300),
];

Promise.all(promisses).then((response) => {
  console.log(response, typeof response);
  for (let resp in response) {
    console.log(`Operação ${Number(resp) + 1} realizada no Database`);
  }
});

Promise.race(promisses).then((resolveMessage) =>
  console.log("Promessa resolvida", resolveMessage)
);

async function dbManager() {
  const iterator = (function* (min, max) {
    var value = min;
    while (value < max) {
      yield value;
      value++;
    }
  })(0, 3);

  const response1 = await promisses[iterator.next().value];
  console.log("HELOOOOOO", response1);
}

dbManager();
