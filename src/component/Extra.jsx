import React from 'react';
import { Link } from 'react-router';

const Extra = () => {
    return (
        <div className='mx-auto px-4 w-11/12 rounded-2xl py-10 lg:py-20 mt-12 mb-36 text-center bg-white dark:bg-gray-400'>
            <h1 className="text-5xl font-medium mb-5 text-gray-700">Explore Recipe Categories</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto justify-center gap-6 mt-8'>

                <div className='bg-blue-100 cursor-pointer hover:bg-blue-200 p-6 rounded-lg transition'>
                    <div className='text-4xl mb-2'>🍳</div>
                    <h2 className='text-lg font-semibold text-gray-800'>Breakfast</h2>
                    <p className='text-sm text-gray-600'>
                        Energize your morning with healthy and tasty meals.
                    </p>
                </div>

                <div className='bg-blue-100 cursor-pointer hover:bg-blue-200 p-6 rounded-lg transition'>
                    <div className='text-4xl mb-2'>🥪</div>
                    <h2 className='text-lg font-semibold text-gray-800'>Lunch</h2>
                    <p className='text-sm text-gray-600'>
                        Midday meals that satisfy your cravings.
                    </p>
                </div>

                <div className='bg-blue-100 cursor-pointer hover:bg-blue-200 p-6 rounded-lg transition'>
                    <div className='text-4xl mb-2'>🍲</div>
                    <h2 className='text-lg font-semibold text-gray-800'>Dinner</h2>
                    <p className='text-sm text-gray-600'>
                        Delightful dinners to end your day perfectly.
                    </p>
                </div>

                <div className='bg-blue-100 cursor-pointer hover:bg-blue-200 p-6 rounded-lg transition'>
                    <div className='text-4xl mb-2'>🍰</div>
                    <h2 className='text-lg font-semibold text-gray-800'>Dessert</h2>
                    <p className='text-sm text-gray-600'>
                        Sweet treats to make your meals memorable.
                    </p>
                </div>

                <div className='bg-blue-100 cursor-pointer hover:bg-blue-200 p-6 rounded-lg transition'>
                    <div className='text-4xl mb-2'>🥗</div>
                    <h2 className='text-lg font-semibold text-gray-800'>Vegan</h2>
                    <p className='text-sm text-gray-600'>
                        Plant-based goodness packed with flavor.
                    </p>
                </div>
            </div>

            <Link to='/allrecipes' className="mt-10 cursor-pointer px-5 py-2.5 lg:mt-5 relative rounded group text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-gray-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-gray-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-gray-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-gray-600 from-blue-500"></span>
                <span className="relative">Browse All Recipes</span>
            </Link>
        </div>
    );
};

export default Extra;
