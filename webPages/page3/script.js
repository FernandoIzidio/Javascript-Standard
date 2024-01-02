const currentTime = document.getElementById("timeNow");

const date = new Date();
const daysNames = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-feira",
  "Sexta-Feira",
  "Sabádo",
];

const monthName = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function getDayName() {
  let weekday = daysNames[date.getDay()];
  let month = monthName[date.getMonth()];
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${weekday}, ${date.getDate()} de ${month} de ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${seconds}`;
}

currentTime.innerHTML = getDayName();
