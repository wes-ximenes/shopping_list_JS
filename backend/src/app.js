const express = require("express");

const app = express();

// Permite que a API receba dados em JSON
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
    res.json({
        message: "API Lista de Compras funcionando!"
    });
});

module.exports = app;