import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';



describe('Pruebas en <FirstApp />', () => { 

    //creamos la constante title al inicio para aplicarlo a todos los test
    const title= 'Hola Soy Juan Felipe';
    const subTitle= 'Hola Soy un Subtitulo';

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render( <FirstApp title={title} /> );
        expect( container ).toMatchSnapshot();
        
    });

    test('Debe mostrar el mensaje literal de "Hola Soy Juan Felipe"', () => { 

        render( <FirstApp title={title} /> );
        expect( screen.getByText(title) ).toBeTruthy();
        //screen.debug();

    });

    test('Debe de mostrar el titulo en un h1', () => { 

        render( <FirstApp title={title} /> );
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title );

    });

    test('Debe de mostrar que el subtitulo enviado por props', () => { 

        render( <FirstApp title={title} subTitle={ subTitle } /> );
        expect( screen.getAllByText(subTitle).length ).toBe(2);

    });

})
