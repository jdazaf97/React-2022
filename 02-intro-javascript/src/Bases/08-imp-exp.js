
//IMPORT, EXPORT Y FUNCIONES COMUNES DE ARREGLOS

//nosotros podemos importar informacion de otros archivos al archivo actual, para ello debemos tener en cuenta el directorio del archivo que queremos importar, y en ese archivo a importar debemos determinar que informacion queremos exportar (para entenderlo debemos ir a la carpeta: data/heroes.js).

//una forma de importar un archivo es usando la palabra reservada "import" la cual su sintaxis es de la siguiente manera: import { [informacion que queremos importar] } from '[ubicacion del archivo a importar]'. NOTA, al escribir la ubicacion del archivos omitir espacios.

    import { heroes } from '../data/heroes'
    console.log( heroes );

//Para entender un poco el funcionamiento realizaremos el siguiente ejercicio:
    //Debemos retornar un heroe segun el id que se especifica al llamar en cosola:

    // const getHeroeById = (id) => {
    //     return heroes.find();
    // }
    
    // console.log( getHeroeById(2) );



//Solucion:

//Debemos tener en cuenta la condiciones que se requiere, ene ste caso nos debe dar segun el id.
//recordemos que find recibe una funcion como argumento que normalmente se conoce como callback, en este ejercicio lo realizamos con una funcion de flecha.

    // const getHeroeById = (id) => {
    //     //return true; //realizamos pruebas con true para revisar los valores que arroja
    //     return heroes.find( ( heroe ) => { //Funcion de flecha para el callback, esto quiere decir que find va a hacer un barrido de todos elementos internamente y por cada iteracion se extrae el heroe
    //         if (heroe.id === id) { //ahora le diremos especificamente segun que condicion me extrae cierto daro del arreglo importado, en este caso el id.
    //              return true;
    //         }
    //     } );
    // }

    // console.log( getHeroeById(2) );

//Una manera de simplificar la anterior solucion es la siguiente:

const getHeroeById = (id) => {
    //return true; //realizamos pruebas con true para drevisar los valores que arroja
    return heroes.find( heroe => heroe.id ===id); //aqui simplemente se pregunta que si el heroe.id es igual al id, entonces retorna verdadero, lo por que nos da el mismo resultado
}

console.log( getHeroeById(2) );

//Ahora se quiere devolver a quien pertenece el heroe sin embargo para este caso no se necesita el find porque este solo devuelve uno, sino que se usa el filter puesto que este crea un nuevo arreglo junto con todos los elementos que cumplan la condicion implementada por la funcion.


const getHeroeByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner === owner);
}

console.log( getHeroeByOwner('Marvel') )


//DOCUMENTACION UTILIZADA:

    //METODO FIND: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    //METODO FILTER: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter