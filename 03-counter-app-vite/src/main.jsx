
//instalamos la importacion de react
import React from 'react';

//tambien la importacion del client
import ReactDOM from 'react-dom/client';

//Importacion del FirstApp:
import { FirstApp } from './FirstApp';

//Importacion del counterApp:
import { CounterApp } from './CounterApp';

//aqui vamos a importar una hoja de estilos (CSS) o estilos globales:
import './style.css';

//importacion del HelloWorldApp
// import { HelloWorldApp } from './HelloWorldApp';
   

//Ahora procedemos a renderizar:

//en este caso dentro del HTML queremos ingresar esto dentro del cuerpo de este y en un div con id 'root'
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={100} />
        {/* <FirstApp title='Hola Soy Felipe' /> */}
    </React.StrictMode>
)
