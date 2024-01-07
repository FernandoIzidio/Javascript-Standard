/*
fs.writeFile(path, content, {flag: "w", encoding:"utf-8"})
    path - Caminho do arquivo
    content - Conteúdo a ser inserido no arquivo.
    flag - Modo de abertura do arquivo
    encoding - Codificação do arquivo

fs.readFile(path, {enconding: "utf-8"}) - Le o conteudo do arquivo, e converte o conteúdo do arquivo para uma codificação

*/
const fs = require("fs").promises;
const path = require("path");

const file = path.resolve(__dirname, "texto.txt");

fs.writeFile(file, "BLA BLA BLA BLA", { flag: "w" });

async function readData(path) {
  const dataFile = await fs.readFile(path, { encoding: "utf-8" });
  console.log(dataFile);
}

readData(file);
