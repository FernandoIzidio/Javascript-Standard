/*
factoryFunction é uma função que retorna um objeto
ConstructorFunction é uma função que constroi um objeto. Esse tipo se comporta como uma classe

para usar uma constructor function usa-se o bult-in new



// Atributos e metódos privados a ConstructorFunction, são declarados como escopo de bloco 
(const, let)

//Atibutos e metódos públicos usam a notação this.

Em resumo uma ConstructorFunction é uma função que se comporta como classe

ConstructorFunction se comporta como um init, ou como um constructor de classe, em resumo constructor functions são funções usadas para criar objetos

*/

function Pessoa(nome, sobrenome) {
  // Todo escopo da função é lido e executado durante a criação do objeto
  //private methods and attributes
  const ID = 1234;
  function PrivateMethod() {
    console.log("Is Private");
  }
  console.log(ID); // Vai ser executado sempre que uma nova instância for criada
  PrivateMethod(); //

  //Public methods and attributes
  this.name = nome;
  this.surname = sobrenome;

  this.tellFullName = () => this.name + " " + this.surname;
}

p1 = new Pessoa("Tulio", "Cagão");
p2 = new Pessoa("Tulio", "Cagão");
console.log(p1.name);
console.log(p1.surname);
console.log(p1.tellFullName());
console.log();
