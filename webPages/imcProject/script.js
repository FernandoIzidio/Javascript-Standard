const form = document.getElementById("imcForm");
const result = document.getElementById("imcResult");
const imcCategories = new Map();

imcCategories.set(18.5, "Abaixo do Peso");
imcCategories.set(24.9, "Abaixo do Peso");
imcCategories.set(29.9, "Abaixo do Peso");
imcCategories.set(34.9, "Abaixo do Peso");
imcCategories.set(39.9, "Abaixo do Peso");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  result.innerHTML = "";

  let weight = String(document.getElementById("iweight").value);
  let height = String(document.getElementById("iheight").value);
  weight = parseFloat(weight.replace(",", "."));
  height = parseFloat(height.replace(",", "."));

  let imc = weight / height ** 2;
  let categorie;

  if (imc < 18.5) {
    categorie = "Abaixo do peso";
  } else if (imc < 24.9) {
    categorie = "Peso Normal";
  } else if (imc < 29.9) {
    categorie = "Sobrepeso";
  } else if (imc < 34.9) {
    categorie = "Obesidade grau 1";
  } else if (imc < 39.9) {
    categorie = "Obesidade grau 2";
  } else {
    categorie = "Obesidade grau 3";
  }

  result.style.display = "block";
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  result.appendChild(p1);
  result.appendChild(p2);

  p1.innerHTML = Number(`${imc}`).toFixed(2);
  p2.innerHTML = categorie;
});
