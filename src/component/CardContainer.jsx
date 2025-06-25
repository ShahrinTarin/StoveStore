import React from 'react';
import RecipeCard from '../component/RecipeCard';
import { Link } from 'react-router';


const CardContainer = ({ initialRecipes }) => {
    return (
        <div className='pb-20'>


            <div className='grid grid-cols-1 p-12 lg:grid-cols-3 md:grid-cols-2 gap-4 gap-y-8 w-11/12 mx-auto'>
                {
                    initialRecipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/allrecipes' className=" cursor-pointer px-5 py-2.5 lg:mt-5 relative rounded group text-white font-medium inline-block">
                                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-gray-600 to-blue-500"></span>
                                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-gray-600 to-blue-500"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-gray-600 to-blue-500"></span>
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-gray-600 from-blue-500"></span>
                                    <span className="relative">See All Recipes</span>
                                </Link>
            </div>

        </div>
    );
};

export default CardContainer;