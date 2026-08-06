//Página para exibir os itens de uma lista de compras específica.

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; //useParams é um hook do React Router que permite acessar os parâmetros da rota atual, como o ID da lista de compras.

function ShoppingListItemsPage() {
    const { shoppingListId } = useParams();
    const [shoppingListItems, setShoppingListItems] = useState([]);//Variável de estado para armazenar os itens da lista de compras.

    //GET
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

    //useEffect para carregar os itens da lista de compras quando a página é carregada.
    useEffect(() => {
        loadShoppingListItems();
    }, []);

    return (
        <div>
            <h1>Itens da Lista de Compras</h1>
            <p>ID da lista: {shoppingListId}</p>
        </div>
    );
}

export default ShoppingListItemsPage;