/*
... - É usado empacotamento de valores, e desempacotamento de valores

!! - Usado para retornar valor booleano
?? - Definir valor padrão em caso de undefinied, null
condition ? true : false - Operador ternário
(x, y) => x*y - Função lambda
! - Negação
&& - and
|| - or

...object - Desempacota chave e valor do objeto
...array/iterable - Desempacota valores da lista/iterable
*/

const { faker } = require("@faker-js/faker");

const produtos = [];

for (let index = 0; index < 10; index++) {
  produtos.push({
    productname: faker.commerce.product(),
    quantity: Math.floor(Math.random() * 100),
    price: Number(faker.commerce.price()),
  });
}

console.log(
  produtos.map((produto) => {
    const prod = { ...produto, price: `R$${produto.price * 2},00` };

    return prod;
  })
);
