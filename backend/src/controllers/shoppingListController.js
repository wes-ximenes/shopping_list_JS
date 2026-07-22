//O controller de Shopping List é responsável por receber as requisições HTTP relacionadas às listas de compras.
//Chama o service correspondente para processar a lógica de negócio e retornar a resposta adequada ao cliente.

const shoppingListService = require("../services/shoppingListService");

//(POST) Cria uma nova lista de compras.
async function createShoppingList(req, res) {
    const shoppingList = await shoppingListService.createShoppingList();

    return res.status(201).json(shoppingList);
}

//(GET) Retorna todas as listas de compras.
async function getAllShoppingLists(req, res) {
    const shoppingLists = await shoppingListService.getAllShoppingLists();

    return res.status(200).json(shoppingLists);
}

//(PATCH) Finaliza uma lista de compras.
async function finishShoppingList(req, res) {
    const { id } = req.params; //req.params é um objeto que contém os parâmetros da rota, neste caso, o id da lista de compras a ser finalizada.

    const shoppingList = await shoppingListService.finishShoppingList(id);

    return res.status(200).json(shoppingList);
}

module.exports = {
    createShoppingList,
    getAllShoppingLists,
    finishShoppingList
};