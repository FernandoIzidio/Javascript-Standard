/*
WebPack - Ferramenta de empacotamento de módulos javascript, responsável por tornar o código estavel para qualquer navegador, e empacotar todos os módulos de uma aplicação em um único bundle

Usado para agrupar, minimificar e transformar código fonte, permitindo maior controle das dependências

Webpack desempenha papel fundamental no desempenho de uma aplicação, além dos processos empacotamentos, minificação, e geração de apenas um arquivo(oque melhora o desempenho e diminui o número de requisições), garante a estabilidade 


Ambientes de uma aplicação:
    -Ambiente de desenvolvimento:
        - logs de erros detalhados
        - código não minificado
        - ferramenta de depuração detalhadas
    - Ambiente de testing:
        - É um pre ambiente de produção, esse ambiente é o responsável por testar a aplicação em condições que seriam encontradas no ambiente de produção.
    - Ambiente de Produção:
        - É o momento que a aplicação está pronta, e vai para consumo de usuário final

webpack.config.js - Arquivo responsavel por implementar as configurações do webpack no projeto.

Pastas e arquivos:
    src -  Pasta onde vai estar o código fonte do projeto
    dist/public/out/release - códigos publicos que podem ser vistos por user. É pasta de saída do projeto

    bundle.js - Pacote de saida


entry - O ponto de entrada da aplicação, responsavel por definir o arquivo principal da aplicação, para assim construir o grafo de dependências 

output - É código fonte visível ao usuário
        path: Caminho de saída do arquivo empacotado
        filename - Nome do arquivo empacotado

loaders - Permite executar transformações em arquivos enquanto eles estão sendo empacotados, por exemplo converter ts para js, converter scss para css, converter js para js-estavel e etc, loaders são responsavel por transpilação/transformação de arquivos antes do empacotamento
    - test - Deve conter uma expressão regular com os tipos de arquivos que os loaders devem transpilar/transformar
    - use - Loaders que serão utilizados na aplicação
            [{
                loader: "babel-loader", - Loader utilizado na aplicação
                presets: [@babel/env] 
            }]
    -exclude - exclui arquivos que não devem ser transpilados/transformados pelo loader, mesmo que correspondam ao padrão

mode - Define o modo de construção do bundle
    Development - Sem minimificação(abreviação) de arquivos, e permite source-maps para mapear melhor os erros.

    Production - 
        - Minificação de arquivos para reduzir tamanho do código
        - Remoção de informações de depuração como console.log.
        - source-maps para o arquivo minificado

    None
     - Não aplica nenhum tipo de otimização no código fonte

module.exports = {
    mode -  Define o modo de construção do bundle
    entry: ".src/" - Arquivo de entrada do projeto, é onde vai ficar o main do projeto, responsavel por gerar o grafo de dependências, para criação do bundle.
    output: {
        path: caminhodesaida. - Define o caminho do arquivo de saida, arquivo bundle
        filename: bundle.js - Define o nome do arquivo de saida
    }
    module: 
        rules - Define as regras, ou tipos de arquivos que serão transpilados/transformados, e quais transpiladores/transformadores serão utilizados na aplicação 
    deevtool: source-map, - Mapeia o codigo fonte, e informa em qual arquivo ocorreu o erro na hora de debugar o arquivo bundle
}

*/
