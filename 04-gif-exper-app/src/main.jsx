import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './gifExpertApp';
//imporancion de los estilos de la pagina
import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
);
