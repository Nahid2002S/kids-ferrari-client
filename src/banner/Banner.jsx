import React from 'react';
import Gallary from '../gallary/gallary';
import ShopByCatagory from '../shopbycatagory/ShopByCatagory';
import HeroProduct from '../heroProduct/HeroProduct';
import TopSeller from '../topSeller/TopSeller';
import car from '../assets/car.png'

const Banner = () => {
    return (
        <div>
            <div className='lg:flex lg:justify-center items-center bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 px-8 py-12 h-[90vh]'>
            <div className='lg:w-[80%] mb-4' data-aos="fade-up">
            <h1 className='text-7xl mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-fuchsia-300'>KIDS FERRARI</h1>
                <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-fuchsia-300 lg:w-[600px] mb-6'>One Of The Most Popular Toys Marketplace. There You Can Buy And Sell Toys, The Best Car Toys Selling Platform! </p>
                <button className="px-6 py-2 text-gray-800 font-bold rounded bg-gradient-to-r from-violet-200 to-fuchsia-300 shadow:md">View More</button>
            </div>
            <div>
                <img className='w-[150vh]' src={car} alt="Toys" />
            </div>
        </div>
        <Gallary></Gallary>
        <ShopByCatagory></ShopByCatagory>
        <HeroProduct></HeroProduct>
        <TopSeller></TopSeller>
        </div>
    );
};

export default Banner;