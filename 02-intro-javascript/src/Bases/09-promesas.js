

//PROMESAS EN JS


//para entender el concepto de una promesa en JS realizaremos el codigo de la promesa.

//const promesa = new Promise( <CallBack> ); 

//tenderemos en cuenta que las promesas son asincronas por lo cual se va a ejecutar primero el codigo que es sincrono (todo lo que es secuencial), y las promesas se quedan en una pila de trabajo o tareas de JS, una vez finaliza lo sincrono se ejecutaran las promesas

        //mas informacion acerca de las promesas: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

//Las promesas se crean con un argumento el cual es un call back, el cual contiene dos argumentos llamado "resolve", el cual se ejecuta cuando la promesa es exitosa y "reject" cuando la promesa falla en el siguiente ejemplo los llamaremos tal cual asi pero el nombre que le colocamos puede ser diferente:

    //const promesa = new Promise( (resolve, reject) => {

        //setTimeout(() => {
            
            //console.log( 'Dos segundos despues.' );
            //resolve();

        //}, 2000 );//setTimeout es una funcion de JS que permite ejecutar una tarea en cierto tiempo, el primer argumento es la funcion a realizar y el segun es el tiempo en milisegundos que tarda en ejecutarlo

    //} )


//para llamar a la promesa cuando se cumple o no, un metodo es llamando el argumento (en este caso "resolve") y llamando al codigo de lo que debe realizar si la promesa se cumple, para llamar a la promesa tomamos la constante de la promesa y nombramos uno de los tres metodos:
    
    //metodo then: este significa que la promesa se realizo de manera correcta o se llama al resolve.
    //metodo catch: la promesa dio un error o se llamo al reject.
    //metodo finally: este es algo que se ejecuta despues del then y despues del catch (no importa cual se ejecute este se ejecutara al final).

//se usa de la siguiente forma: promesa.then( <callBack> )

    // promesa.then( () => {
    //     console.log( 'then de la promesa' );
    // } )


//Tarea:
//vamos a realizar una importacion de la clase anterior del getHeroeById dentro del setTimeout con un argumento de 2 para getHeroeById.

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
        
//         const heroe = getHeroeById(2);
//         console.log(heroe);

//     }, 2000 );

// } )


//solucion:

//Para la solucion debemos verificar que las variables que se esta llamando a importar, debe estar exportada.
//finalmente con el siguiente codigo definimos que vamos a importar y donde esta ubicado:

import { getHeroeById } from './Bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
        
//         const heroe = getHeroeById(2);
//         //console.log(heroe);
//         resolve( heroe );//Ahora haremos que ese resultado aparezca dentro del then de la promesa, para ello colocaremos el argumento como heroe
//         //reject( 'no se pudo encontrar el heroe' ); //ahora usando el error, sin embargo sin usar catch genera un error por lo que creamos un catch

//     }, 2000 );

// } )

// promesa.then( (heroe) => {
//     console.log( 'heroe: ', heroe );
// } )

// //Creamos un catch para ejecutar el reject:
// .catch( err => console.warn( err ) );


//Ahora vamos a crear una promesa donde se mande el argumento del heroe que se solicita:

//creamos primero una constante en donde recibiremos el id que se quiere buscar:
const getHeroeByIdAsync = (id) => {

    const promesa = new Promise( (resolve, reject) => {

        setTimeout(() => {
            
            const heroe = getHeroeById(id);
            //debemos crear una condicion en donde cuando el id es correcto (verdadero) nos mande el resolve y cuando no (falso) nos mande el reject:
            if ( heroe ){
                resolve( heroe );
            }else{
                reject( 'no se pudo encontrar el heroe' );
            }

        }, 2000 );

    } )

    return promesa;//llamamos el retunr de la promesa puesto que sin esto, getHeroeByIdAsync toma como si fuese un valor vacio
}

//llamamos al heroe, debemos determinar el  then para cuando sea verdadero y el catch cuando la promesa sea errada
getHeroeByIdAsync(2)
    .then( heroe => console.log('heroe: ', heroe) )
    .catch( err => console.warn( err ) );
    
    //otra forma de hacerlo:
    // .then( console.log )
    // .catch( console.warn );