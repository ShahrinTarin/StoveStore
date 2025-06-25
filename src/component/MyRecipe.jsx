import React from 'react';
import { useLoaderData } from 'react-router';
import MyrecipeCardContainer from './MyrecipeCardContainer';


const MyRecipe = () => {
    const initialRecipes = useLoaderData()
    return (
        <div>
            <div>
            <MyrecipeCardContainer initialRecipes={initialRecipes}></MyrecipeCardContainer>

            </div>
        </div>
    );
};

export default MyRecipe;