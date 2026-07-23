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

//(GET) Busca todos os itens de uma lista de compras, relacionando com a tabela products (JOIN) para obter o nome do produto e ordenando pelo campo display_order da tabela products.
async function findByShoppingListId(shoppingListId) {

    const query = `
        SELECT
            sli.id,
            sli.shopping_list_id,
            sli.product_id,
            p.name AS product_name,
            sli.purchased
        FROM shopping_list_items sli
        INNER JOIN products p
            ON p.id = sli.product_id
        WHERE sli.shopping_list_id = $1
        ORDER BY p.display_order ASC;
    `;

    const result = await pool.query(query, [shoppingListId]);

    return result.rows;
}

module.exports = {
    create,
    findByShoppingListId
};