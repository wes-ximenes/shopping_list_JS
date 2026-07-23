const shoppingListItemModel = require("../models/shoppingListItemModel");

//(POST) Cria um novo item em uma lista de compras
async function createShoppingListItem(data) {

    const { shopping_list_id, product_id } = data;

    //Valida se os campos obrigatórios foram fornecidos
    if (!shopping_list_id || !product_id) {
        throw new Error("shopping_list_id e product_id são obrigatórios.");
    }

    //Chama a função create do modelo shoppingListItemModel para criar um novo item na lista de compras, passando o ID da lista de compras e o ID do produto como argumentos.
    const shoppingListItem = await shoppingListItemModel.create(
        shopping_list_id,
        product_id
    );

    return shoppingListItem;
}

//(GET) Busca todos os itens de uma lista de compras.
async function getShoppingListItems(shoppingListId) {

    //Valida se o ID da lista foi informado
    if (!shoppingListId) {
        throw new Error("shoppingListId é obrigatório.");
    }

    //Busca os itens da lista no banco de dados
    const shoppingListItems =
        await shoppingListItemModel.findByShoppingListId(shoppingListId);

    return shoppingListItems;
}

module.exports = {
    createShoppingListItem,
    getShoppingListItems
};