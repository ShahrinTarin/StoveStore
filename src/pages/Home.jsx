import React from 'react';
import Banner from '../component/Banner';
import { useLoaderData } from 'react-router';
import CardContainer from '../component/CardContainer';
import Newsletter from '../component/Newsletter';
import ExtraSection from '../component/ExtraSection';
import Extra from '../component/Extra';

const Home = () => {
    const initialRecipes = useLoaderData()
    return (
        <div className='bg-blue-50 dark:bg-gray-500'>
            <div>
                <Banner></Banner>
                {/* <div className="absolute top-0 md:top-10 left-0 w-full">
                    <div className="md:w-11/12 mx-auto md:px-4">
                        <Navbar></Navbar>
                    </div>
                </div> */}
            </div>
            <div>
                <div className='mb-5 text-center space-y-4 mt-20'>
                    <h1 className="text-5xl font-medium mb-5 dark:text-gray-300 text-gray-700">Top 6 Toothsome Recipe</h1>
                    <p className='text-gray-600 dark:text-gray-300 font-light text-sm px-4' >These six are top-ranked recipes,celebrated for their bold flavors and widespread appeal: fresh elegance, cheesy comfort, savory layers, zesty crunch, rich warmth, and classic versatility. Each offers a unique culinary <br />  experience, capturing the hearts of food lovers across the globe. Their popularity stems from the perfect blend of taste, texture, and cultural resonance found in every bite.
                    </p>
                </div>
                <CardContainer initialRecipes={initialRecipes}></CardContainer>
            </div>
            <div>
                <Extra></Extra>
            </div>
            <div>
                <ExtraSection></ExtraSection>
            </div>

            <div>
                <Newsletter></Newsletter>
            </div>


        </div>
    );
};

export default Home;