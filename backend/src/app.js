const express = require("express"); // Importa o módulo express, que é um framework para criar nossa API REST.

const app = express(); //Cria a instância do express, que será usada para definir as rotas e middlewares da nossa API.

app.use(express.json()); // Permite que a API receba dados em JSON

// Rota de teste
app.get("/", (req, res) => { // Define uma rota GET na raiz da API, que responde com uma mensagem de teste.
    res.json({
        message: "API Lista de Compras funcionando!"
    });
});

module.exports = app; // Exporta a instância do express para que ela possa ser usada em outros arquivos do projeto.