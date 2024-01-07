/*
  Node package Manager - Gerenciador de pacotes do node.

  npm init -y -Inicializa um projeto com package.json, tudo que for instalado, sera instalado nas dependências do projeto

  devDependencie - Depedencia que gera arquivo final

  depedencie - Dependências para execucação da aplicação. Exemplo regenerator-runtime e corejs, para permitir usar generators, promisses em navegadores antigos
  
  

  npm i --save-dev  package - Instala um pacote nas devDependecies
  npm i --save-prod package - Instala um pacote como dependecie

  npm i -E - Instala um pacote com versão fixa/estable

  npm i package@version - Instala um versão especifica do pacote

  npm uninstall package - Remove pacotes

  Versions:
     1      .    2     .        5
     major     minor          patch

     major - Alteração total na aplicação, ao ponto de alguns recursos da versão antiga, serem imcopativeis com a versão atual

     minor - Recursos novos introduzidos na aplicação

     patch - Correção de bugs na aplicação
    
     ^version - Indica que o pacote pode ser atualizado em minor(recursos novos) e patch(correção de bugs)

     npm ls - Lista pacotes instalados no projeto

     npm ls --depth=0 - Lista apenas pacotes instalados pelo npm, e não mostra dependências de pacotes instalados

     npm outdated  - Verifica se o pacote esta desatualizado, e as versões possiveis para atualizar, e a ultima versão

     npm update - Atualiza a versão do pacote para ultimo possivel do minor/patch, ou ultima possivel do patch

     ~version - Indica que o pacote pode ser atualizado em patch(correção de bugs)


 */
