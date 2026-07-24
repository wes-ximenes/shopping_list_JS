const express = require("express");
const router = express.Router();

//Importa o controller responsável por lidar com as requisições relacionadas aos itens da lista de compras.
const shoppingListItemController = require("../controllers/shoppingListItemController");

//POST /shopping-list-items (rota para criar um novo item em uma lista de compras).
router.post("/", shoppingListItemController.createShoppingListItem);

//GET /shopping-list-items/:shoppingListId (rota para buscar todos os itens de uma lista de compras específica).
router.get( "/:shoppingListId", shoppingListItemController.getShoppingListItems);

//PATCH /shopping-list-items/:id (Rota para atualizar o status de compra de um item da lista)
router.patch("/:id", shoppingListItemController.updatePurchased);

module.exports = router;