
//importamos el Hook useState
import {useState} from 'react';

//importanto prop types
import PropTypes from 'prop-types';

//exportacion y contenido del counterApp
export const CounterApp = ( {value} ) => {

    const [ counter, setCounter ] = useState( value );
    
    //Aumenta tamano en 1
    const handleAdd = (event) => {
        // console.log(event);
        setCounter( counter + 1 );
    }

    //Disminuye handleRes
    const handleSbt = (event) => {
        setCounter( counter - 1 );
    }

    //Resetea el contador
    const handleRes = (event) =>{
        setCounter( value );
    }
    
    
    return (        
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSbt }> -1 </button>
            <button aria-label='btn-reset' onClick={ handleRes }> Reset </button>
        </>
    )
}

//definiendo prop Types
CounterApp.protoTypes = {
    //condicion
    value: PropTypes.number.isRequired,
}