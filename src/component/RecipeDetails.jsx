import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AiOutlineLike } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const RecipeDetails = () => {
    const { user } = use(AuthContext);
    const recipe = useLoaderData()
    const { instructions, image, time, cuisine, categories, title, ingredients, likes } = recipe
    const [showFullInstructions, setShowFullInstructions] = useState(false);
    const [currentLikes, setCurrentLikes] = useState(likes);
    const MAXINGREDINSTRUCTIONS = 250;

    const toggleIngredients = () => {
        setShowFullInstructions(!showFullInstructions);
    };

    const displayIngredients = () => {
        if (instructions.length <= MAXINGREDINSTRUCTIONS || showFullInstructions) {
            return instructions;
        }
        return `${instructions.substring(0, MAXINGREDINSTRUCTIONS)}...`;
    };

    const handleLike = () => {
        const newLikes = currentLikes + 1;
        setCurrentLikes(newLikes);
        const likes = { likes: newLikes }
        fetch(`https://assignment-10-server-blond-ten.vercel.app/recipe/${recipe._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likes)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You Liked this Recipe",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })



    };

    return (
        <div>
            <div className="card dark:bg-gray-700 bg-blue-50 text-gray-600 dark:text-white  shadow-sm my-10 md:w-8/12 w-10/12 lg:w-5/12  mx-auto">
                <figure className='w-full h-[300px]'>
                    <img src={image}
                        className='w-full h-full'
                        alt="recipe" />
                </figure>
                <p className="card-footer pl-6 text-md mt-4 font-bold flex items-center gap-0.5">
                    <span className='text-blue-900 dark:text-blue-500 cursor-pointer'><AiOutlineLike size={18} /></span> <span className='text-blue-800 dark:text-blue-500'>{currentLikes}</span> People interested in this Recipe
                </p>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title text-2xl">{title}</h2>
                        <small className="badge dark:text-gray-700 text-gray-600 bg-blue-100 border-black items-center justify-center">{cuisine}</small>
                    </div>

                    <h2 className="text-lg"><span className='font-bold'>Preparation Time : </span>{time} Minute</h2>
                    <div className='flex gap-4 flex-wrap'>
                        <span className='font-bold'>Category :</span> {
                            categories.map((category, index) => <small key={index} className="badge dark:text-gray-700 text-gray-600 bg-blue-100 border-black items-center justify-center">{category}</small>)
                        }
                    </div>
                    <p><span className='font-bold'>Ingredients : </span>{ingredients}</p>
                    <p><span className='font-bold'>Instructions : </span>{displayIngredients()}
                        {instructions.length > MAXINGREDINSTRUCTIONS && (
                            <button
                                onClick={toggleIngredients}
                                className="text-blue-600 hover:text-blue-300 ml-1 text-xs"
                            >
                                {showFullInstructions ? 'See Less' : 'See More'}
                            </button>
                        )}</p>
                    <div>

                        <button onClick={handleLike} disabled={recipe.email == user?.email ? true : false} type='submit' className="cursor-pointer px-5 py-2.5 lg:mt-5 relative rounded group text-white font-medium inline-block">
                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-gray-600 to-blue-500"></span>
                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-gray-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-gray-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-gray-600 from-blue-500"></span>
                            <span className="relative flex gap-1 justify-center items-center"><AiOutlineLike size={18} />Like</span>
                        </button>
                        {
                            (recipe.email == user?.email)?<p className='text-xs font-medium text-red-500 mt-3'>You Can't Like Your Own Added Recipe</p>:' '
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecipeDetails;