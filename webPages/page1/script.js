// Front-side

const responses = [
  "A vida é como uma bicicleta para manter o equilíbrio, você deve continuar em movimento.",
  "A melhor maneira de prever o futuro é criá-lo.",
  "Às vezes, a alegria mais simples é um antídoto para o caos.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Não existe um caminho para a felicidade. A felicidade é o caminho.",
];

// Elements
const flag = document.getElementById("flag");
const question = document.getElementById("question");
const response = document.getElementById("response");
const nextButtom = document.getElementById("next");

nextButtom.addEventListener("click", showNextResponse);

function showNextResponse() {
  const currentFlagValue = Number(flag.innerHTML) + 1;

  question.innerHTML = question.innerHTML.replace(
    currentFlagValue,
    currentFlagValue + 1
  );

  response.innerHTML = responses[currentFlagValue];
  flag.innerHTML = currentFlagValue;
}
