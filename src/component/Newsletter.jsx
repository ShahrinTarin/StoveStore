import React from 'react';
import { Slide} from 'react-awesome-reveal';

const Newsletter = () => {
    return (
        <Slide delay={200}
        duration={1000}
        direction='right'>
            <div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 h-[376px] '>
                <div>
                    <img className='w-full h-[376px]' src="https://i.ibb.co/8Djg2S4X/May-23-2025-03-20-28-AM.png" alt="burger" />
                </div>
                <div className='hidden md:flex'>
                    <img className='w-full' src="https://i.ibb.co/nqXWzWkd/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg" alt="Pizza" />
                </div>
                <div className='hidden md:flex'>
                    <img className='w-full' src="https://i.ibb.co/whFxYFK8/9fd-Hh-Xfq7q.jpg" alt="Panipuri" />
                </div>
                <div className='hidden lg:flex'>
                    <img className='w-full' src="https://i.ibb.co/JZhvZnJ/Mexican-street-corn-WEBSITE-scaled.jpg" alt="corn" />
                </div>
                <div className='hidden lg:flex'>
                    <img className='w-full' src="https://i.ibb.co/4ZJrNGcv/Fried-Momos-Recipe-Step-By-Step-Instructions-scaled.jpg" alt="momos" />
                </div>
            </div>
            <div className='bg-[#3b6fa0a6] mx-3 md:mx-0 py-12 text-center'>
                <h1 className='text-3xl px-4 mb-2 md:mb-3 text-gray-50 font-medium lg:text-5xl'>Want Deep Thoughts About Recipe? Get Our Weekly Email:
                </h1>
                <div className="join px-3 gap-2 lg:gap-5 md:mt-10 mt:8">
  <input type='email' className="input join-item rounded-full bg-transparent backdrop-blur-2xl w-full md:px-8 py-6 md:py-8 textarea-lg md:text-2xl" placeholder="Enter Your Email" />
  <button className="btn join-item rounded-full py-6 md:py-8 bg-white text-gray-800 border-none px-4 md:px-6 text-lg lg:text-2xl">Subscribe</button>
</div>
            </div>
        </div>
        </Slide>
    );
};

export default Newsletter;