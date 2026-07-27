//Aqui criamos a página de produtos, que é onde o usuário vai poder ver os produtos cadastrados no sistema.
//function ProductsPage() é um componente, uma função que retorna uma interface para interação do usuário.

import { useEffect, useState } from "react"; //useState é usado para criar variáveis de estado, que são variáveis que podem mudar de valor durante a execução do programa.
//useEffect é usado para executar uma função quando o componente é renderizado, ou seja, quando a página é carregada. É como um gatilho que ativa uma função quando a página é carregada.
import axios from "axios";

function ProductsPage() {
  const [products, setProducts] = useState([]); //Aqui criamos uma variável de estado chamada products, que é um array vazio. Essa variável vai armazenar os produtos cadastrados no sistema.
  //o use State garante que ela poderá ser atualizada e que a interface do usuário será re-renderizada quando isso acontecer.
  //products é a variável que armazena os produtos cadastrados no sistema, e setProducts é a função que vai atualizar o valor dessa variável.

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products"); //Aqui usamos o axios para fazer uma requisição GET para o backend.
        console.log(response.data); //Usamos o console.log para exibir no console do navegador os produtos cadastrados no sistema, que são retornados pelo backend.

        setProducts(response.data); //Aqui usamos a função setProducts para atualizar o valor da variável products com os produtos cadastrados no sistema.
      } catch (error) {
        console.error(error);
      }
    }

    loadProducts();
  }, []);

  return ( //Aqui retornamos a interface do usuário, que é o que vai ser exibido na tela.
  <div>
    <h1>Produtos</h1>

    {products.map((product) => ( //Aqui usamos o método map para percorrer o array de produtos e exibir cada produto na tela.
      <div key={product.id}>
        {product.name}
      </div>
    ))}
  </div>
);
}

export default ProductsPage;