import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Component/Assets/side-dish (1).jpg';
import img2 from '../Component/Assets/side-dish (2).jpg';
import img3 from '../Component/Assets/side-dish (3).jpg';
import img4 from '../Component/Assets/biryani (1).jpg'
import img5 from '../Component/Assets/side-dish (5).jpg';
import img6 from '../Component/Assets/biryani (2).jpg';
import Page from '../Component/Assets/Page.png';
import img from '../Component/Assets/Dabeli.jpg';
import Indain from '../Component/Assets/Indian-cuisine.jpg';
import Snacks from '../Component/Assets/Pani-puri.webp';
import second from '../Component/Assets/healthy-traditional-indian-food..jpg';
import Footer from './Footer';
import Header from './Header';



const Home = () => {

    const handleBooking = () => {
        window.location.href = '/booktable'
    }

    return (
        <>

            < Header />
            {/* Code For Carousel */}
            <div className="container-fluid bg-gray-900">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showIndicators={false}
                    className="custom-carousel"
                >
                    <div>
                        <img src={img1} alt="Chicken" className="carousel-image" style={{ height: '500px' }} />
                    </div>
                    <div>
                        <img src={img2} alt="Litti Chokha" className="carousel-image" style={{ height: '500px' }} />
                    </div>
                    <div>
                        <img src={img3} alt="Litti Chokha" className="carousel-image" style={{ height: '500px' }} />
                    </div>
                    <div>
                        <img src={Page} alt="Daal Bhati" className="carousel-image" style={{ height: '500px' }} />
                    </div>
                    <div>
                        <img src={img4} alt="Paneer Butter Masala" className="carousel-image" style={{ height: '500px' }} />
                    </div>
                    <div>
                        <img src={img5} alt="Litti Chokha" className="carousel-image" style={{ height: '500px' }} />
                    </div>
                    <div>
                        <img src={img6} alt="Litti Chokha" className="carousel-image" style={{ height: '500px' }} />
                    </div>
                </Carousel>
            </div>

            <div className='text p-7'>
                <p className='text-center font-semibold text-6xl font-mono'>House Of Hunger </p>
                <p className='text-center font-semibold text-xl font-mono'>THE COLOURS AND FLAVOURS LIKE HOME</p>
                <p className='text-center p-3 text-lg'>
                    <b>"House for Hunger"</b> is not just another restaurant; it is a culinary haven that promises
                    a home-like dining experience without burning a hole in your pocket. Established with the mission to serve
                    delicious, hygienic, and affordable meals, this restaurant has become a beloved spot for food enthusiasts
                    of all ages. The essence of "House for Hunger" lies in its commitment to delivering comfort food that
                    evokes the warmth and familiarity of home-cooked meals.
                </p>
                <p className='flex items-center justify-center mt-8'>
                    <button
                        type="button"
                        className="text-white bg-lime-400 hover:bg-lime-700 focus:outline-none
                        focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-base px-5 py-2.5 text-center"
                        onClick={handleBooking}
                    >
                        BOOK NOW
                    </button>
                </p>
            </div>

            <div className="flex items-center">
                <div className='mr-4 mb-4'>
                    <img src={second} alt="Litti Chokha" className='h-80 hover:scale-105 ml-3' />
                </div>
                <div className="flex-1 text-center">
                    <p className='text-black font-semibold'>
                        <b>"House for Hunger"</b> is not just another restaurant; it is a culinary haven that promises
                        a home-like dining experience without burning a hole in your pocket.
                    </p>
                </div>
            </div>


            <div className="flex flex-wrap items-center justify-center">
                <div className="flex-1 text-center">
                    <p className="text-black font-semibold">
                        <b>"House for Hunger"</b> is not just another restaurant; it is a culinary haven that promises
                        a home-like dining experience without burning a hole in your pocket.
                    </p>
                </div>
                <div className="ml-4 mb-4">
                    <img
                        src={img}
                        alt="Litti Chokha"
                        className="h-80 hover:scale-105 mr-3"
                    />
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center">
                <div className='mr-4 mb-4'>
                    <img src={Snacks} alt="Litti Chokha" className='h-80 hover:scale-105 ml-3' />
                </div>
                <div className="flex-1 text-center">
                    <p className='text-black font-semibold'>
                        <b>"House for Hunger"</b> is not just another restaurant; it is a culinary haven that promises
                        a home-like dining experience without burning a hole in your pocket.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center">
                <div className="flex-1 text-center">
                    <p className="text-black font-semibold">
                        <b>"House for Hunger"</b> is not just another restaurant; it is a culinary haven that promises
                        a home-like dining experience without burning a hole in your pocket.
                    </p>
                </div>
                <div className="ml-4 mb-4">
                    <img
                        src={Indain}
                        alt="Litti Chokha"
                        className="h-80 hover:scale-105 mr-3"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
