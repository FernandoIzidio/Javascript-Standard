import * as datagen from "./modules/dataGenerator";
import "./assets/css/style.css";

const genButton = document.getElementById("gen");
const copyButton = document.getElementById("buttonCopy");
const resultBox = document.getElementById("iresultCPF");
const optionsRadio = document.getElementsByName("punctuation");

function ResponseEvent() {
  let optSelected;
  for (let opt of optionsRadio) {
    if (opt.checked) {
      optSelected = opt.value;
      break;
    }
  }

  if (optSelected === "Sim") {
    resultBox.value = datagen.formatCpf(datagen.generateCpf());
  } else {
    resultBox.value = datagen.generateCpf();
  }
}

copyButton.addEventListener("click", (e) => {
  resultBox.select();
  resultBox.setSelectionRange(0, 99999);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  genButton.addEventListener("click", ResponseEvent);
});
