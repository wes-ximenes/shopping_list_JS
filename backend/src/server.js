require("dotenv").config(); // Lê o arquivo .env e carrega as variáveis de ambiente definidas nele.

const app = require("./app"); // Importa toda configuração do express que está no arquivo app.js, incluindo as rotas e middlewares.
const pool = require("./database/connection"); // Importa a conexão com o banco de dados PostgreSQL no arquivo connection.js.

const PORT = process.env.PORT || 3000; //Se existir uma porta no arquivo .env, ela será usada. Caso contrário, a porta padrão será 3000.

async function startServer() { //Função assíncrona que inicia o servidor e verifica a conexão com o banco de dados.
    try {
        await pool.query("SELECT NOW()"); // Executa uma consulta simples de data e hora no banco de dados, para testar a conexão.

        console.log("Conectado ao PostgreSQL com sucesso!");

        app.listen(PORT, () => { //Somente se a conexão com o banco de dados for bem-sucedida, o servidor será iniciado na porta definida.
            console.log(`Servidor rodando em http://localhost:${PORT}`); //Mensagem indicando que o servidor está rodando e em qual porta ele está acessível.
        });

    } catch (error) {
        console.error("Erro ao conectar ao PostgreSQL:");
        console.error(error.message);
    }
}

startServer(); // Chama a função para iniciar o servidor e verificar a conexão com o banco de dados.