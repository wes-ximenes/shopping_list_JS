//routes é responsável por definir as rotas da aplicação, ele mapeia as requisições HTTP para os métodos do controller correspondentes.
//Precisamos importar o express, que é o framework web do Node.js, usado para criar servidores e gerenciar rotas,
//Ele contém o método Router() que é usado para criar roteadores, objetos que podem ser usados para definir rotas e manipuladores de requisições HTTP.
const express = require("express"); 
const productController = require("../controllers/productController"); //importa o controller, que é responsável por lidar com as requisições HTTP relacionadas aos produtos.

const router = express.Router(); //Cria a instância do roteador, que será usada para definir as rotas relacionadas aos produtos.

router.get("/", productController.getAllProducts); //Define a rota GET /products, que será usada para buscar todos os produtos cadastrados no banco de dados.

module.exports = router; //Exporta o roteador para que ele possa ser usado em outros arquivos do projeto.