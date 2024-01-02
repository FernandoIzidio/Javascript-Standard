/*

ProtoTypes é uma referência a parent-class do objeto, todo objeto por padrão tentar buscar metódos e atributos no proprio objeto, e se ele não encontrar ele procura esses metódos e atributos no prototype, então prototype, é como se fosse uma parent-class do objeto

O atributo Class.prototype/ConstructorFunction.prototype, vai definir a parent-class/prototype dos objetos

Prototypes é um recurso muito util para definir os metódos de um objeto, porque ao inves de criar varios metódos em milhares de objetos, e consumir recursos do cliente, os objetos podem executar os metódos da parent-class/prototype, e todos os objetos assim referenciarão os metódos e atributos

Object.prototype - Retorna um objeto que representa a parentClass do objeto
Object.prototype.__proto__ - É a parentClass da parentClass do seu objeto, tood objeto js por padrão tem como parent class principal o Object.prototype, ou seja todos os objetos de js são filhos de Object

*/

function Pessoa(nome, sobrenome) {
  this.name = nome;
  this.surname = sobrenome;
}
Pessoa.prototype.hello = "tru";

console.log(Pessoa.prototype);
p1 = new Pessoa("tULIO", "CAGÃO");
