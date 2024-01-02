/*
const packagename = require(oficialpackagename|waymodule); usado para importar um módulo para o main 

CommonJs - Padrão seguido pelo node.js, extensão de arquivo .js
Ecma Script 6 - Padrão seguidos pelos navegadores .mjs


CommmonJs:
  Require é o padrão do cjs(Common js) e é compativel com a grande maioria dos navegadores

  Importação no NodeJs:
  const name = require(waypath, packagename);

  Exportação no NodeJs:
  const variavel = 45;
  module.exports = variavel;


Ecma Script(mjs):
  import name from 'waypath'|'packagename'



Exportação nomeada - É util quando se quer exportar varias coisas em um único módulo, esse recurso exige que exporte a declaração do objeto

export const name = {example: random};

export default - Permite exportar um único valor que vai representar o módulo, ao usar esse recurso só é possivel exportar um único item

*/
const minhaVariavel = 42;
function minhaFuncao() {
  console.log("Olá do exportando.js!");
}
const meuObjeto = { chave: "valor" };

module.exports = { minhaVariavel, minhaFuncao, meuObjeto };
