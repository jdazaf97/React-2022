
//DESESTRUCTURACION DE ARREGLOS

//se comprende el mismo termino que la desestructuracion de objetos sin embargo en este caso claramente se trabajan con arreglos. para empezar a entender este concepto primero crearemos un arreglo:

const personajes = ['Laura', 'Daniela', 'Natalia'];

//para obtener de manera individual cada uno de los valores del arreglo tendriamos que llamarlos segun su posicion (inicia desde 0).
    // console.log( personajes[0] );//Laura
    // console.log( personajes[1] );//Daniela
    // console.log( personajes[2] );//Natalia

//si queremos desestructurar el arreglo simplemente crearemos una constante como se hizo en la leccion anterior

const [ P1 ] = personajes;//notese que en este caso el arreglo P1 es igual a laura, anteriormente colocabamos textualmente el nombre del cvalor del arreglo, por lo que mostramos que no se necesita realmente ese nombrem sino que podemos darle un nombre cualquiera a la variable.

console.log( P1 );//Laura

//si nosotros queremos hacer que salga el segundo valor del arreglo, tendremos en cuenta la posicion de los arreglos, por lo que si queremos que salga el segundo valor indicaremos que ignore el primer valor:

const [ , P2 ] = personajes;//como ven la coma " , " muestra que existe un valor anterior el cual se deja vacio por lo que no se necesita.
console.log( P2 );//Daniela

//de igual forma para cada uno de los valores:
const [ , , P3 ] = personajes;
console.log( P3 );//Natalia

//De igual forma podriamos extraer arreglos de una funcion de flecha
const retornaArreglo = () =>{
    return ['ABC', 123];
};

const [Letras, Numeros] = retornaArreglo();

console.log( Letras, Numeros );




//Tarea:
//1. el primer valor del arreglo se llamara "nombre".
//1. el segundo valor del arreglo se llamara "setNombre".

        // const usar = ( valor ) => {
        //     return [ valor, ()=>{ console.log('HOLA MUNDO') } ];
        // }

        // const arr = usar( 'Nombre' );









//Solucion:
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('HOLA MUNDO') } ];
}

const [ Nombre, setNombre ] = useState( 'Nombre' );

console.log( Nombre );
setNombre();