//Navbar é a barra de navegação do aplicativo, que permite ao usuário navegar entre as páginas de Listas de Compras e Produtos.
//O componente Link do React Router é utilizado para criar links de navegação entre as páginas da aplicação, sem precisar recarregar a página inteira.

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-title">🛒 Shopping List</h2>

            <div className="navbar-links">
                <Link to="/products">
                    Produtos
                </Link>
                <Link to="/shopping-lists">
                    Listas de Compras
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;