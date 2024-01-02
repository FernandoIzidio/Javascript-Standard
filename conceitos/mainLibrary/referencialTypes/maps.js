/*
Maps são objetos que se comportam de forma semelhante aos dicionários python.
Possuem chave valor
São iterables
São mutaveis
E ao serem usados como argumento de função, ou ao serem alterados, sua referência é alterada

Metódos uteis do tipo Map:
    set(key, value) - Define uma chave e valor
    get(key) - Retorna o valor de uma chave
    has(key) - Verifica se chave existe no dicionário
    delete(key) - Remove chave do dicionário
    clear() - Limpa todos os valores do dicionário

    entries - Retorna iterator com pares de [chave, valor]
    keys - Retorna iterator com chaves do dicionário
    values -  Retorna iterator com valores do dicionário
    size - Retorna número de pares que o dicionário tem 
    forEach(callback(value, key)) - Itera sobre cada chave valor

*/
const { faker } = require("@faker-js/faker");

const dict = new Map();
for (let index = 0; index < 10; index++) {
  dict.set(faker.commerce.product(), Math.floor(Math.random() * 100));
}

console.log(dict);
console.log(dict.entries().next().value);

dict.forEach((valor, chave) => console.log(`${chave}: ${valor}`));
