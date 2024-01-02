/*
Abstração - Simplificar processos funciionalidades, e tornar mais facil de implementar funcionalidades

this - Objeto que executou/vai executar determinado metódo atributo.


prototype - ParentClass de um objeto


obj = new FunctionConstructor - Faz por baixo dos panos, uma function.call(obj, args)

obj.prototype -> Object -> Retorna um objeto que representa a parentClass, todo objeto prototype por padrão vem com um atributo __proto__ = Object.prototype, ou seja todo objeto por padrão herda da classe Object

obj.prototype.__proto__ = Object.prototype -> - ParentClass do objeto, ou parentClass da parentClass

obj2.prototype = Object.create(obj.prototype) -> {attr/methods, __proto__=obj.prototype{}} - Quando eu faço isso eu estou criando uma child-class de uma outra classe

    Object
     |
    obj1
     |
    obj2

obj2.prototype = obj1.prototype -> Obj2.prototype aponta para a mesma parentClass de object1, então fazendo isso as parent-class passam a ser irmãs, a alteração da obj.prototype, sera refletida em obj2.prototype, porque ambas classes apontam para a mesma parentClass/prototype

        Object
          |
    Parent-Class obj1 
        /     \
    obj1      obj2

*/

function Produto(nome, preco) {
  this.name = nome;
  this.price = preco;
}

Produto.prototype.aumento = function (aumento) {
  // Metódo de parent Class
  return this.price + (this.price * aumento) / 100;
};

function Caneta(nome, preco, tamanho, cor) {
  Produto.call(this, nome, preco); //Criando objeto em uma outro classe, ao instanciar esse objeto
  this.size = tamanho;
  this.color = cor;
}

Caneta.prototype = Object.create(Produto.prototype); // A Classe caneta é filha da classe Produto
Caneta.prototype.constructor = Caneta; //atributo na parent-class

prod = new Produto("Truco", 10);
bic = new Caneta("Caneta Bic", 1.25, 3.5, "Blue");

console.log(prod.aumento(20));
console.log(prod.price);

for (let [atributo, valor] of Object.entries(bic)) {
  console.log(atributo, valor);
}
console.log(bic.aumento(10));
console.log(prod, bic);
