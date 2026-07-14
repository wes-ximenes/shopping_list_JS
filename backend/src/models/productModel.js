//Aqui é o modelo de dados para os produtos, responsável por interagir com o banco de dados e realizar operações relacionadas aos produtos.

const pool = require("../database/connection"); // Importa o objeto pool do arquivo connection.js, que é usado para executar consultas no banco de dados PostgreSQL.

// Função assíncrona que busca todos os produtos no banco de dados, ela vai rodar uma consulta SQL para selecionar todos os registros da tabela "products".
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

// Exporta a função findAll para que ela possa ser usada em outros arquivos do projeto, permitindo que outras partes do código possam buscar todos os produtos no banco de dados.
module.exports = {
    findAll,
};