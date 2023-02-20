
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';


describe('Pruebas en 08-imp-exp', () => { 

    test ('getHeroeById debe retornar un heroe por ID',() =>{

        const id = 1;
        const hero = getHeroeById( id );

        // console.log(heroe);

        //pidiendo un heroe que si existe
        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });
    
    
    test ('getHeroeById debe retornar undefined si no existe el ID',() =>{

        const id = 100;
        const hero = getHeroeById( id );

        // console.log(heroe);

        //pidiendo un heroe que no existe
        expect( hero ).toBeFalsy();
    });

    //tarea: getHeroesByOwner
    //Debe retornar un arreglo con los heroes de DC
    //length === 3
    //toEqual al arreglo filtrado

    test ('getHeroesByOwner debe retornar heroes de DC', () =>{

        const owner = 'DC';
        const hero = getHeroesByOwner( owner );

        // console.log(hero)

        expect( hero ).toHaveLength(3);
        expect( hero ).toEqual( [ {id: 1, name: 'Batman', owner: 'DC'}, {id: 3, name: 'Superman', owner: 'DC'}, {id: 4, name: 'Flash', owner: 'DC'} ] );

    })

    //debe retornar un arreglo con los heroes de Marvel
    //length === 2
    test ('getHeroesByOwner debe retornar heroes de Marvel', () =>{

        const owner = 'Marvel';
        const hero = getHeroesByOwner( owner );

        // console.log(hero)

        expect( hero ).toHaveLength(2);
        expect( hero ).toEqual( [ {id: 2, name: 'Spiderman', owner: 'Marvel'}, {id: 5,name: 'Wolverine',owner: 'Marvel'} ] );

    })

 });