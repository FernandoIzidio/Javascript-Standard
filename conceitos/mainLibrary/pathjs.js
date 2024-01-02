/*
Módulo muito util para manipulação de arquivos e diretórios

Módulos mais robustos para manipulação de arquivos: path-extra ou path.join do pacote cross-path
*/

const path = require("path");

console.log(path.normalize("/pasta1/pasta2/../arquivo.txt"));
