import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';

const AllRecipes = () => {
    const [initialRecipes, setInitialRecipes] = useState([])
    console.log(initialRecipes);
    const [search, setSearch] = useState(' ')
    useEffect(() => {
        fetch(`https://assignment-10-server-blond-ten.vercel.app/recipe?searchParams=${search}`)
            .then(res => res.json())
            .then(data => setInitialRecipes(data))
    }, [search])
    return (
        <div className='mb-12'>
            <Navbar></Navbar>
            <div>
                <div className='mb-3 md:flex justify-between w-11/12 md:pl-12 pl-5  mx-auto space-y-4 mt-8'>
                    <h1 className=" text-3xl lg:text-5xl font-semibold dark:text-gray-300 text-gray-700">All <span className='text-blue-800'>Toothsome Recipes Here</span></h1>
                    <div>
                        <select
                            name="cuisine"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-blue-100 p-2.5 px-5 rounded input text-gray-800 appearance-none md:pr-8"
                            style={{
                                backgroundImage: `url("data:image/svg+xml;utf8,<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 10px center',
                            }}
                        >
                            <option value="">All</option>
                            <option value="Italian">Italian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Indian">Indian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Arabian">Arabian</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-1 p-12 lg:grid-cols-4 md:grid-cols-2 gap-4 gap-y-8 w-11/12 mx-auto'>
                    {
                        initialRecipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllRecipes;