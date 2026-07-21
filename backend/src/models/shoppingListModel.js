//Modelo de Shopping List, responsável por interagir com o banco de dados e realizar operações relacionadas às listas de compras.

const pool = require("../database/connection");

//(POST)Cria uma nova lista de compras no banco de dados e retorna a lista criada.
async function create() {
    const query = `
        INSERT INTO shopping_lists
        DEFAULT VALUES
        RETURNING *;
    `;

    const result = await pool.query(query);

    return result.rows[0];
}

//(GET) Busca todas as listas de compras cadastradas.
async function findAll() {
    const query = `
        SELECT *
        FROM shopping_lists
        ORDER BY created_at DESC;
    `;

    const result = await pool.query(query);

    return result.rows;
}

module.exports = {
    create,
    findAll
};