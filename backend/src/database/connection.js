const { Pool } = require("pg"); // Importa a classe Pool do módulo pg, que é usada para gerenciar conexões com o banco de dados PostgreSQL.
require("dotenv").config(); //Lê o arquivo .env e carrega as variáveis de ambiente definidas nele para o processo Node.js.

const pool = new Pool({ // Cria uma nova instância da classe Pool, esse objeto será usado para consultar qualquer parte do banco de dados.
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

module.exports = pool; // Exporta o objeto pool para que ele possa ser usado em outros arquivos do projeto.