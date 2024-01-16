const express = require("express");
const app = express();

app.get("/", (req, response) => {
  response.send(`
  <html>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
        background-color: #0f0;
    }

    a {
        display: block;
        text-decoration: none;
        color: #fff;
        background-color: #1ab;
        border: 1px solid black;
        padding: 10px;
        border-radius: 10px;
        width: max-content;
        text-align: center;
        font-weight: bolder;
    }

    h1, label {
        color: #fff;
    }


  </style>
  </head>

  <body>
    <h1>Bem Vindo ao Site</h1>
    <a href="./contatos">Contatos</a>

    <form action="/" method="POST">
    <p>
        <label for="iname">Nome:</label>
        <input type="text" id="iname">
    </p>
        <button type="submit">Registrar</button>
    </form>

  </body>
  </html>
  
  `);
});

app.post("/", (req, res) => {
  res.send(
    `
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
          background-color: #0f0;
      }
  
      h1, label {
          color: #fff;
      }
  
  
    </style>
    </head>
  
    <body>
      <h1>Registrado com sucesso</h1>
    </body>
    </html>
    

    `
  );
});

app.get("/contatos", (req, resp) => {
  resp.send(`
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
  
    <body>
      <h1>Bem Vindo a Seção de Contatos</h1>
      
    </body>
    </html>
    
    

    `);
});

app.listen(3001, () => {
  console.log("http://localhost:3001");
  console.log("Servidor express rodando na porta 3001");
});
