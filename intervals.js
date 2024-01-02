/*
Intervalos são usados para adiar a execução de funções durante um intervalo de tempo.

Intervals tentam emular parelelismo, porque as funções podem ser executadas simultaneamente, sem bloquear a outra, ou seja uma função não precisa esperar a outra terminar para ser executada


setInterval(func, miliseconds) - Executa determinada função a cada milisegundos 

setTimeOut(func, miliseconds) - Executa uma função apenas uma vez, depois de milisegundos

clearInterval(referenceFunc) - Encerra a execução de uma função agendada
*/

const agended_func = setInterval(() => console.log(new Date()), 1000);
setTimeout(() => console.log("Funções parelelas"), 3000);
setTimeout(() => clearInterval(agended_func), 10000); // Encerra execução de função agendada, após 10 segundos
