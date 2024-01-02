/*
Date é um objeto usado para manipulação de data e hora

Overload constructor - Formas de instânciar uma classe Date:
    new Date(); - Retorna a data do momento de execução do código
    new Date(5dayscalc) - Retorna a data 5 dias após Unix Time Stamp
    new Date(year, month, day, hour, minute, secons, mili) - Cria um objeto datetime
    new Date("yyyy-mm-dd HH:MM:SS")


Metódos e atributos uteis:
    date.getDate - Retorna o dia da data
    date.getMonth - Retorna mês da data
    date.getFullYear - Retorna ano da data
    date.getHours - Retorna hora da data
    date.getMinutes - Retorna minutos da data
    date.getSeconds - Retorna segundos da data
    date.getMilliSeconds - Retorna milisegundos da data
    date.getDay - Retorna dia da semana da data

    Date.now() - Cria um objeto Date, a partir do timestamp de execução do código

0 - Domingo 
6 - Sabádo
 */

const data = new Date("2022-12-18 18:00:00");
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth());
console.log("Ano", data.getFullYear());
console.log("Horas", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Milisegundos", data.getMilliseconds());
console.log("Dia da semana", data.getDay());
console.log(data);
console.log(data.toString());
