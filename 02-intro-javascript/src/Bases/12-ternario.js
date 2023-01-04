
//OPERADOR CONDICIONAL TERNARIO

    //El operador condicional ternario es una manera corta de hacer una decision.
//el siguiente ejemplo es una forma tradicional de verificacion:

const activo = true;

    // let mensaje = '';

    // if ( activo ) {
    //     mensaje = 'Activo';
    // }else{
    //     mensaje = 'Inactivo';
    // }

//otra forma de realizar lo anterior pero de manera simplificada es crear una asignacion a una variable el cual en este caso es en mensaje, en este caso usaremos el operador condicional ternario: const <nombre de la contatnte> = ( <condicion> ) ? ( <cuando se cumple condicion> ) : ( <cuando no se cumople condicion> );

    // const mensaje = ( !activo ) ? 'Activo' : 'Inactivo'; //en la condicion podemos preguntar si es verdadero o falso: const <nombre de la contatnte> = ( <condicion> === <true / false> ) ? ( <cuando se cumple condicion> ) : ( <cuando no se cumople condicion> ); en este caso no es necesario porque activo es un booleano

//existiran casos en donde solo queremos ejecutar codigo cuando la condicion se cumple, de lo contrario no se quiere hacer nada, normalmente se usaria el null cuando la condicion es falsa:
 
    //const mensaje = ( !activo ) ? 'Activo' : null;

//la manera para realizar lo anterior es usando el operador and (&&) esto teniendo en cuento que activo es 'true', seguido de lo que queremos que se ejecute:

    const mensaje = activo && 'Activo';//al ejecutar y activo es true, nos imprime "Activo" pero si negamos el activo (!activo) entonces nos regresa un false, esta es una forma corta de hacer un if

console.log( mensaje );