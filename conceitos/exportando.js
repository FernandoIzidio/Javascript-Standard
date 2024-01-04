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

  import * as object from "pathPackage" -  Importa tudo que for exportado pelo pacote, e empacota em um objeto


  export const name = {example: random}; - Exporta a declaração da variavel, o export de declaração pode ser usado varias vezes

  export {} - Exporta um objeto como valor do módulo

  export default - Permite exportar um único valor que vai representar o módulo, ao usar esse recurso só é possivel exportar um único item

*/
const minhaVariavel = 42;
function minhaFuncao() {
  console.log("Olá do exportando.js!");
}
const meuObjeto = { chave: "valor" };

module.exports = { minhaVariavel, minhaFuncao, meuObjeto };
