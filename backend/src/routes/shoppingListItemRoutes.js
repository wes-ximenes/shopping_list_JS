const express = require("express");
const router = express.Router();

//Importa o controller responsável por lidar com as requisições relacionadas aos itens da lista de compras.
const shoppingListItemController = require("../controllers/shoppingListItemController");

//POST /shopping-list-items (rota para criar um novo item em uma lista de compras)
router.post("/", shoppingListItemController.createShoppingListItem);

module.exports = router;