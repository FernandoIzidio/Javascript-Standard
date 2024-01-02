/*
Em javascript é possivel configurar o comportamento de atributos e metódos

Object.defineProperty(object:ref, attrname:array, attrconfigs:object)
attrconfigs values:
    value - Define o valor do atributo
    enumerable bool - Define se o atributo vai aparecer no repr/representação string do objeto, 
    writable bool - Define se o valor do atributo pode ser alterado
    configurable bool - Define se o atributo do objeto pode ser reconfigurado com Object.defineProperties

tem comportamento parecido com field de dataclasses do python


*/

function Pessoa(name, surname, age) {
  this.name = name;
  this.surname = surname;
  var currentAge = age;

  Object.defineProperties(this, {
    age: {
      get: () => currentAge,
      set: (value) => {
        if (typeof value !== "number") return TypeError("Must be a number");
        currentAge = value;
      },
    },
  });
}

p1 = new Pessoa("TULIO", "CAGÃO", 59);
console.log(p1);
console.log(p1.age);
p1.age = 157487;
console.log(p1);
console.log(p1.age);
