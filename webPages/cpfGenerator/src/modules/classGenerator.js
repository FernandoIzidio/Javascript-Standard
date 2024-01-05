export class CPF {
  /**
   *
   * @param {string} cpfInput
   */
  constructor(cpfInput) {
    this.cleanCPF = cpfInput.replace(/\D/, "");
  }

  validCPF() {
    const nineNumbers = this.cleanCPF.slice(0, 9);
    const firstDigit = String(CPF.getDigit(nineNumbers));
    const secDigit = String(CPF.getDigit(nineNumbers + firstDigit));
    return nineNumbers + firstDigit + secDigit === this.cleanCPF;
  }

  /**
   *
   * @param {string} cpfInput
   */
  static formatCPF(cpfInput) {
    return (
      cpfInput.slice(0, 3) +
      "." +
      cpfInput.slice(3, 6) +
      "." +
      cpfInput.slice(6, 9) +
      "-" +
      cpfInput.slice(9)
    );
  }

  /**
   *
   * @param {string} cpfinput
   */
  static getDigit(cpfinput) {
    const tempCpf = Array.from(cpfinput);
    const sum = tempCpf
      .reverse()
      .map((number) => Number(number))
      .reduce(
        (acumulador, number) => {
          acumulador.sum += acumulador.multiplicador * number;
          acumulador.multiplicador++;
          return acumulador;
        },
        { multiplicador: 2, sum: 0 }
      ).sum;

    return sum % 11 >= 2 ? 11 - (sum % 11) : 0;
  }
}
