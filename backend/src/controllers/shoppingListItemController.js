const shoppingListItemService = require("../services/shoppingListItemService");

//(POST) Cria um novo item em uma lista de compras.
async function createShoppingListItem(req, res) {

    try {

        //Chama o service para criar um novo item na lista de compras, passando os dados da requisição (req.body) como argumento.
        const shoppingListItem = await shoppingListItemService.createShoppingListItem(req.body);

        res.status(201).json(shoppingListItem);

    } catch (error) {

        res.status(400).json({
            error: error.message
        });

    }

}

module.exports = {
    createShoppingListItem,
};