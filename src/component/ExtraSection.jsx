import React from 'react';

const ExtraSection = () => {
    return (
        <div className='w-10/12 mx-auto mt-12 mb-36 justify-center items-center md:flex gap-10'>
            <div>
                <img className='h-[570px] rounded-2xl my-8' src="https://i.ibb.co/JwDcVV9b/Chat-GPT-Image-May-23-2025-05-20-35-AM.png" alt="all foods" />
            </div>
            <div>
                <h1 className='text-gray-700 dark:text-gray-200 text-4xl font-bold mb-6'>Our Features</h1>

               <div className='space-y-7'>
                 <div>
                    <h1 className='text-gray-700 dark:text-gray-200 font-medium text-2xl mb-2'>Unique Recipes</h1>
                    <p className='text-gray-600 dark:text-gray-200'>"Stove Stories" features unique recipes blending tradition with innovation—each dish <br />tells a tale through unexpected ingredients, heartfelt origins, and bold flavors. <br /> From heritage twists to modern fusions, every recipe invites  discovery, <br /> connection, and a memorable cooking experience at home.
                    </p>
                </div>
                <div>
                    <h1 className='text-gray-700 dark:text-gray-200 font-medium text-2xl mb-2'>Interactive Cooking Timelines</h1>
                    <p className='text-gray-600 dark:text-gray-200'>Follow step-by-step timelines with real-time tips,
                            adapting <br /> to your pace for an engaging cooking journey.
                    </p>
                </div>
                <div>
                    <h1 className='text-gray-700 dark:text-gray-200 font-medium text-2xl mb-2'>Seasonal Ingredient Suggestions</h1>
                    <p className='text-gray-600 dark:text-gray-200'>Get tailored ingredient swaps based on seasonal <br />
                            availability, enhancing flavor and sustainability.
                    </p>
                </div>
               </div>

            </div>
        </div>
    );
};

export default ExtraSection;