fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((responseConverted) => {
    renderContentInPage(responseConverted);
  });

function renderContentInPage(response) {
  console.log(response);
  const resultBox = document.querySelector("#resultado");

  const table = document.createElement("table");

  for (let objeto of response) {
    const tableRow = document.createElement("tr");

    const name = document.createElement("td");
    name.innerHTML = objeto.name;
    tableRow.appendChild(name);

    const gender = document.createElement("td");
    gender.innerHTML = objeto.gender;
    tableRow.appendChild(gender);

    const age = document.createElement("td");
    age.innerHTML = objeto.age;
    tableRow.appendChild(age);

    const address = document.createElement("td");
    address.innerHTML = objeto.address;
    tableRow.appendChild(address);

    table.appendChild(tableRow);
  }
  resultBox.appendChild(table);
}
