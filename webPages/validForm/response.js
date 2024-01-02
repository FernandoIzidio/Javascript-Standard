const queryString = window.location.search;
const dataUrl = new URLSearchParams(queryString);
const resultBox = document.getElementById("dataRegistred");

function createElement(label, content) {
  const result = document.createElement("p");
  result.innerHTML = label + " " + content;
  resultBox.appendChild(result);
}

createElement("Nome:", dataUrl.get("name"));
createElement("Sobrenome:", dataUrl.get("surname"));
createElement("CPF:", dataUrl.get("cpf"));
createElement("Usuário:", dataUrl.get("user"));
createElement("Senha:", dataUrl.get("passwd"));
