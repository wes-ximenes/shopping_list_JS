//O arquivo app.js é o ponto de entrada da aplicação, ele configura a aplicação Express.
//Aqui define as rotas e middlewares e exporta a aplicação para ser usada em outros arquivos do projeto.

const express = require("express"); // Importa o framework Express.

const productRoutes = require("./routes/productRoutes"); //Importa as rotas do módulo Products.
const shoppingListRoutes = require("./routes/shoppingListRoutes"); //Importa as rotas do módulo Shopping Lists.
const shoppingListItemRoutes = require("./routes/shoppingListItemRoutes"); //Importa as rotas do módulo Shopping List Items.

const app = express(); //Cria a aplicação Express, é o objeto principal que representa a API e será usado para configurar rotas, middlewares e outras funcionalidades.

app.use(express.json()); //Permite que a API receba dados no formato JSON, converte o corpo da requisição em um objeto JavaScript.

//Rota de teste
app.get("/", (req, res) => { //req é o objeto que representa a requisição HTTP, res é o objeto de resposta HTTP que será enviada de volta ao cliente.
    res.json({
        message: "API Lista de Compras funcionando!"
    });
});

//Registra as rotas de produtos.
app.use("/products", productRoutes);

//Registra as rotas de listas de compras.
app.use("/shopping-lists", shoppingListRoutes);

//Registra as rotas de itens da lista de compras.
app.use("/shopping-list-items", shoppingListItemRoutes);

module.exports = app; //Exporta a aplicação para o arquivo server.js, que é responsável por iniciar o servidor e escutar as requisições HTTP.