//O service é responsável por lidar com a lógica de negócios relacionada aos produtos, ele atua como uma camada intermediária entre o controller e o model.
//Processa os dados antes de enviá-los para o controller ou para o model.

const productModel = require("../models/productModel"); //importa o model, que é responsável por interagir com o banco de dados e realizar operações relacionadas aos produtos.

// Função assíncrona que busca todos os produtos cadastrados no banco de dados, ela chama a função findAll do model para obter os produtos.
async function getAllProducts() {
    const products = await productModel.findAll(); //await é usado para o código esperar a resposta do banco de dados antes de continuar a execução.

    return products; //products armazena o resultado da consulta ao banco de dados, a lista de produtos.
}

//Exportando a função getAllProducts para que ela possa ser usada em outros arquivos do projeto, permitindo que outras partes do código possam buscar todos os produtos cadastrados.
module.exports = {
    getAllProducts,
};