const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
/**
 *
 * @param {Array} array
 * @returns {Array}
 */
const shufflee = (array) => array.sort((e) => Math.random() - 0.5);

const randomAscii = {
  getLower() {
    return String.fromCharCode(getRandom(65, 91)).toLowerCase();
  },
  getUpper() {
    return String.fromCharCode(getRandom(65, 91));
  },
  getSymbol() {
    return shufflee(Array.from("!@#$%¨&*()\\/.><,:?")).slice(0, 1).join("");
  },
  getNumber() {
    return String.fromCharCode(getRandom(48, 57));
  },
};

const getPasswd = (qtd, lower, upper, number, symbol) => {
  let sample = [];
  for (let count = 0; count < qtd; count++) {
    lower && sample.push(randomAscii.getLower());
    upper && sample.push(randomAscii.getUpper());
    number && sample.push(randomAscii.getNumber());
    symbol && sample.push(randomAscii.getSymbol());
  }
  sample = shufflee(sample);
  return sample.slice(0, qtd).join("") || "Senha vazia";
};

const configUser = [
  [true, false, false],
  [true, true, false],
  [true, false, true],
  [false, true, true],
  [true, true, true],
];
for (let lista of configUser) {
  console.log(getPasswd(20, true, ...lista));
  console.log(getPasswd(20, false, ...lista));
}
