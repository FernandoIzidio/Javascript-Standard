/* 
Funções em javacript são objetos de tipo referêncial 

Todas funções por padrão tem uma variavel especial arguments(exceto arrow functions), que retorna um objeto com todos argumentos passados para a função

Js não possui nenhum tipo erro para divergência de parametros/argumentos

function Soma(x, y){
    return x + y;
} - Função declarativa padrão - Esse tipo tem função tem recurso de hoisting, então pode ser chamada antes da declaração da função

function(x, y) {
    return x + y;
}- Função anônima

const myFunc = (x, y) => x * y; - Arrow Function 

Função de muitos argumentos:

function printarNumeros(...args){
    console.log(args);
} - Vai empacotar todos argumentos que receber  e printar eles, ...var é usado para empacotamento de argumentos recebidos por uma função em js 


factoryFunction - Função que retorna um objeto
ConstructorFunction - Função que constroi um objeto (Se comportam como classesfu)

Os argumentos no javascript podem ser passados de forma posicional, ou de forma nomeada
func(value) - Argumento passado de forma posicional
func({key:value}) - Argumento passado de forma nomeada 

... - Operador de espalhamento pode ser usado para desempacotar e empacotar qualquer iterable

... é como se fosse ** e * em um único operador

Metódos uteis de funções.
    func Foo(){

    }.bind(obj)- Altera a referência do objeto this

    func.call(this, args) - Executa uma função com a referência do this alterada
*/

function showData({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
showData({ nome: "flamengo", sobrenome: "piada", idade: 48 });

function showData2([name, surname, age]) {
  console.log(name, surname, age);
}
showData2(["truco", "ladrão", 24]);

function soma() {
  let initValue = 0;
  for (let key in arguments) {
    initValue += arguments[key];
  }
  console.log(initValue);
}
soma(2, 2, 2, 2, 2);

function doSum(x, y) {
  console.log(x + y);
}
doSum(45, 10);
