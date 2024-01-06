import * as getStrength from "zxcvbn";

export class Password {
  //Dicionário com defaults e dicionário com as predefinições do usuário
  /**
   *
   * @param {String} passwd
   */
  constructor(passwd) {
    this.passwd = passwd;
  }

  static getStrengthPasswd(passwd) {
    const score = getStrength(passwd);
    const passwdLevel = new Map([
      [0, "Muito Fraca"],
      [1, "Fraca"],
      [2, "Mediana"],
      [3, "Forte"],
      [4, "Muito Forte"],
    ]);
    return passwdLevel.get(score.score);
  }

  static getRandomSample(array, size) {
    const shuffled = array.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  }

  /**
   * @typedef {Object} PasswordConfig
   * @property {boolean} lower - Incluir letras minúsculas na senha.
   * @property {boolean} upper - Incluir letras maiúsculas na senha.
   * @property {boolean} number - Incluir números na senha.
   * @property {boolean} symbol - Incluir símbolos na senha.
   */

  /**
   *
   * @param {Number} lenght
   * @param {PasswordConfig} configUser
   * @returns {string}
   */
  static generatePasswd(lenght = 25, configUser) {
    const configDefaults = {
      lower: false,
      upper: false,
      number: false,
      symbol: false,
    };

    const setChars = {
      lower: "abcdefghijklmnopqrstuvwxyz",
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      number: "0123456789",
      symbol: "!@#$%^&*()_-+=<>?/",
    };

    //Mesclar as flags de confiUser com configDefault, para ter as configurações da senha
    const options = Object.assign({}, configDefaults, configUser);

    let sampleChar = "";
    Object.keys(configDefaults).forEach((key) => {
      //Verificar quais flag mescladas retornam true, as que retornarem serão usados com key do setChar para obeter o valor associado
      if (options[key]) {
        sampleChar += setChars[key];
      }
    });

    const passwd = Password.getRandomSample(
      Array.from(sampleChar),
      lenght
    ).join("");
    return passwd;
  }
}
