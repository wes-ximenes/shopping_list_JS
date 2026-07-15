//O controller é responsável por lidar com as requisições HTTP relacionadas aos produtos.
//Ele recebe as requisições do cliente, chama o service para processar os dados e retorna a resposta para o cliente.

const productService = require("../services/productService"); //importa o service, que é responsável por lidar com a lógica de negócios relacionada aos produtos, antes do model.

//(GET) Função assíncrona que busca todos os produtos cadastrados no banco de dados, ela chama a função getAllProducts do service para obter os produtos.
async function getAllProducts(req, res) { //req é o objeto que representa a requisição HTTP, res é o objeto de resposta HTTP que será enviada de volta ao cliente.
    try {
        const products = await productService.getAllProducts();

        return res.status(200).json(products); //Retorna uma resposta HTTP com status 200 (OK) e envia os produtos em formato JSON contido em 'products' para o cliente.
    } catch (error) {
        return res.status(500).json({
            message: "Erro ao buscar os produtos.",
            error: error.message,
        });
    }
}

// (POST) Função assíncrona responsável por cadastrar um novo produto.
async function createProduct(req, res) {

    try {
        // Chama a service para cadastrar o produto utilizando os dados enviados na requisição.
        const product = await productService.createProduct(req.body); //req.body contém os dados enviados pelo cliente na requisição HTTP, que são passados para a função createProduct do service.

        // Retorna HTTP 201 (Created) juntamente com o produto criado.
        return res.status(201).json(product);

    } catch (error) {

        return res.status(400).json({
            message: error.message,
        });

    }

}


//Exportando a função getAllProducts para que ela possa ser usada em outros arquivos do projeto.
module.exports = {
    getAllProducts,
    createProduct,
};