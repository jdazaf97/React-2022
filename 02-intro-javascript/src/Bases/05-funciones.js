
//FUNCIONES EN JS

//una funcion es un procedimiento que contiene un conjunto de instrucciones que realizan una tarea. en JS se entiende una funcion de la siguiente manera:

    // function saludar ( nombre1 ) {
    //     return `hola, ${ nombre1 }`;
    // }
    // console.log( saludar( 'Juan' ) )

//sin embargo esto puede llevar a cometer errorres al crear constantes y otras demas variables, por lo que se recomienda crear funciones de la siguiente manera:
const saludo = function ( nombre ){ //se recomienta usar const y no let, puesto que asi nunca se cambiaria el cavalor de esta.
    return `Hola, ${ nombre }`;
}
console.log( saludo( 'felipe' ) );// resultado: Hola, felipe


//otra forma de crear una funcion es con una funcion de flecha, el cual cambia la sintaxis en donde cambiamos la palabra "function" por "=>"
const saludo2 = ( nombre ) =>{
    return `Hola otra vez, ${ nombre }`;
}
console.log( saludo2( 'felipe' ) );//resultado": hola otra vez, felipe


//otra forma para simplificar aun mas junto con la funcion de flecha es simplificando si esta funcion es un Return:
const saludo3 = ( nombre ) => `Hola otra vez x3, ${ nombre }`;
console.log( saludo3( 'felipe' ) );//resultado: hola otra vez x3, felipe


//de igual forma creando funciones sin algun argumento:
const saludo4 = () => `Hola Mundo`;
console.log( saludo4() );//resultado: Hola Mundo

    //Todas estas funciones son correctas, como se ve da el mismo resultado sin embargo la funcion del saludo3 es mucho mas ligera y comoda (opinion personal).

//En la funcion flecha se debe tener en cuenta que existen funciones mas complejas en las cuales le debemos hacer entender a JS que se quiere retornar un objeto dentro de esta, por lo que se emplea despues de la fecha la funcion dentro de parentesis:

    // const getUser = () => {
    //     return {
    //         uid: 'QWE123',
    //         username: 'user_123'
    //     }
    // }
    // console.log( getUser() )
//como vimos en el ejemplo anterior, si quitamos las llaves de la funcion y el return este genera un error porque logicamente no lo percibe como un objeto, por lo que en este caso para quitar el return se reemplazara poniendo la funcion dentro de parentesis dejandolo como un objeto implicito:

const getUser = () => ({
            uid: 'QWE123',
            username: 'user_123'
        });
    console.log( getUser() );

//en los ejemplos anteriores (los ejemplos de saludos con template strings) tambien se pueden poner entre parentesis (ejemplo: (`Hola Mundo`) ), sin embargo es "opcional" puesto que esta funcion es mucho mas simple, de una u otra forma da el mismo resultado.

//Tarea: para la siguiente funcion...
    //1. Transformar a una funcion de flecha
    //2. Debe retornar un objeto implicito 

        // function getUsuarioActivo( nombre ) {
        //     return{
        //         uid: 'ABC123',
        //         username: nombre
        //     }
        // };

    // const usuarioActivo = getUsuarioActivo( 'Juan Felipe' );
    // console.log( usuarioActivo );











    


//Solucion:

const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC123',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo( 'Juan Felipe' );
console.log( usuarioActivo );