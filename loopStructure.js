/*
Loop são extruturas de repetições para repetir determinado bloco de código um número determinado/indeterminado de vezes

Conjunto indeterminado de repetições:
    while (true) {
        do anything...
    }


    do{
        do anything
    } while (true);

for (let i in iterable) {} - Itera sobre as chaves 
for (let i of iterable) {} - Itera sobre os valores

array.forEach(callback(value, key, array)) - Itera sobre as chaves e valores


break; - Encerra um loop
continue; - Termina uma iteração, e volta para a proxima iteração, ou seja pula uma iteração

array.includes(element) - Verifica se elemento está dentro do array

Conjunto determinado de repetições:

    for (let num; num < 10; num++) {
        do anything...
    }

    for .. in é usado para iterar sobre os atributos de um objeto 
    for (let atributo in objeto) {
        do anything
    }

    -- For ... of é usado para iterar sobre os valores de um iterable(string, array, e etc)obs: exceto objetos(dicionários).
    for (let value of iterable){
        do anything 
    }






*/

let dict = {
  nome: "Truco",
  preco: 45,
};

for (let chave in dict) {
  console.log(chave, dict[chave]);
}
