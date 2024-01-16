/*
Express - Framework back end web projetado para simplificar o desenvolvimento de aplicações web, e API.

Express é dependência de execução

nodemon - Dependência de desenvolvimento

Rota -  São urls ou endereços onde é feito uma requisição

API - É uma aplicação para transferência de dados entre sistemas.


Recursos uteis do framework Express.js:
    Servidor HTTP - Com poucas linhas de código é possível criar um servidor HTTP para lidar com requisições do cliente

    Gerenciamento de Rotas - Com Express.js é possível manipular facilmente rotas/url/enderços, e retornar a respota adequada a cada rota.
    
    Middleware - Requisições podem ser modificadas, processadas, antes mesmo de chegar a rota final

    Integração com varios banco de dados.

    Gestão de Sessão e Cookies - Fornece suporte a gerenciamento de sessões e cookies

    Suporte a APIs Restfull - Possui recursos que facilitam a criação de APIs restfull

    Extensivel - Servidores em express são extremamente extensiveis

const express =  require('express');
app = express() - Inicializa um servidor express

app.get(address/rota, (req, response) => {}) - Trata requisições do tipo get em determinada rota/ endereço e retorna uma response para essas requisições get
    response.send(msg) - Envia uma response em resposta a requisição get


app.post(rota, (req, response) => {}) - Trata de requisições do tipo POST em uma rota em especifico, e retorna uma response em resposta a essas requisições post

app.listen(port) - Hospeda o servidor em uma porta em especifico do local host


*/
