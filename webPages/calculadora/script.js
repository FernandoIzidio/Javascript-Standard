const calcLayout = document.getElementById("calc");
const resultBox = document.getElementById("resultBox");
const inputBox = document.getElementById("inputBox");
const notNumbers = ["C", "◀", "^", "/", "*", "-", "+", "="];
//Create calcLayout
(function () {
  gridMask = [
    ["C", "◀", "^", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", "", ".", "="],
  ];

  for (let linha = 0; linha < 5; linha++) {
    for (let coluna = 0; coluna < 4; coluna++) {
      if (!gridMask[linha][coluna] || gridMask[linha][coluna] == "0") {
        if (coluna !== 0) continue;

        let butt = document.createElement("button");
        butt.innerHTML = gridMask[linha][coluna];
        butt.style.gridColumn = "span 2";
        calcLayout.appendChild(butt);
        continue;
      }

      let butt = document.createElement("button");
      butt.innerHTML = gridMask[linha][coluna];
      calcLayout.appendChild(butt);
    }
  }
})();

//Checa se uma string tem algum operador
function hasOperator(string) {
  for (let value of notNumbers) {
    if (string.includes(value)) {
      return true;
    }
  }
  return false;
}

//Adiciona números a inputBox
function addNumber(element) {
  if (element.innerHTML === ".") {
    if (!inputBox.value) return;
    if (inputBox.value.includes(".") || isNaN(inputBox.value)) return;
  }

  if (element.tagName.toUpperCase() === "BUTTON") {
    inputBox.value += element.innerHTML;
  }
}

//Adiciona operadores na resultBox
function insertOperatorInResult(operator) {
  let contentResultBox = resultBox.innerHTML;

  if (hasOperator(contentResultBox) && inputBox.value) {
    resultBox.innerHTML += inputBox.value + operator;
    inputBox.value = "";
  }

  if (
    contentResultBox === "0" ||
    (!hasOperator(contentResultBox) && inputBox.value)
  ) {
    resultBox.innerHTML = inputBox.value + operator;
    inputBox.value = "";
    return;
  }
}

function getResult(element) {
  if (hasOperator(resultBox.innerHTML)) {
    calcResult = eval(resultBox.innerHTML + inputBox.value);
    inputBox.value = "";
    resultBox.innerHTML = calcResult;
  }
}

function buttonOperator(element) {
  if (!inputBox.value) {
    return;
  }

  let cmd = new Map([
    ["◀", () => (inputBox.value = inputBox.value.slice(0, -1))],
    ["C", () => (inputBox.value = "")],
    ["^", () => insertOperatorInResult("**")],
    ["/", () => insertOperatorInResult("/")],
    ["*", () => insertOperatorInResult("*")],
    ["-", () => insertOperatorInResult("-")],
    ["+", () => insertOperatorInResult("+")],
    ["=", () => getResult(element)],
  ]);

  cmd.get(element.innerHTML)();
}

document.addEventListener("click", function (e) {
  const element = e.target;
  if (!notNumbers.includes(element.innerHTML)) {
    addNumber(element);
    return;
  }

  if (notNumbers.includes(element.innerHTML)) {
    buttonOperator(element);
  }
});
