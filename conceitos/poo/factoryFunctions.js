/*
Padrão de projeto onde a função retorna um objeto


*/

function createPropertyDescriptor() {}

function pessoaFactory(nome, sobrenome, idade) {
  const parentClass = {
    apresentar: function () {
      console.log(`Meu nome é ${this.name}`);
    },
  }; //__proto__ = Object.prototype - Ou seja todo objeto por padrão é filho da classe Object
  let _name = nome;

  return Object.create(parentClass, {
    name: {
      enumerable: true,
      configurable: false,
      get: () => _name,
      set: function (value) {
        if (typeof value === "string") {
          _name = value;
        }
      },
    },
  });
}

p1 = pessoaFactory("Tulio");
console.log(p1.name);
p1.apresentar();
p1.name = "CAGÃO";

console.log(p1.name);
p1.apresentar();
