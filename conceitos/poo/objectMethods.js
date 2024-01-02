/*
ParentClass de todos os objetos

Object.prototype - Retorna objeto que representa a parentClass de Object, esse objeto tem os metódos e atributos são comuns na maioria dos objetos em js

Object.freeze(obj) - Congela um objeto, e não permite a alteração/criação de atributos e metódos
Object.defineProperties(this, config:dict) - Configura as caracteristicas de um atributo/metódo de objeto, funciona como field de dataclasses

config:
    writable - Permite alterar valor do atributo
    enumerable - Define se atributo/metódo vai aparecer no repr
    configurable - Define se o atributo/metódo pode reconfigurado com object.defineProperties
    value - Define o valor do atributo/metódo
    get - Define um getter para o atributo
    set - Define um setter para o atributo

Object.keys() -> array - Retorna um array com as chaves de um objeto
Object.values() -> array - Retorna um array com os valores de um objeto
Object.entries() -> array[array,...] - Retorna um array com os pares de  chave e valor do objeto, em arrays

Object.assign(basedict, otherdicts...) - Copia as chaves e os valores de outros objetos para o basedict

Object.getOwnPropertyDescriptor(object, atributo) - Retorna um objeto, com as configurações de um atributo

Object.getPrototypeof(obj) - Retorna a parent-class/prototype de um objeto
Object.setPrototypeOf(obj, parentclass/prototype) - Define a parent-class de um objeto

Object.create(parentClass) - Cria um objeto com a parentClass prototype já definido


*/

const produtos = {
  nome: "caneca",
  preco: 13.45,
};

console.log(Object.values(produtos));
console.log(Object.keys(produtos));
console.log(Object.entries(produtos));
const dict = new Map(Object.entries(produtos));
console.log(dict);
console.log(Object.getOwnPropertyDescriptor(produtos, "preco"));
Object.defineProperty(produtos, "preco", {
  writable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(produtos, "preco"));

for (let [chave, valor] of Object.entries(produtos)) {
  console.log(chave, valor);
}

p2 = Object.create(produtos);
console.log(p2.nome);
