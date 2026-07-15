//O service é responsável por lidar com a lógica de negócios relacionada aos produtos, ele atua como uma camada intermediária entre o controller e o model.
//Processa os dados antes de enviá-los para o controller ou para o model.

const productModel = require("../models/productModel"); //importa o model, que é responsável por interagir com o banco de dados e realizar operações relacionadas aos produtos.

//(GET) Função assíncrona que busca todos os produtos cadastrados no banco de dados, ela chama a função findAll do model para obter os produtos.
async function getAllProducts() {
    const products = await productModel.findAll(); //await é usado para o código esperar a resposta do banco de dados antes de continuar a execução.

    return products; //products armazena o resultado da consulta ao banco de dados, a lista de produtos.
}

//(POST) Função assíncrona responsável por cadastrar um novo produto no banco de dados.
async function createProduct(data) {

    // Desestrutura o objeto recebido, extraindo o nome e a ordem de exibição do produto.
    const { name, display_order } = data;

    // Verifica se o nome do produto foi informado.
    if (!name) {
        throw new Error("O nome do produto é obrigatório.");
    }

    // Chama o model para inserir o produto no banco de dados.
    const product = await productModel.create(name, display_order);

    // Retorna o produto criado.
    return product;
}


//Exportando a função getAllProducts e createProduct para que elas possam ser usadas em outros arquivos do projeto.
module.exports = {
    getAllProducts,
    createProduct,
};