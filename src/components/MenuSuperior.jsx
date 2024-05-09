import React from "react";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-yop">
      <div className="container">
        <a className="navbar-brand" href="#">
          Controle Pessola de Livros
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inclusao
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Manutenção
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Resumo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;
