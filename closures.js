/*
Closures é um conceito usado para adiar a execução de funções, passar argumentos de forma parcial, ou são funções que retornam outras funções

A função interna sempre vai receber os argumentos da função, e a função principal, vai receber os argumentos a serem passados de formas parcial
*/

function get_func_multiplier(func, num) {
  function interna(...args) {
    // A única coisa que vai ser preciso passar para a função é o args, já que a função vai ter um argumento fixo
    return func(...args, num); // Função ainda vai recber outros argumentos por padrão, mas vai ter um argumento fixo, ou seja vai multiplicar os argumentos que receber sempre por um valor fixo
  } // Função com argumento de valor fixo, closures é isso, funções que retornam funções
  return interna;
}

const getDouble = get_func_multiplier((x, y, z) => x * y * z, 2);
console.log(getDouble(4, 2));
