/*
Api usada para manipulação de arquivos no back-end

readdir(path) - Lê o diretório e retorna uma lista com nomes de subdiretórios, e arquivos Função assincrona, não para a execução da programação e continua a execução em paralelo
stat(fullpath) - Retorna um objeto com as estatisticas do arquivo


dev - Endereço do Dispositivo onde o arquivo esta armazenado
mode - Permissões octais do arquivo.
nlink - Número de atalhos(referências para o caminho do arquivo) para o arquivo.
uid - User id, identificação do usuário associado ao arquivo.
gid - Group id
rdev - número do dispositivo especial
blksize - Tamanho do bloco utilizado para alocação do arquivo.
ino - Id inode 
size - Tamanho do arquivo em bytes
timestamps:
    AtimeMs: timestamp do ultimo acesso
    MtimeMs: timestamp da ultima modificação.
    CtimeMs: ctime timestamp da ultima mudança de status(permissões, usuário, e etc).
    birthTimeMs: timstamp da criação do arquivo.

timestamp - Quantidade de milisegundos, de 1969 até determinada data 

*/
const fileSystem = require("fs").promises;
const { resolve } = require("path");

async function readdir(path) {
  const root = path || resolve(__dirname);
  const files = await fileSystem.readdir(root);
  walk(files, root);
}

async function walk(files, pathFile) {
  for (let file of files) {
    const dataFile = await fileSystem.stat(resolve(pathFile, file));
    console.log(dataFile);
  }
}

readdir(resolve("frontSide"));
