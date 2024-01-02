//Funções declarativas nomeadas tem recursos de hoisting, elas podem ser referênciadas antes da declaração
const timer = document.getElementById("timer");
const pageResponseToEvents = new Map([
  ["start", startTimer],
  ["stop", stopTimer],
  ["toZero", zeroTimer],
]);
let intervalo;

function startTimer() {
  timer.style.color = "#000";
  let currentTime = new Date("1970-01-01 " + timer.innerHTML);

  intervalo = setInterval(() => {
    currentTime.setSeconds(currentTime.getSeconds() + 1);
    timer.innerHTML = currentTime.toLocaleTimeString("pt-BR", {
      hour12: false,
    });
  }, 1000);
}

function stopTimer() {
  if (!(timer.innerHTML.slice(-2) == "00")) {
    clearInterval(intervalo);
    timer.style.color = "#F00";
  }
}

function zeroTimer() {
  clearInterval(intervalo);
  timer.style.color = "#000";
  timer.innerHTML = "00:00:00";
}

document.addEventListener("click", (e) => {
  const element = e.target;
  const func = pageResponseToEvents.get(element.id);
  if (func) {
    func();
  }
});
