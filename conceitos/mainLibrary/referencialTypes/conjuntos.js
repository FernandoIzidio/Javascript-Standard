/*
Extrutura de dados iterable do tipo referencial, ou seja quando alterada ou passada como o argumento para uma função, sua referência é passada

É um iterable
Ao contrario dos sets do python, mantém a ordem dos itens
Permite apenas valores únicos
Não possuem indice assim como os sets do python

Metódos uteis:
    set.add(value) - Adiciona um item ao final do set
    set.clear() - Limpa o set
    set.delete(value) - Remove um valor do set
    set.forEach(callBack) - Itera sobre cada item do dicionário
    set.entries() - Retorna iterator de chaves e valor
    set.values() - Retorna valores
    set.keys() - Retorna chaves do set(undefined)
 */

const conjunto = new Set();
for (let index = 0; index < 10; index++) {
  conjunto.add(Math.floor(Math.random() * 100));
}

const conjunto2 = new Set();
conjunto.forEach((valor) => conjunto2);
const temp = conjunto2.keys();
console.log(temp.next());
