//O routes de Shopping List é responsável por definir as rotas relacionadas às listas de compras e associá-las aos controllers correspondentes.

const express = require("express");

const shoppingListController = require("../controllers/shoppingListController");

const router = express.Router();

//(POST) endpoint para criar uma nova lista de compras.
router.post("/", shoppingListController.createShoppingList);

//(GET) Endpoint para listar todas as listas de compras.
router.get("/", shoppingListController.getAllShoppingLists);

//(PATCH) Endpoint para finalizar uma lista de compras.
router.patch("/:id/finish", shoppingListController.finishShoppingList);

//Exporta o router para ser usado em outros arquivos do projeto, como o app.js, onde as rotas são registradas na aplicação Express.
module.exports = router;