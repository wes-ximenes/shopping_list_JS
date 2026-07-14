//O arquivo app.js é o ponto de entrada da aplicação, ele configura a aplicação Express.
//Aqui define as rotas e middlewares e exporta a aplicação para ser usada em outros arquivos do projeto.

const express = require("express"); // Importa o framework Express.

const productRoutes = require("./routes/productRoutes"); // Importa as rotas do módulo Products.

const app = express(); // Cria a aplicação Express, é o objeto principal que representa a API e será usado para configurar rotas, middlewares e outras funcionalidades.

app.use(express.json()); //Permite que a API receba dados no formato JSON, converte o corpo da requisição em um objeto JavaScript.

//Rota de teste
app.get("/", (req, res) => { //req é o objeto que representa a requisição HTTP, res é o objeto de resposta HTTP que será enviada de volta ao cliente.
    res.json({
        message: "API Lista de Compras funcionando!"
    });
});

// Registra as rotas de produtos.
app.use("/products", productRoutes);

module.exports = app; // Exporta a aplicação para o arquivo server.js, que é responsável por iniciar o servidor e escutar as requisições HTTP.