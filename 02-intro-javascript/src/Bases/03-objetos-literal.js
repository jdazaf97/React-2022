
//OBJETOS LITERALES

    //debemos tener en cuenta inicialmente que cuando vemos los corcheres o llaves '{}' en consola o en cualquier lugar se entiende que eso se refiere a un objeto literal (o diccionarios, depende del leguaje de programacion estos cambian el nombre), por lo que para definir un objeto se hace de la siguiente forma:

const persona1 = {
    nombre: 'Juan'
}

//NOTA: Los objetos trabajan en general con pares de valores, en donde tendremos en cuenta una llave y un valor: [llave]: '[valor]', como se ve en el ejemplo anterior de la constante persona.

//Llamamos a consola
console.log ( persona1 );

//Si unicamente quiero recuperar el valor especifico (en consola) del objeto se se hace el llamado con un punto seguido del nombre de la llave:
console.log ( persona1.nombre );

//si queremos poner mas propiedades simplemente dentro del objeto separamos con comas:
const persona = {
    nombre: 'Felipe',
    apellido: 'Daza',
    edad: 25,  
    direccion: { //Tambien podemos anidar objetos dentro de objetos, funciones, metodos, etc.
        ciudad: 'Bogota',
        zip: 1234567,
        lat: 89.098765,
        lon: 43.212345,
    },//puede ser una buena practica terminar con una coma.
};

//dos formas para imprimir en consola, mas que nada para poder visualizar los datos del objeto
console.log( persona );
//console.table( persona );


//si queremos clonar un objeto (es decir sus propiedades) podemos usar el operador spread ( ...[nombre del objeto] ), de esta forma evitamos problemas al reasignar las variabeles:
const person2 = { ...persona }; //se crea una constante y en su objeto hacer referencia con el operador spread al objeto a clonar.
person2.nombre = 'Juan';
person2.apellido = 'Mesa';

console.log( person2 );