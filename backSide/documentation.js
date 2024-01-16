/*
Node é um interpretador javascript, que permite a utilização do javascript no server-side/ back-end

__dirname - Diretório de trabalho do main(módulo em execução)

npm(node package manager) - Gerenciador de pacotes do node
npx(node package Execute) - Usado para executar pacotes node locais do projeto  como script.

npm run key - Roda o script que esta na chave scripts do package.json. É usado para executar um script de construção

A chave de scripts de package.json por padrão executa todo argumento que recebe com npx

npm init -y - Gera um arquivo package.json responsavel por armazenar informações importantes sobre o projeto, suas dependências, scripts de construção, entre outras configurações. Em resumo é utilizado para extruturar e gerenciar as dependências do projeto

npm install - instala as dependências do projeto

const package = require("pkgname") - importa um módulo no node.

module.exports = {} - Atributo exports é utilizado para exportar dados em um módulo node

dependecies - Dependências necessárias para execução da aplicação. // Ambiente de produção
devDependecies - Dependências necessárias para desenvolvimento da aplicação. //ambiente de desenvolvimento

-W(watch) - Modifica o arquivo de destino, sempre que o arquivo fonte é alterado

Tree-shaking - Processo que visa eliminar código morto de uma aplicação para melhorar desempenho

Grafo de dependências - Representação visual ou extrutural das relações dos módulos de uma aplicação, é responsável por definir qual módulo depende de qual módulo em uma aplicação. O grafo de depedências do webpack, vai analisar o arquivo principal da aplicação(responsavel por integrar as partes da aplicação e executar a aplicação) e baseado nas dependências do arquivo principal da aplicação vai gerar um bundle empacotando o arquivo main, com suas dependências. Em resumo ele analisa o arquivo principal e suas dependências para gerar o bundle

Minificação de arquivos -  Visa otimizar um código javascript, para melhorar desempenho e diminuir tempo de download, seja renomeando nome de variaveis e funções, removendo comentários e espaços em branco, em resumo minificação de arquivos se refere ao processo de redução de tamanho de arquivos

*/
