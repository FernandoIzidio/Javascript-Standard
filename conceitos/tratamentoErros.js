/*
try - Tenta executar bloco de códigos
catch(err) - Captura o erro
throw "" - Lança uma mensagem de erro

try {
    Tenta executar bloco de códigos
} catch(error)--captura o erro {
    Se ocorrer um erro executa esse bloco de códigos
} finally {
    Executa esse bloco de códigos independente se ocorreu erro ou não
}


Error - Parent class de todos os erros de javascript

throw "MessageError" - Lança mensagem de erro
raise TypeError - Lança erro no python

*/

try {
  try {
    console.log(erros);
  } catch (erro3) {
    console.log("Ocorreu outro erro");
  } finally {
    console.log("Salvando arquivo interno.js");
  }
  console.log(variavel);
} catch (erro) {
  console.log("Varivel não declarada");
} finally {
  console.log("Salvando arquivo main.js");
}

try {
  console.log(variavel2);
} catch (erro2) {
  try {
    throw new Error("Variavel não declarada");
  } catch (er) {
    console.log(er);
  }
}

function getDate(date) {
  if (!(date instanceof Date))
    throw TypeError("Precisa ser um objeto da classe Date");

  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString("pt-Br", { hour12: false });
}

console.log(getDate(new Date()));
