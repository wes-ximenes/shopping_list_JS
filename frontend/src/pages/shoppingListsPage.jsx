//Página para exibir as listas de compras
//Onde o usuário pode criar, visualizar o histórico, e excluir listas de compras cadastradas no sistema.

import { useEffect, useState } from "react"; //useEffect é um hook do React que permite executar "gatilhos" em componentes funcionais. 
//useState é um hook do React que permite criar variáveis de estado em componentes funcionais.
import axios from "axios"; //axios corresponde a API, faz requisições HTTP para o backend, como GET, POST, PATCH e DELETE.

//Função principal.
function ShoppingListsPage() {
  const [shoppingLists, setShoppingLists] = useState([]); //shoppingLists guarda as listas do backend, setShoppingLists atualiza o valor de shoppingLists.
    
  
  //GET
  async function loadShoppingLists() {
    try {
        const response = await axios.get("http://localhost:3000/shopping-lists"); //axios para faz uma requisição GET para o backend, buscando as listas de compras do backend.

        console.log(response.data);

        setShoppingLists(response.data); //setShoppingLists para atualizar o valor da variável shoppingLists, com as listas de compras cadastradas no sistema.

    } catch (error) {
        console.error(error);
    }
  }


  //POST
  async function createShoppingList() {
    try {
        await axios.post("http://localhost:3000/shopping-lists");//axios para faz uma requisição POST para o backend, criando uma nova lista de compras no backend.

        //Recarrega a lista após criar uma nova.
        await loadShoppingLists();

    } catch (error) {
        console.error(error);
    }
  }


  //PATCH
  async function finishShoppingList(id) {
    try {
        await axios.patch(`http://localhost:3000/shopping-lists/${id}/finish`);//axios para faz uma requisição PATCH para o backend, finalizando a lista de compras no backend.

        //Aguarda a finalização da lista e recarrega a lista de compras.
        await loadShoppingLists();

    } catch (error) {
        console.error("Erro ao finalizar lista:", error);
    }
  }

  //useEffect para carregar as listas de compras quando a página é carregada.
  useEffect(() => {
    loadShoppingLists();
    }, []);


  //INTERFACE
  return (
    <div>
        <h1>Listas de Compras</h1>

        <button onClick={createShoppingList}>
        Nova Lista
        </button>

        {shoppingLists.map((shoppingList) => ( //map para percorrer o array de listas de compras e renderizar cada uma delas na tela.
            <div key={shoppingList.id}>
                <p>ID: {shoppingList.id}</p>

                <p>
                    Criada em:{" "}
                    {new Date(shoppingList.created_at).toLocaleString("pt-BR")}
                </p>

                <p>
                    Finalizada em:{" "}
                    {shoppingList.finished_at
                        ? new Date(shoppingList.finished_at).toLocaleString("pt-BR")
                        : "Em andamento"}
                </p>

                {!shoppingList.finished_at && (
                    <button onClick={() => finishShoppingList(shoppingList.id)}>
                        Finalizar Lista
                    </button>
                )}
            </div>
))}
    </div>
    );
}

export default ShoppingListsPage;