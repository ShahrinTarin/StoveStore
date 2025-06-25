import React from 'react';
import { Link } from 'react-router';

const EmptyPage = () => {
      return (
        <div className='py-24 text-center lg:w-11/12 mx-auto lg:col-span-2'>
        <h1 className='mb-3 text-7xl font-thin text-blue-900'>No Recipe Found!</h1>
        <p className='mb-8 text-xl  text-blue-900 md:text-2xl'>
          Add a New Recipe to Share Everyone
        </p>
        <Link to='/addrecipe'>
        <button className="relative inline-block text-lg group cursor-pointer">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-800 transition-colors duration-300 ease-out border-2 border-blue-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-blue-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Add Recipe</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
        </Link>
      </div>
    );
};

export default EmptyPage;