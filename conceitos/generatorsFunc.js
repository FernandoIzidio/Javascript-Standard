/*
 
Generators Function são funções geradoras, usadas para gerar dados.
Essas funções podem ser pausadas, e chamadas varias vezes.
Toda Generator Function é um iterator. Então generator functions podem ter comportamentos parecidos com extruturas de dados. Porém toda generator function é esgotavel, como qualquer iterator

Vantagens - Ao invés de consumir todos os dados de uma vez como em um iterable normal, ela vai consumir um dado por vez, ou seja entregar um dado por vez na aplicação, oque pode melhorar o desempenho


Syntax de um Generator:
    function* Foo(...){
        do anything...
    }

    Generators se comportam como extruturas de dados, e retornam um objeto generator na sua primeira chamada, esse objeto generator é usado para iterar sobre todos os yields

Metódos e atributos de objetos generators:
    generator.next() - Retorna o primeiro objeto de uma generator function
    generator.next().value - Retorna o primeiro/proximo valor de um generator


yield* Foo(); -- Pausa função e retorna todos os dados do generator Foo();, pausa função até o generator Foo(); ser totalmente consumido
 */

function* getNumberEven(quantity) {
  var num = 0;
  while (num < quantity) {
    yield num;

    num++;
  }
}

function* doubleFunction(num) {
  yield* getNumberEven(num);
  yield "Generator acabou";
}

generator = getNumberEven(10);
generator2 = doubleFunction(5);
console.log(generator2.next());
console.log(generator2.next());

for (let value of generator) {
  console.log(value);
}
