/*
O central widget de todo webapp é a classe window
Ele é responsável por agrupar todos os widgets de uma pagina web

DOM - API usada para manipular extrutura, estilo, comportamento das tags de um documento HTML

window > document > html > head + body

functions DOM:
    getComputedStyle("tag") - Retorna objeto com estilo computado em uma tag/elemento

O navegador possui um console que mostra os valores printados por console

Obs: Muitas funções cliente-side não funcionam no back-side

HTTP:
    GET - Usar este metódo quando for necessário receber dados do servidor
    POST - Usar este metódo quando for necessário enviar dados ao servidor, ou enviar dados sensiveis



Metódos uteis da classe window:
    window.alert() -> null/undefined - Mostra mensagem de alerta
    window.confirm()-> bool - Mostra mensagem de ok ou cancel, retorna valor bool
    window.prompt() -> selfinput - Permite que o usuário forneça valores, retorna o proprio valor de input

Metódos uteis de Document:
    getElementById('idname') - Seleciona um elemento pelo id
    querySelector("cssSelector") - Seleciona um elemento pelo seletor css
    createElement("") - Cria um elemento no documento HTML


Metódos uteis de Eventos:
    event.target - Retorna o elemento que emitiu o evento

Metódos uteis de tags:

    tag.addEventListener(event:str, reasonFunction: function) - Se um elemento emitir um evento, retorna uma função em resposta a esse evento

    tag.classList.add("className") - Adiciona uma classe em um elmento
    
    tag.innerHtml - Retorna o conteúdo da tag
    tag.style -  Retorna o estilo da tag
    tag.appendChild("tag") - Adiciona tag filha a tag atual


    */
