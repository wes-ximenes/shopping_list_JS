//App.jsx é o arquivo principal do frontend.
//Aqui configuramos as rotas da aplicação utilizando React Router.
//React Router é uma biblioteca do React que permite criar rotas na aplicação, para que o usuário possa navegar entre diferentes páginas sem precisar recarregar a página inteira.
//Navbar é o componente do react router que contém os links de navegação entre as páginas da aplicação.

import { BrowserRouter, Routes, Route } from "react-router-dom";
//BrowserRouter permite navegar entre diferentes páginas da aplicação sem precisar recarregar a página inteira.
//Routes agrupa todas as rotas da aplicação.
//Route define uma rota da aplicação, onde path é o caminho da rota, e element é o componente que vai ser renderizado quando o usuário acessar a rota.

import ProductsPage from "./pages/ProductsPage";
import ShoppingListsPage from "./pages/ShoppingListsPage";
import Navbar from "./components/Navbar";
import { Navigate } from "react-router-dom";
//Navigate é um componente do React Router que permite redirecionar o usuário para outra rota da aplicação.

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/" element={<Navigate to="/shopping-lists" />} />                
                <Route
                    path="/shopping-lists"
                    element={<ShoppingListsPage />}
                />
            </Routes>

        </BrowserRouter>
    );
}

export default App;