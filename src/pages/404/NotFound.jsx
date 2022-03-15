import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404"></div>
        <h1>404</h1>
        <h2>Oops! Pagina no encontrada.</h2>
        <p>
          Lo sentimos pero la pagina que estas buscando no existe o fue
          removida.
        </p>
        <Link to="/">Regresar a la página principal</Link>
      </div>
    </div>
  );
};

export default NotFound;
