/*
Coalescendica é um operador ?? que define um valor padrão, se o operando a esquerda for null ou undefinied

value ?? defaultvalue;
*/

const dicionario = {
  name: "blabla",
  idade: 8,
};

console.log(dicionario.sexo ?? "Masculino"); // Tenta acessar valor do atributo sexo, se retornar null ou undefiende o valor padrão sera Masculino
