import React from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router';
import MyrecipeCardContainer from './MyrecipeCardContainer';


const MyRecipe = () => {
    const initialRecipes = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <MyrecipeCardContainer initialRecipes={initialRecipes}></MyrecipeCardContainer>

            </div>
        </div>
    );
};

export default MyRecipe;