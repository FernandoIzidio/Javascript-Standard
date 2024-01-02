/*
Fragmentos são containers temporários, muito uteis quando se precisa criar/manipular muitos elemento no DOM

Cada criação/manipulação de um elemento no DOM, custa reflow de desempenho, então para diminuir o número de repaginamentos e repitamentos é criado um fragmento(container temporario) para diminuir o uso direto do DOM


Fragmentos não possuem extrutura de estilo, ou representação visual no DOM
document.createDocumentFragment
*/
