class ValidaFormulario {
  formEvent(id) {
    this.formBox = !!id
      ? document.querySelector("form#id")
      : document.querySelector("form");
    this.formBox.addEventListener("submit", (e) => this.eventHandler(e));
  }

  contentInputToggled() {
    document.addEventListener("input", (e) => {
      const inputEmmited = e.target;
      const errorMessage = document.querySelector(`#${inputEmmited.id} + span`);
      errorMessage.innerHTML = "";
    });
  }

  eventHandler(e) {
    //Submit event is emmited
    e.preventDefault();
    this.cleanError();
    let validForm = [];
    validForm.push(this.emptyField()); // check form fields
    validForm.push(this.isMaximumExceded(this.fieldPasswdId, 6, 12)); // check max limit of passwd inputs
    validForm.push(this.isInvalidCpf()); // check cpf
    validForm.push(this.isInvalidUser()); // check user
    if (validForm.every((value) => !value)) {
      alert("Formulário Enviado");
      this.formBox.submit();
    }
  }

  emptyField() {
    const inputs = document.querySelectorAll("input");

    let erroWarn;
    let flag;
    for (let input of inputs) {
      if (!input.value) {
        erroWarn = `${input.name} não pode estar vazio`;
        erroWarn = erroWarn.charAt(0).toUpperCase() + erroWarn.slice(1);
        this.showError(input.id, erroWarn);
        flag = true;
      }
    }
    flag = flag ?? false;

    return flag;
  }

  isMaximumExceded(inputId, min, max) {
    const input = document.getElementById(`${inputId}`);

    if (!(input.value.length >= min && input.value.length <= max)) {
      this.showError(
        input.id,
        `Minimo ${min} caracters, Máximo ${max} caracters`
      );
      return true; //If maximium exced return error True
    }
    return false;
  }

  isInvalidUser() {
    const inputUser = document.getElementById(`${this.fieldUserId}`);
    const regExpression = RegExp(/^[\da-zA-Z]+$/);
    if (this.isMaximumExceded(this.fieldUserId, 3, 12)) return true;

    if (!regExpression.test(inputUser.value)) {
      this.showError(inputUser.id, "Apenas caracters e números são permitidos");
      return true;
    }
    return false;
  }

  isInvalidCpf() {
    const inputCpf = this.formBox.querySelector(`#${this.fieldId}`);
    this.cpfClean = inputCpf.value.replace(/\D+/g, "");

    if (!(this.cpfClean.length === 11)) {
      this.showError(inputCpf.id, "PRECISA TER 11 NÚMEROS");
      return true;
    }

    let nineNumbers = this.cpfClean.slice(0, 9);

    let digit1 = ValidaFormulario.getDigit(nineNumbers);

    nineNumbers += digit1;
    let digit2 = ValidaFormulario.getDigit(nineNumbers);

    let newCPF = nineNumbers + digit2;
    if (!(newCPF === this.cpfClean)) {
      this.showError(inputCpf.id, "Cpf invalido");
      return true;
    }
    return false;
  }

  showError(elementId, msg) {
    const errorMessage = document.querySelector(`#${elementId} + span`);
    if (!errorMessage.innerHTML) {
      errorMessage.style.color = "#F00";
      errorMessage.innerHTML = `${msg}`;
    }
  }

  cleanError() {
    let spans = document.querySelectorAll("span");
    for (let box of spans) {
      box.innerHTML = "";
    }
  }

  static getDigit(partialCpf) {
    let digit =
      Array.from(partialCpf)
        .map((valor) => {
          return Number(valor);
        })
        .reverse()
        .reduce(
          (acumalador, elemento) => {
            acumalador.total += elemento * acumalador.multiplier;
            acumalador.multiplier++;
            return acumalador;
          },
          { total: 0, multiplier: 2 }
        ).total % 11;
    digit = digit >= 2 ? 11 - digit : 0;
    return String(digit);
  }

  constructor(fieldCpfId, fieldUserId, fieldPasswdId) {
    this.fieldPasswdId = fieldPasswdId;
    this.fieldId = fieldCpfId;
    this.fieldUserId = fieldUserId;
    this.contentInputToggled();
    this.formEvent();
  }
}

form1 = new ValidaFormulario("icpf", "iuser", "ipasswd");
