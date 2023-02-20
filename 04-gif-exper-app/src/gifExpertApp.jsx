
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Hollow Knigth', 'Stardew Valley'] );
    
    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;

        // categories.push(newCategory)

        //Usando el operador spread podemos agregar una categoria teniendo en cuenta las anteriores puestas, sin emnargo esto viola el hecho que no hay una key unica:
        setCategories([ ...categories, newCategory ]);
        // setCategories([  newCategory, ...categories ]);
        
    };

    return (

        <>
            <h1>GifExpertApp</h1>
        

            <AddCategory 
                onNewCategory = { event => onAddCategory(event) }
            />

            {    
            categories.map( (category) => (
                    <GifGrid key={category} category={ category } /> 
                )) 
            }   
            
        </>

    )

}