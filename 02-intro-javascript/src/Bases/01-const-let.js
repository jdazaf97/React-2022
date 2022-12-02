
// variables y constantes

 //estos valores se mantienen sus valores siempre por ser constantes (const)
const nombre = 'Juan Felipe';
const apellido = 'Daza Mesa';

 //este valor puede variar por ser let
let valorDado = 5;

 //si queremos agregar un nuevo valo a "valordado" no debemos volver a nombrar la variable puesto que da un error:
//let valorDado = 8; //NO!
//simplemente nombramos la variable y el valor:
valorDado = 8;

 //imprimimos en consola
console.log( nombre, apellido, valorDado );

//Una caracteristica de las variables let es que crean variables scope (osea que se ejecutan en un ambio en particular).

if ( true ) {
    //en este caso la variable "valoddador" nunca se a usado puesto que esta variable let esta en un ambito diferente a las demas (dentro de if) por lo que no genera error.
    let valorDado = 6;

    //de igual forma para una constante se permite crear nuevamente la variable si esta en un ambito diferente:
    const nombre = 'Pablo';//No genera error porquee esta dentro del ambito del IF

    console.log( nombre );
    console.log( valorDado );//aqui el valorDado es 6
}
console.log( valorDado )//aqui el valorDado es 8

        // NOTA: se recomienda no usar var. puesto que puede llevar a diversos problemas
