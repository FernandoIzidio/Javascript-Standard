import { Password } from "./modules/passwdStrenght";
import "./assets/css/style.css";

const passwdBox = document.querySelector("#passwd"); // span
const spinner = document.querySelector("#spinner"); // div
const passwdStatus = document.querySelector("#passwdStatus"); // div
const passwdLenght = document.querySelector("#ilenght"); // input range
const labelLenght = document.querySelector("#charLenght"); //span

function generatePasswd(length) {
  const configUser = {};

  /**
   * @type {Element}
   */
  document.querySelectorAll("input[type='checkbox']").forEach((element) => {
    configUser[element.id] = element.checked;
  });
  console.log(configUser);
  const senha = new Password(
    Password.generatePasswd(Number(length), configUser)
  );
  passwdBox.innerHTML = senha.passwd;
  passwdLenght.value = senha.passwd.length;
  labelLenght.innerHTML = senha.passwd.length;
  passwdStatus.innerHTML = Password.getStrengthPasswd(senha.passwd);
}

function refreshPasswd() {
  labelLenght.innerHTML = passwdLenght.value;
  generatePasswd(passwdLenght.value);
}

document.addEventListener("DOMContentLoaded", (e) => {
  generatePasswd(18);

  passwdLenght.addEventListener("input", (e) => {
    labelLenght.innerHTML = passwdLenght.value;
    refreshPasswd();
  });

  spinner.addEventListener("click", (e) => {
    generatePasswd(passwdLenght.value);
  });

  document.addEventListener("change", (e) => {
    /**
     * @type {Element}
     */
    const element = e.target;
    if (element.getAttribute("type") === "checkbox") {
      generatePasswd(passwdLenght.value);
    }
  });
});
