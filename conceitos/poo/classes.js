/*
class Foo{

} - Toda classe é criada como o bult-in class

Classes é uma forma mais abstraida de criar objetos js, pois não é preciso definir a parent class como obj.prototype.
Qualquer metódo que não for constructor é já um metódo prototype de parent class por padrão

prototype- é a parentClass de um objeto, se a execução de um atributo ou metódo não for encontrada no próprio objeto ele procura na parentClass/Prototype.

prototype.__proto__ - É a parentClass da parentClass, por padrão objeto Object.prototype é a classe pai, ou super classe de todos objetos

constructor - Init da classe, inicializa os atributos
*/
name = Symbol();

class Foo {
  constructor(nome) {
    this[name] = nome;
  }
}

p1 = new Foo("Cagão");
console.log(p1.name);
console.log(p1[name]);
