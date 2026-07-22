const pool = require("../database/connection"); //Importa a configuração do banco de dados, que é responsável por criar a conexão com o banco de dados PostgreSQL.

//(POST) Cria um novo item dentro de uma lista de compras
async function create(shoppingListId, productId) {

     //Query SQL para inserir um novo item na tabela shopping_list_items, associando-o a uma lista de compras e a um produto específico da tabela products.
    const query = `
        INSERT INTO shopping_list_items
        (shopping_list_id, product_id)
        VALUES ($1, $2)
        RETURNING *;
    `;
    //
    const values = [shoppingListId, productId];

    const result = await pool.query(query, values);

    return result.rows[0];
}

module.exports = {
    create,
};