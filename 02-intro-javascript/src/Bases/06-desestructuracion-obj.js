
//DESESTRUCTURACION O ASIGNACION DESESTRUCTURANTE 

const { useContext } = require("react");

//esta permite desempacar valores de arreglos o propiedades de objetos en distintas variables. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


//para entender un poco este conceptos vamos a extraer los datos de la siguiente constante

const persona = {
    nombre: 'Juan',
    //apellido: 'Mesa',
    edad: '25',
    clave: 'contra123'
};

//habitualmente se haria de la siguiente manera, la cual es un poco tediosa y ocupa muchas lineas de codigo segun la cantidad de valores en la constante:
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

//para hacerlo mas sencillo realizaremos la siguiente forma la cual se entiende como: extraer el valor que se pone entre esas llaves:

    //const { nombre } = persona;//aqui se asigna el valor que debe tomar de persona en este caso extrae el valor que se nombra en las llaves.
    //console.log( nombre );//arroja el nombre de persona

//IMPORTANTE: si por alguna razon ya existe una variable con ese nombre, esta se puede renombrar de la siguiente manera:

    //const { nombre:nombre2 } = persona;//ahora la variable es nombre2
    //console.log( nombre2 );//es importante apuntar al nombre de la variable, en este caso ya no es "nombre" sino "nombre2"

//de igual forma se pueden asignar todas que se contienen en una sola linea:

    //const { nombre, edad, clave } = persona; //nota: pueden ponerse los valores en desorden y no se altera (ejempl: {clave, nombre, edad}).

    // console.log( nombre );
    // console.log( edad );
    // console.log( clave );

//existen muchas formas de usar la desestructuracion como usar una funcion, en el cual en el argumento se ingresa la desestructuracion:
    //NOTA: una caracteristica es que podemos asignar valores por defecto, en este caso el valor de "apellido" lo ingresamos y le damos un valor dentro del argumento, dentro de la desestructuracion del objeto, sin embargo si el objeto posee esa propiedad entonces usa la propiedad asignada inicialmente (Revisar linea 11, quitar como si fuese comentario y en consola se vera el apellido como "Mesa").
const retornaPersona = ( { nombre, edad, clave, apellido = 'Daza' } ) =>{ //Aqui se coloca en el argumento la desestructuracion del objeto

    // console.log( nombre, apellido, edad, clave );

    //otra caracteristica interesante es que podemos realizar la desestructuracion con un return
    return{
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 14.1234,
            lng: -56.2788
        }
    }
};
retornaPersona( persona );//aqui se coloca que significa el argumento y nos arroja los valores en una sola linea en consola

//Desestructuracion del return:
const { nombreClave, anios, latlng:{ lat, lng } } = retornaPersona( persona ); //para especificar que me pongan lat y lng de latlng debemos llamarlo entre llaves dentro de la desestructuracion usando: latlng:{ lat, lng } 
//llamamos a la desestructuracion del return
console.log( nombreClave, anios );
//console.log( latlng ); //ahora ya no se llama asi porque genera un error porque esta indefinida, sino de la siguiente forma:
console.log( lat, lng ); //asi es como se extraen objetos anidados y asignarlos a una constante