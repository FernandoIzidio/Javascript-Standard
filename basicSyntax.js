/*
Variaveis:

Hoisting conceito o qual todas as variaveis de um script, são as primeiras coisas a serem compiladas, e isso permite que alguns tipos de variaveis sejam usados antes da declaração

Cuidado ao usar apis back-end, em script's interpretados pelo navegador, é sempre bom separar ambiente front x ambiente back

Todo script cliente-side sera executado no lado do cliente, então scripts client-side não conseguem abrir arquivos, porque não tem como um navegador abrir um arquivo na maquina do usuário

Assim como scripts cliente-side não funcionam em back-side servidor, tem várias funções de js que só funcionam do client-side

E todo script back-side sera executado no servidor


Node:
    const namepackage = require(ModulePath|packagename:str);
    module.exports = {objects, ...}

Ecma(mjs):
    import name from waymodule||packagename:str


Casting:
    String(value) - Converte objeto para string
    Number(value) - Converte um objeto para Number
    parseInt(string, base) - Converte uma string para inteiro
    parseFloat(string, base) - Converte uma string para float
    Boolean(value) || !!value- Retorna valor booleano de um valor
    Objetct - Converte um valor para objeto/dicionário



 

Tipos primitivos passam uma deepcopy
Tipos referência passam a referência da variavel na memória do computador

Interpolação de string é feita por crases e ${var} exemplos:
    `Aqui o conteúdo de uma variavel ${var}`

Uma variavel só é inicializada no js depois de atribuir algum valor

; é um delimitador de comandos, ou um delimitador de linhas
{} - Delimitador de bloco de códigos
`${var}` - Insere valor de variavel na string 

... - Espelhamento usado para empacotar argumentos de uma função, ou desempacotar iterables(dicionário e listas)


Tipos primitivos||valor (String, Number, Null, Undefinied, Booolean), quando tem seus valores reatribuidos, ou passado como argumentos para uma função uma cópia dos valores é feita

Tipos referência(function, array, object) quando se tem valores alterados, ou passados como argumentos para função é passada a referência na memória para a função, ou o valor é alterado a sua referência na memória do computador, isso otimiza o desempenho dos programas, e evita gastos desnecessários.

Formas de declarar uma varivavel:
    var: 
        - É Uma variavel de escopo de função, e pode ser utilizada em todo o escopo de um função
        - Possui recursos de hoisting, ou seja a varivel pode ser usada antes da declaração, mas o valor da variavel vai ser undefinied
        - Pode ser reatribuido/redeclarado no mesmo escopo

    let -
        -É uma variavel de escopo de bloco
        - Pode ser reatribuido(valor alterado) no mesmo bloco, mas não pode ser redeclarado no mesmo bloco

    const - 
        - Escopo de bloco
        - Variavel de valor constante, não pode ser redeclarado/reatribuido
        - É obrigatório fornecer valor no momento da declaração

atribuição:
    var++ - é a mesma coisa que var+=1, porém mais abreviado, var++ sempre vai retornar o valor e depois somar mais 1

    var++; pós incremento, retorna o valor depois incrementa, ou seja vai retornar o valor antigo e incrementar depois
    ++var; pré incremento, retorna a variavel com valor incrementado
    var+=1; incrementa mais um 

Tipos de dados:
    Number -  10, 10.5
    String - "texto"
    boolean - true false
    Undefinied  - Ausencia de valor, ou variavel não inicializada
    Null - Variavel como valor nulo
    Array - é uma lista, para armazenar valores ordenados
    object - É um dicionário, que permite acessar os valores por dic[chave], ou dic.chave
    
typeof obj - Retorna o tipo de um objeto
obj isistanceof class - Verifica se um objeto é isntância de uma classe

Casting(conversão de tipos):
    parseInt(str, basedecimal|radix) - Converte string em número
    parseFloat(str, basedecimal|radix) - Converte string em float
    number.toString() - Converte Number para string
    String(value) - Converte objeto para string
    Boolean - Retorna valor truth e false de um objeto


Extruturas de decisão:
    if (True) {
        do anything...
    } else {
        do anything...
    }

    if (true) {
        do anything...
    } else if (true){
        run this quote...
    } else {
        do anything...
    }

    switch (var) {
        case value:
            do anything...
            break;

        case value2:
            do anything...
            break;

        case value3:
            do anything...
            break;
        
        default:
            do anything...

        Operador Ternário:

            (condicao) ? Value_True : Value_False;
    }

and -  &&
or - ||
not - !
valor booleano =  !!

Operadores Relacionais:
    "5" == 5 -> true - igual- == Retorna true, se os valores forem iguais após a coerção de tipo
    "5" === 5 -> false - Estritamente igual- Retorna true, apenas se os valores tiverem o mesmo valor, e mesmo tipo 
    "5" != 5 -> true - diferente -  Retorna True, se após a coerção os valores forem diferentes
    "5" !== 5 -> false - estritamente diferente - Apenas retornara true, se tiverem valor e/ou tipos diferentes
    "5" > 5 -> false - maior - Retorna true se valor for maio
    5 >= 5 -> true - maior ou igual - Retorna true se for maior ou igual
    5 <= 5 -> true - menor ou igual - Retorna true se for menor ou igual
    5 < 5 -> true - menor - Retorna true se for menor

Obs: Operadores relacionais de maioridade, ou menoridade não fazem coerção de tipo, e quando é usado string entre comparações é feito uma comparação de ordem lexografica(ordem alfabetica && comprimento da string)



Extruturas de repetição:
    for (inicialização; condição; atualização) {
    // código a ser repetido
} - Usado para repetir um número determinado de vezes
inicialização - É onde vai ser declarado a variavel do for
condição - Até quando a variavel vai contar

atualização - Se vai iterar e uma vez e depois incrementa, ou incrementar antes de iterar.

Exemplos de for em js:
for (let num = 0; num < 10; num++) { executa o bloco, e após a primeira iteração incrementa mais um

}

for (let num=0; num < 20; num+=2) {

}

for (let num=0; num < 5; ++num) { #Incrementa mais um e executa o bloco

}

while (true) {
    do anything...
    if (true) {
        break;
    }
} - Usado para para executar um número indeterminado de vezes determinado bloco de código

do {
    do anything...

} while (true);

Funções: 
- Função declarativa
function soma(a, b) {
    return a + b;
}

- Função anônima
function(x, y) {
    return x * y;
};

-Função lambda 
const quadrado = (args) => args * args;

Array:
    Listas de javascript 
    const lista = [0, 5]
    lista[0] - Retorna 0
    lista[1] - Retorna 5



Objetos :
    São dicionários do javascript

    dicionario = {
        chave: "valor",
        chave2: "valor2"
    };
    dicionario.chave - Retorna o valor de chave
    dicionario["chave2"] - Retorna o valor de chave2

Uma boa pratica de programação é construir extruturas de dados que armazenam apenas o mesmo tipo de valor, isso evita verificações de tipos

Operações de igualdade, maioridade, menoridade, podem ser substituidas por dicionários, com o metódo get

Peculiaridades do tipos referência:
    const array, object - Não torna o dicionário ou lista imutavel, apenas impede que o array, ou object seja reatribuido a outra referência, ou seja passado para outra variavel, mas o array e object podem ter seus valores modificados

    const function - Impedi que a referência da função seja passada para outra variavel
    Exemplos:
        const lista = [1, 4]
        const lista2 = lista - Essa operação não é possivel, pois const não permite reatribuir referência na memória 

Um objeto só vai ter os metódos e atributos que lhe forem atribuidos, ele não vem com nenhum metódo/função por padrão

*/

let nome = "truco";
console.log(nome);

nome = "trucão";
console.log(nome);

var numero = 10;
console.log(typeof numero);
var numero = 10.45;
console.log(typeof numero);

let ved = true;
console.log(typeof ved);
let fal = false;
console.log(typeof fal);

var indef;
console.log(typeof indef);

const nullo = null;
console.log(nullo);

let idade = 15;

console.log(idade >= 18 ? "Adulto" : "Criança");
console.log("Testando");

let lista = [45];
let lista2 = lista;
console.log(lista);
lista[1] = 21;
console.log(lista2);
