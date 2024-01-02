const form = document.querySelector("form");
const data = [];

form.onsubmit = (event) => {
  event.preventDefault();
  const name = form.querySelector("#iname").value;
  const surname = form.querySelector("#isurname").value;
  const email = form.querySelector("#iemail").value;
  const passwd = form.querySelector("#ipasswd").value;
  const gender = form.querySelector('input[name="Sexo"]:checked').value;

  data.push({
    nome: name,
    sobrenome: surname,
    email: email,
    password: passwd,
    sexo: gender,
    showData: () => {},
  });

  console.log("Dados:");

  for (const persondata of data) {
    console.log(
      `Nome: ${persondata.nome}\nSobrenome: ${persondata.sobrenome}\nEmail: ${persondata.email}\nSenha: ${persondata.password}\nSexo: ${persondata.sexo}`
    );
  }
};
