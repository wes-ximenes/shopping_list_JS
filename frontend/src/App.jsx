//App.jsx é o arquivo principal do frontend.
//Aqui configuramos as rotas da aplicação utilizando React Router.
//React Router é uma biblioteca do React que permite criar rotas na aplicação, para que o usuário possa navegar entre diferentes páginas sem precisar recarregar a página inteira.

import { BrowserRouter, Routes, Route } from "react-router-dom";
//BrowserRouter permite navegar entre diferentes páginas da aplicação sem precisar recarregar a página inteira.
//Routes agrupa todas as rotas da aplicação.
//Route define uma rota da aplicação, onde path é o caminho da rota, e element é o componente que vai ser renderizado quando o usuário acessar a rota.

import ProductsPage from "./pages/ProductsPage";
import ShoppingListsPage from "./pages/ShoppingListsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingListsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/shopping-lists" element={<ShoppingListsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;