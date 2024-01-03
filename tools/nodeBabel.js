/*
Node é um interpretador javascript, que permite a utilização do javascript no server-side/ back-end

npm - Gerenciador de pacotes do node

npm init -y - Gera um arquivo package.json responsavel por armazenar informações importantes sobre o projeto, suas dependências, scripts de construção, entre outras configurações. Em resumo é utilizado para extruturar e gerenciar as dependências do projeto

npx é que permite executar pacotes/módulos Node.js diretamente da linha de comando, sem a necessidade de instalá-los 
- Ele procura o comando no diretório node_modules/.bin do projeto e executa a versão local do pacote.

npx babel source.js -o new.js --presets=@babel/env -W
npx modulo - Executa determinado módulo como script,  e npx modulo procura o módulo localmente
-Compila um código source.js para uma versão mais antiga e estavel do javascript
- @babel/env - Utiliza as ultimas funcionalidades do ecmascript mesmo em navegador anti

npm run key - Roda o script que esta na chave scripts do package.json

-W(watch) - Modifica o arquivo de destino, sempre que o arquivo fonte é alterado
*/
