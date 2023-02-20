import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';



describe('Pruebas en <FirstApp />', () => { 

    test('Debe hacer match con el SnapShot', () => { 

        const tittle = 'Hola soy Juan';
        const { container } = render( <FirstApp title={ tittle }/> );
        
        expect( container ).toMatchSnapshot();
        
    })
    
    test('Debe de mostrar el titulo en un h1', () => { 

        const title = 'Hola soy Juan';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> );

        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1')
        expect( getByTestId('test-title').innerHTML ).toContain(title);

     })

     test('Debe mostrar el subtitulo enviado por props', () => { 

        const title = 'Hola soy Juan';
        const subTitle = 'Soy el subtitulo';
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );

        expect( getAllByText(subTitle).length ).toBe(2);
        
      })
    
        


})
