//Aqui criamos a página de produtos, que é onde o usuário vai poder ver os produtos cadastrados no sistema.
//function ProductsPage() é um componente, uma função que retorna uma interface para interação do usuário.

import { useEffect, useState } from "react"; //useState é um hook usado para criar variáveis de estado, que são variáveis que podem mudar de valor durante a execução do programa.
//useEffect outro hook, usado para executar uma função quando o componente é renderizado, ou seja, quando a página é carregada. É como um gatilho que ativa uma função quando a página é carregada.
import axios from "axios";

function ProductsPage() {
  const [products, setProducts] = useState([]); //(GET)Aqui criamos uma variável de estado chamada products, que é um array vazio. Essa variável vai armazenar os produtos cadastrados no sistema.
  //o use State garante que ela poderá ser atualizada e que a interface do usuário será re-renderizada quando isso acontecer.
  //products é a variável que armazena os produtos cadastrados no sistema, e setProducts é a função que vai atualizar o valor dessa variável.

  const [newProduct, setNewProduct] = useState(""); //(POST) Variável de estado newProduct, que é uma string vazia. 
  //Essa variável vai armazenar o nome do novo produto que o usuário vai cadastrar no sistema.

  //GET
  async function loadProducts() {
    try {
      const response = await axios.get("http://localhost:3000/products"); //Aqui usamos o axios para fazer uma requisição GET para o backend.
      console.log(response.data); //Usamos o console.log para exibir no console do navegador os produtos cadastrados no sistema, que são retornados pelo backend.

      setProducts(response.data); //Aqui usamos a função setProducts para atualizar o valor da variável products com os produtos cadastrados no sistema.
    } catch (error) {
      console.error(error);
    }
  }
  
  //POST
  async function createProduct() {
    try {
      await axios.post("http://localhost:3000/products", {
        name: newProduct,
        display_order: products.length + 1, //display_order + 1, para que o novo produto seja exibido no final da lista de produtos cadastrados no sistema.
      }); //(POST) Aqui usamos o axios para fazer uma requisição POST para o backend, enviando o nome do novo produto que o usuário digitou no input.

      await loadProducts(); //Chamamos a função loadProducts para atualizar a lista de produtos cadastrados no sistema, para que o novo produto seja exibido na interface do usuário sem precisar F5.

      console.log("Produto cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadProducts(); //Usamos useEffect para executar a funções quando a página é carregada, para que os produtos cadastrados no sistema sejam exibidos na interface do usuário.
  }, []);

  
  //INTERFACE
  return (
  <div>
    <h1>Produtos</h1>

    <input //entrada de texto para o usuário digitar o nome do novo produto que ele quer cadastrar no sistema.
      type="text"
      value={newProduct} //diz pro react que o valor do input é que estiver na variável newProduct.
      onChange={(event) => setNewProduct(event.target.value)} //diz pro react que quando o usuário digitar algo no input, o valor digitado vai ser atualizado e armazenado na variável newProduct.
      placeholder="Nome do produto" //placeholder é o texto que aparece dentro do input quando ele está vazio, para dar uma dica pro usuário do que ele deve digitar.
    />
    <button onClick={createProduct}>Cadastrar</button>

    {products.map((product) => (
      <div key={product.id}>
        {product.name}
      </div>
    ))}
  </div>
);
}

export default ProductsPage;