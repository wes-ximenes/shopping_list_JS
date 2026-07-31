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

  const [editingProductId, setEditingProductId] = useState(null); //(PATCH) Variável de estado editingProductId, que é null.
  //Essa variável vai armazenar o id do produto que o usuário está editando no sistema.

  
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

    //Verificação para impedir que o usuário cadastre um produto com nome vazio ou apenas com espaços em branco.
    //trim() é um método que remove os espaços em branco do início e do final de uma string.
    //Se o nome do produto for vazio ou apenas com espaços em branco, o usuário vai receber um alerta pedindo para digitar o nome do produto.
    if (newProduct.trim() === "") {
      alert("Digite o nome do produto.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/products", {
        name: newProduct,
        display_order: products.length + 1, //display_order + 1, para que o novo produto seja exibido no final da lista de produtos cadastrados no sistema.
      }); //(POST) Aqui usamos o axios para fazer uma requisição POST para o backend, enviando o nome do novo produto que o usuário digitou no input.

      await loadProducts(); //Chamamos a função loadProducts para atualizar a lista de produtos cadastrados no sistema, para que o novo produto seja exibido na interface do usuário sem precisar F5.
      
      setNewProduct(""); //setNewProduct("") para limpar o input depois que o usuário cadastrar um novo produto.

      console.log("Produto cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadProducts(); //Usamos useEffect para executar a funções quando a página é carregada, para que os produtos cadastrados no sistema sejam exibidos na interface do usuário.
  }, []);


  //PATCH
  async function updateProduct() {
    if (newProduct.trim() === "") { //Verificação para impedir que o usuário renomeie um produto com nome vazio ou apenas com espaços em branco.
      alert("Digite o nome do produto.");
      return;
    }

    try {

      //Aqui usamos o find para encontrar o produto que o usuário está editando, usando o id do produto que está armazenado na variável editingProductId.
      const product = products.find(
        (product) => product.id === editingProductId
      );

      await axios.patch( //O axios faz uma requisição PATCH para o backend, enviando o nome do produto que o usuário digitou no input, e o id do produto que ele está editando.
        `http://localhost:3000/products/${editingProductId}`,
        {
          name: newProduct, //Aqui enviamos o nome do produto que o usuário digitou no input, para que o backend atualize o nome do produto no banco de dados.
          display_order: product.display_order, //Enviamos o display_order do produto que o usuário está editando, para que o backend não altere a ordem de exibição dos produtos cadastrados no sistema.
        }
      );
      
      //loadProducts para atualizar a lista de produtos, pro produto editado ser exibido na interface do usuário sem precisar F5.
      await loadProducts(); //

      setNewProduct("");
      setEditingProductId(null); //Limpa a variável editingProductId, para que o botão de cadastro volte a mostrar "Cadastrar" ao invés de "Salvar".

      console.log("Produto atualizado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }


  //DELETE
  async function deleteProduct(id) {

    //!window.confirm é uma função que exibe uma confirmação ao usuário se ele realmente deseja excluir o produto, ele sempre retorna um valor booleano, true se clicar em "OK" e false se ele clicar em "Cancelar".
    if (!window.confirm("Deseja realmente excluir esse produto?")) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/products/${id}`); //axios.delete faz uma requisição DELETE para o backend, enviando o id do produto que o usuário quer excluir do sistema.

      //Atualiza a lista para remover o produto da tela sem precisar dar F5.
      await loadProducts();

      console.log("Produto excluído com sucesso!");
    } catch (error) {
        console.error(error);
      }
  }


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

    {/* BOTÃO DE CADASTRO/EDIÇÃO
    -Se existir um id de produto armazenado na variável editingProductId, significa que estamos editando um produto, então o botão vai mostrar "Salvar" e a função updateProduct() vai ser chamada,
    caso contrário, vai mostrar "Cadastrar" e a função createProduct() vai ser chamada.
    */}
    <button
      onClick={() => {
        if (editingProductId) {
          updateProduct();
        } else {
          createProduct();
        }
      }}
    >
      {editingProductId ? "Salvar" : "Cadastrar"}
    </button>

    {products.map((product) => ( //Aqui usamos o map para percorrer o array de produtos cadastrados no sistema, e para cada produto, vamos criar um elemento <div> com o nome do produto e um botão de editar.
      <div key={product.id}>
        {product.name}

        <button
          onClick={() => { //Quando o usuário clicar no botão de editar, vamos atualizar a variável newProduct com o nome do produto que ele quer editar, e atualizar a variável editingProductId com o id do produto que ele quer editar.
            setNewProduct(product.name);
            setEditingProductId(product.id);
          }}
        >
          Editar
        </button>

        <button 
          onClick={() => deleteProduct(product.id)}>
          Excluir
        </button>
      </div>
    ))}
  </div>
);
}

export default ProductsPage;