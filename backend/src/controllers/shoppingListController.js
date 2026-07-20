//O controller de Shopping List é responsável por receber as requisições HTTP relacionadas às listas de compras,
//Chamar o service correspondente para processar a lógica de negócio e retornar a resposta adequada ao cliente.

const shoppingListService = require("../services/shoppingListService");

//(POST) Cria uma nova lista de compras.
async function createShoppingList(req, res) {
    const shoppingList = await shoppingListService.createShoppingList();

    return res.status(201).json(shoppingList);
}

module.exports = {
    createShoppingList
};