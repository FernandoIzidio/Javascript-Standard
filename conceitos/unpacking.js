/*
[var1, var2] = iterable - Desempacota os dois primeiros valores, de um iterable, e atribui esses valores a variaveis

[var1, ...resto] = iterable - Atribui o primeiro valor a var, e empacota os valores restantes em resto

...iterable - Desempacota os valores de um array

{atributo: varName = defaultValue} = object -  Atribui o valor de atributo a variavel varName, se não encontra o atributo dentro de object, varName recebe valor padrão
*/

const numeros = [
  [1000, 2000, 3000],
  [4000, 5000, 6000],
  [7000, 8000, 9000],
]; //Não permite alterar a referência desse array

[firstList] = numeros;
console.log(firstList);
[, [, fiveItem], ...thirdList] = numeros;
console.log(fiveItem, thirdList);
[, ...lastLists] = numeros;
console.log(lastLists);

const pessoa = {
  nome: "Tulio",
  sobrenome: "Pneu",
  idade: 48,
  endereco: {
    rua: "Rua de chuva",
    numero: 187,
  },
};

const {
  nome: name = "attr unfind",
  sobrenome: surname = "attr unfind",
  idade: age = "attr unfind",
  endereco: { rua: street = "attr unfind", numero: number = "attr unfind" }, //atribuindo valor do atributo endereco, a esse objeto
} = pessoa;

console.log(name, surname, age);
console.log(street, number);
