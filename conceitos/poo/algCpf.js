/*
Montar um objeto cpf para emular uma biblioteca validadora de cpf.
O objeto teria atributos cpf, cpflimpo, os metódos validacpf, ou seja seria um objeto para validar cpf, e executar outras funcionalidades relacionadas a cpf, tipo checar regularidade e etc
*/

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
let cpf = `${getRandom(100, 999)}.${getRandom(100, 999)}.${getRandom(
  100,
  999
)}-${getRandom(10, 99)}`;
cpf = "705.484.450.52";

let onlyNumbers = cpf.replace(/\D+/g, ""); //Substitui todas as ocorrências de caracters não númericos por um string vazia

let nineNumbers = Array.from(onlyNumbers.slice(0, 9)).reverse();

const sumArray = (array) => {
  return array
    .map((element) => Number(element))
    .reduce(
      (acumulador, elemento) => {
        acumulador.sum = acumulador.sum ?? 0;
        acumulador.sum += acumulador.multi * elemento;

        acumulador.multi++;

        return acumulador;
      },
      { multi: 2 }
    ).sum;
};

let sumNumbers = sumArray(nineNumbers);

let checkDigit = sumNumbers % 11 >= 2 ? 11 - (sumNumbers % 11) : 0;
nineNumbers.unshift(checkDigit);
sumNumbers = sumArray(nineNumbers);

let checkDigit2 = sumNumbers % 11 >= 2 ? 11 - (sumNumbers % 11) : 0;

nineNumbers.unshift(checkDigit2);
console.log(onlyNumbers, nineNumbers.reverse().join(""));
