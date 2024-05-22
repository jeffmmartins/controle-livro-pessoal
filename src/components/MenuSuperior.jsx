import React from "react";
import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-yop">
      <div className="container">
        <a className="navbar-brand" href="#">
          Controle Pessola de Livros
        </a>
        <ul className="navbar-nav">
          <Link to="/" className="nav-link">Inclusão</Link>
          <li className="nav-item">
          <Link to="/manut" className="nav-link">Manutenção</Link>
          </li>
          <li className="nav-item">
          <Link to="/resumo" className="nav-link">Resumo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;
