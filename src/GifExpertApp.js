import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState(['Naruto']);
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // setCategories( ['Naruto', ...categories] );
    //     setCategories( cats => [...cats, 'Naruto'] );
    // }

    return ( 
        <>
            <h2 className='animate__animated animate__bounceInDown'>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ) )
                }
            </ol>  
        </>
    );
};
