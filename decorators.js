/*
Decorators são funções/classes que modificam ou substituem outras funções ou classes 


*/

function modifyFunc(func) {
  function interna(...args) {
    console.log("Bom dia função modificada");
    return func(...args); // Função que modifica outra função, até porque retorna a execução da função antiga, ou seja apenas modifica o comportamento da função, e retorna seu comportamento antigo
  }
  return interna;
}

const personDouble = modifyFunc((x, y) => x * y);

console.log(personDouble(8, 4));

function substituteFunc(multiplicativefunc) {
  function interna(num, num2) {
    return num / num2;
  }

  return interna;
}

const divFunc = substituteFunc((x, y) => x * y);
console.log(divFunc(4, 2));
