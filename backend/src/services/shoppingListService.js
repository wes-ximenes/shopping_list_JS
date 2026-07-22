//O service de Shopping List é responsável por implementar a lógica de negócio relacionada às listas de compras.
//Ele utiliza o model para interagir com o banco de dados e realizar operações como criar uma nova lista de compras.

const shoppingListModel = require("../models/shoppingListModel");

//(POST) Cria uma nova lista de compras.
async function createShoppingList() {
    const shoppingList = await shoppingListModel.create(); //Chamando a função create do model para criar uma nova lista de compras no banco de dados.

    return shoppingList;
}

//(GET) Busca todas as listas de compras.
async function getAllShoppingLists() {
    const shoppingLists = await shoppingListModel.findAll();

    return shoppingLists;
}

//(PATCH) Finaliza uma lista de compras.
async function finishShoppingList(id) {
    const shoppingList = await shoppingListModel.finish(id);

    return shoppingList;
}

module.exports = {
    createShoppingList,
    getAllShoppingLists,
    finishShoppingList
};