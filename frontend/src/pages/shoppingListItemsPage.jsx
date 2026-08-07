//Página para exibir os itens de uma lista de compras específica.

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; //useParams é um hook do React Router que permite acessar os parâmetros da rota atual, como o ID da lista de compras.

function ShoppingListItemsPage() {
    const { shoppingListId } = useParams();
    const [shoppingListItems, setShoppingListItems] = useState([]);//Variável de estado para armazenar os itens da lista de compras.
    const [products, setProducts] = useState([]);//Variável de estado para armazenar os produtos disponíveis.
    const [selectedProductId, setSelectedProductId] = useState("");//Variável de estado para armazenar o ID do produto selecionado pelo usuário.

    //GET 1 (Itens da lista de compras específica)
    async function loadShoppingListItems() {
        try {
            const response = await axios.get(
                `http://localhost:3000/shopping-list-items/${shoppingListId}` //axios para faz uma requisição GET para o backend, buscando os itens da lista de compras específica.
            );

            console.log(response.data);

            setShoppingListItems(response.data);//Atualiza a variável de estado com os itens da lista de compras.

        } catch (error) {
            console.error(error);
        }
    }


    //GET 2 (Produtos disponíveis)
    async function loadProducts() {
        try {
            const response = await axios.get( //axios para faz uma requisição GET para o backend, buscando os produtos disponíveis cadastrados
                "http://localhost:3000/products"
            );

            console.log(response.data);

            setProducts(response.data); //Atualiza a variável de estado com os produtos disponíveis.

        } catch (error) {
            console.error(error);
        }
    }


    //POST
    async function addProductToShoppingList() {

        try {

            await axios.post(
                "http://localhost:3000/shopping-list-items", //axios para faz uma requisição POST para o backend, adicionando um produto à lista de compras específica.
                {
                    shopping_list_id: shoppingListId, //Relaciona duas tabelas (shopping_list_items e products) através do ID da lista de compras e do ID do produto selecionado.
                    product_id: selectedProductId
                }
            );

            loadShoppingListItems(); //Atualiza a lista de itens da lista de compras após adicionar um novo item.
            setSelectedProductId(""); //Limpa o estado do produto selecionado após a adição.

        } catch (error) {
            console.error(error);
        }

    }


    //useEffect para carregar os itens da lista de compras quando a página é carregada.
    useEffect(() => {
        loadShoppingListItems();
        loadProducts();
    }, []);

    return (
        <div>
            <h1>Itens da Lista de Compras</h1>
            <p>ID da lista: {shoppingListId}</p>

            <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
            >
                <option value="">Selecione um produto</option>

                {products.map((product) => (
                    <option
                        key={product.id}
                        value={product.id}
                    >
                        {product.name}
                    </option>
                ))}
            </select>

            <button onClick={addProductToShoppingList}>
                Adicionar produto à lista
            </button>
            
            <h2>Produtos da Lista</h2>
            {shoppingListItems.map((item) => (
                <div key={item.id}>
                    {item.product_name}
                </div>
            ))}
        </div>
    );
}

export default ShoppingListItemsPage;