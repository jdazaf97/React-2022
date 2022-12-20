
//usaremos este arreglo como ejemplo para importar a otro archivo

//SIN EMBARGO, debemos determinar que es lo que queremos exportar, por tanto usamos la palabra clave export en ela constante

export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//Tendremos en cuenta que otra forma de realizar una exportacion del archivo es nombrando una exportacion por defecto, para ello en el arreglo anterior se borraria la palabra clave "export" y unicamente se nombraria el arreglo:

    // const heroes2 = [
    //     {
    //         id: 1,
    //         name: 'Batman',
    //         owner: 'DC'
    //     },
    //     {
    //         id: 2,
    //         name: 'Spiderman',
    //         owner: 'Marvel'
    //     },
    //     {
    //         id: 3,
    //         name: 'Superman',
    //         owner: 'DC'
    //     },
    //     {
    //         id: 4,
    //         name: 'Flash',
    //         owner: 'DC'
    //     },
    //     {
    //         id: 5,
    //         name: 'Wolverine',
    //         owner: 'Marvel'
    //     },
    // ];

//ahora para realizar la exportacion simplemente llamariamos la exportacion por defecto con la palabra clave "default":

    // export default heroes2;

//finalmente en el archivo donde se solicita la importacion de esta informacion se hace el mismo llamado:

    //import <nombre_archivo_importado> from './<direccion_del_archivo>';

//EJEMPLO DE EXPORTACION:

    //tenemos el siguiente arreglo "owners", en el cual simplemente dejamos la palabra clave export sin usar default:

    //export const owners = ['DC', 'Marvel'];

    //cuando estemos en el archivo donde queremos importar esta informacion exportada, debemos tener en cuenta que si queremos ingresar el arreglo "owners" y el arreglo creado anteriormente "heroes2" (el cual se dejo como un export default) debemos tener en cuenta que para ingresar una importacion por defecto (heroes2) y una importacion individual (owners), se debe mencionar una desestructuracion de la importacion individual:

        //import heroes2, { owners } from './data/heroes.js'  //ESTO SE HACE DESDE EL OTRO ARCHIVO DONDE SE DEBE IMPORTAR LA INFORMACION.

    //si no se usan las llaves "{}" (mencion de desestructuracion) esto genera un error.