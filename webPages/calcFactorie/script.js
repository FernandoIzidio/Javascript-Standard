const main = document.getElementById("main"); //Div onde vai ser implementado as calculadoras

function Calculadora(
  calcContainer,
  mainLayout = [
    ["C", "◀", "^", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", "", ".", "="],
  ],
  plusValue = "+",
  minusValue = "-",
  multiplicationValue = "*",
  divisionValue = "/",
  powValue = "^",
  equalOperator = "="
) {
  this.calcContainer = calcContainer;
  this.mainLayout = mainLayout;
  this.numberColunms = mainLayout[0].length;
  this.numberRows = this.mainLayout.length;
  this.equalOperator = equalOperator;
  const keymap = new Map([
    [powValue, "**"],
    [plusValue, "+"],
    [minusValue, "-"],
    [divisionValue, "/"],
    [multiplicationValue, "*"],
  ]);
  this.operators = [...keymap.keys()];

  if (typeof this.calcContainer === "undefined") {
    throw TypeError("Not Implemented Container");
  }
  let total = 0;
  const divisor = this.numberColunms;
  for (let linha of mainLayout) {
    total += linha.length;
  }

  if (!Number.isInteger(total / divisor)) {
    throw Error("Rows lenght of grid don't match");
  }

  let NotNum;
  this.operators.forEach((value) => {
    if (!isNaN(value)) {
      NotNum = false;
    }
    NotNum = NotNum ?? true;
  });
  if (this.operators.length !== 5 || !NotNum) {
    throw Error("The number of operator must be 5 and should not be a number");
  }

  //Private Methods

  const findSpecialButton = (search) => {
    list = document.querySelectorAll(`#${this.calcContainer.id} div button`);

    for (let elemento of list) {
      if (elemento.textContent == search) {
        return elemento;
      }
    }
    return false;
  };

  const addTextInDisplay = (element) => {
    if (element.innerHTML === ".") {
      if (isNaN(this.inputBox.value) || this.inputBox.value.includes("."))
        return;
      if (!this.inputBox.value) return;
    }

    this.inputBox.value += element.innerHTML;
  };

  const clearDisplay = (element) => {
    const elemento = findSpecialButton(element);
    elemento.addEventListener("click", (e) => {
      this.inputBox.value = "";
    });
  };

  const delChar = (element) => {
    const elemento = findSpecialButton(element);
    elemento.addEventListener("click", (e) => {
      this.inputBox.value = this.inputBox.value.slice(0, -1);
    });
  };

  const operators = (element) => {
    let operatorPressed = keymap.get(element.innerHTML);
    let contentInput = this.inputBox.value.replace("(", "").replace(")", "");
    let contentResult = this.resultBox.innerHTML
      .replace("(", "")
      .replace(")", "");
    if (!contentInput) return;
    if (!Number(contentInput)) return;

    //Is not a invalid Number
    if (!isNaN(contentResult)) {
      this.resultBox.innerHTML = this.inputBox.value + operatorPressed;
      this.inputBox.value = "";
    } else if (contentInput) {
      this.resultBox.innerHTML += this.inputBox.value + operatorPressed;
      this.inputBox.value = "";
    }
  };

  const getResult = () => {
    if (!this.inputBox.value.replace("(", "").replace(")", "")) return;

    if (isNaN(this.resultBox.innerHTML.replace("(", "").replace(")", ""))) {
      this.resultBox.innerHTML = eval(
        `${this.resultBox.innerHTML}${this.inputBox.value}`
      );

      this.inputBox.value = "";
    }
  };

  const keyboardText = (key) => {
    key = key.key;

    let continueFunc;
    for (let linha of this.mainLayout) {
      if (linha.includes(key)) {
        continueFunc = true;
      }
    }
    if (!continueFunc) return;

    const buttons = document.querySelectorAll("button");

    for (let button of buttons) {
      if (button.innerHTML === key) {
        button.dispatchEvent(new Event("click"));
        return;
      }
    }
  };

  //Public Methods
  //Main Method of Calc
  this.defaultVersion = () => {
    this.setGui();
  };

  this.setGui = (width = 6, height = 3) => {
    //set colunm width and row height

    this.buttonLayout = document.createElement("div");

    this.buttonLayout.style.display = "grid";
    this.buttonLayout.style.gridTemplateColumns = `repeat(${this.numberColunms}, ${width}rem)`;
    this.buttonLayout.style.gridTemplateRows = `repeat(${
      this.numberRows + 2
    }, ${height}rem)`;

    this.resultBox = document.createElement("span");
    this.resultBox.classList.add("resultBox");
    this.resultBox.innerHTML = "0";
    this.buttonLayout.appendChild(this.resultBox);

    this.inputBox = document.createElement("input");
    this.inputBox.classList.add("inputBox");
    this.buttonLayout.appendChild(this.inputBox);
    let butt;
    const fragtemp = document.createDocumentFragment();
    for (let row of this.mainLayout) {
      for (let button of row) {
        butt = document.createElement("button");
        if (button === this.equalOperator)
          butt.addEventListener("click", (e) => getResult());
        if (this.operators.includes(button))
          butt.addEventListener("click", (e) => operators(e.target));
        if (!isNaN(button) || [".", "(", ")"].includes(button))
          butt.addEventListener("click", (e) => addTextInDisplay(e.target));
        butt.innerHTML = button;
        fragtemp.appendChild(butt);
      }
    }

    this.inputBox.addEventListener("keypress", (e) => {
      e.preventDefault();
      e.code;
      keyboardText(e);
    });
    this.buttonLayout.appendChild(fragtemp);
    this.calcContainer.appendChild(this.buttonLayout);
  };

  //Set clearButton, delButton
  this.cleanFeatures = (clearButton, delButton) => {
    clearDisplay(clearButton);
    delChar(delButton);
  };
}

function createCalc(
  containerid,
  mainlayout,
  plusValue,
  minusValue,
  multiplicationValue,
  divisionValue,
  powValue,
  equalOperator,
  width,
  height,
  clearButton = "C",
  delButton = "◀"
) {
  container = document.createElement("div");
  container.id = containerid;
  main.appendChild(container);

  calcObject = new Calculadora(
    container,
    mainlayout,
    plusValue,
    minusValue,
    multiplicationValue,
    divisionValue,
    powValue,
    equalOperator
  );
  calcObject.setGui(width, height);
  calcObject.cleanFeatures(clearButton, delButton);
}

createCalc("c1");

calc2Container = document.createElement("div");
calc2Container.id = "c2";
main.appendChild(calc2Container);

calc2 = new Calculadora(
  calc2Container,
  [
    ["(", ")", "~", "%"],
    ["7", "8", "9", "'"],
    ["4", "5", "6", '"'],
    ["1", "2", "3", "!"],
    ["0", "<", ".", "$"],
  ],
  "!",
  '"',
  "'",
  "%",
  "~",
  "$"
);

calc2.setGui(9, 4);
calc2.cleanFeatures("<", "<");

createCalc("c3");

createCalc("c4");

for (let calcNumber = 5; calcNumber < 100; calcNumber++) {
  createCalc("c" + calcNumber);
}
