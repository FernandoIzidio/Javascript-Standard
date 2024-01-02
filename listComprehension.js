/*
Js não tem um recurso dinâmico como o do python para lidar com isso, mas possui funções que emulam o mesmo comportamento

callBack - É uma função que vai ser chamado em todo item de um iterable

O acumulador de do metódo reduce, vai receber o retorno de todos os callbacks, ou seja o acumulador é o retorno do callback

*/

let produtos = [];
try {
} catch (error) {
  for (let num = 0; num < 10; num++) {
    produtos.push({
      nome: faker.commerce.product(),
      valor: faker.commerce.price({ max: 50 }),
    });
  }

  console.log(produtos);

  const NewProducts = produtos.map((dict) => {
    const prod = { ...dict, valor: Number(dict.valor) * 2.54 };
    return prod;
  });

  console.log(NewProducts);

  const bestSeller = NewProducts.filter(
    (dicionario) => Number(dicionario.valor) > 50
  );

  console.log(bestSeller);

  console.log(
    `Total Amount: R$${Math.floor(
      bestSeller.reduce(
        (acumulador, dicionario) => Number(dicionario.valor) + acumulador,
        0
      )
    )},00`
  );
}
const dataPerson = [
  { nome: "Tulio", idade: Math.floor(Math.random() * 95) + 5 },
  { nome: "Cagão", idade: Math.floor(Math.random() * 95) + 5 },
  { nome: "Marcão", idade: Math.floor(Math.random() * 95) + 5 },
  { nome: "Tiagão", idade: Math.floor(Math.random() * 95) + 5 },
  { nome: "Bento", idade: Math.floor(Math.random() * 95) + 5 },
];

console.log(dataPerson);
console.log(
  dataPerson.reduce((acumulador, dicionario) => {
    if (acumulador.idade > dicionario.idade) return acumulador;
    return dicionario; //Se o acumulador inicial tiver idade menor que algum dicionario iterado, o acumulador inicial, vai passar  a ser esse novo dicionario iterado de maior idade
  })
); //Valor inicial igual ao primeiro elemento por padrão
