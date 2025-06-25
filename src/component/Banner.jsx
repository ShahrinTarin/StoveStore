import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import './Banner.css';
import { Link } from 'react-router';

import { Fade } from 'react-awesome-reveal';
import Loader from './Loader';

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('BannerData.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch banner data');
                }
                return response.json();
            })
            .then((data) => {
                setBannerData(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <Loader></Loader>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="banner">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                {bannerData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="banner-slide">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="banner-image"
                            />

                            

                            <div className="banner-content space-y-4">
                                <Fade delay={200}
                                    duration={2500} >
                                    <h1 className='text-gray-700 text-3xl lg:text-5xl font-semibold flex'>Ready To Try Something  Delicious Recipes Today? </h1>
                                    <p className='text-gray-600 font-normal w-10/12 md:w-8/12 text-[10px] lg:text-[14px]'>Join us on a flavorful journey around the world as we explore new dishes, discover exciting recipes, and bring bold, delicious tastes into your kitchen—one unforgettable  bite at a time. From spicy street food to comforting home-style meals, each recipe celebrates culture, creativity, and passion for cooking. Whether  you're a seasoned chef or just getting started, there's always something new and delicious waiting to be discovered. Let’s cook, taste, and travel together!</p>
                                </Fade>
                                <Link to='/allrecipes' className="cursor-pointer px-5 py-2.5 lg:mt-5 relative rounded group text-white font-medium inline-block">
                                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-gray-600 to-blue-500"></span>
                                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-gray-600 to-blue-500"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-gray-600 to-blue-500"></span>
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-gray-600 from-blue-500"></span>
                                    <span className="relative">Explore Recipes </span>
                                </Link>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;