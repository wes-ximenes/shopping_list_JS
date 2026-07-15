//Aqui é o modelo de dados para os produtos, responsável por interagir com o banco de dados e realizar operações relacionadas aos produtos.

const pool = require("../database/connection"); // Importa o objeto pool do arquivo connection.js, que é usado para executar consultas no banco de dados PostgreSQL.

//(GET) Função assíncrona que busca todos os produtos no banco de dados, ela vai rodar uma consulta SQL para selecionar todos os registros da tabela "products".
async function findAll() {
    const result = await pool.query(
        `
        SELECT *
        FROM products
        ORDER BY display_order ASC
        `
    );

    return result.rows;
}

//(POST) Função assíncrona que cria um novo produto no banco de dados, ela vai rodar uma consulta SQL para inserir um novo registro na tabela "products".
async function create(name, displayOrder = 0) {
    const query = `
        INSERT INTO products (name, display_order)
        VALUES ($1, $2)
        RETURNING *;
    `;

    const values = [name, displayOrder];

    const result = await pool.query(query, values);

    return result.rows[0];
}

// Exporta a função findAll para que ela possa ser usada em outros arquivos do projeto, permitindo que outras partes do código possam buscar todos os produtos no banco de dados.
module.exports = {
    findAll,
    create,
};