// src/components/Carousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

const CarouselComponent = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute left-0 z-20 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 m-2 text-white"
                    >
                        <MdArrowBack size={30} />
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute right-0 z-20 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 m-2 text-white"
                    >
                        <MdArrowForward size={30} />
                    </button>
                )
            }
            className="relative h-screen"
        >
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/sl1.png')" }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-white text-left px-8 md:px-56 flex items-center h-full">
                    <div>
                        <p className='text-lg text-left font-barlow'>Welcome To Ride Mate</p>
                        <h1 className="text-4xl md:text-[70px] leading-tight font-bold mb-4 font-barlow">Experience the Joy <br /> of Horse Riding</h1>
                        <p className="text-xl font-barlow">Your ultimate horse riding companion</p>
                        <button className="mt-8 px-6 py-2 bg-white text-black font-semibold rounded">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/sl2.png')" }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-white text-left px-8 md:px-56 flex items-center h-full">
                    <div>
                        <p className='text-lg text-left font-barlow'>Welcome To Ride Mate</p>
                        <h1 className="text-4xl md:text-[70px] leading-tight font-bold mb-4 font-barlow">Discover New <br /> Adventures</h1>
                        <p className="text-xl font-barlow">Join us for an unforgettable experience</p>
                        <button className="mt-8 px-6 py-2 bg-white text-black font-semibold rounded">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/sl3.png')" }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-white text-left px-8 md:px-56 flex items-center h-full">
                    <div>
                        <p className='text-lg text-left font-barlow'>Welcome To Ride Mate</p>
                        <h1 className="text-4xl md:text-[70px] leading-tight font-bold mb-4 font-barlow">Ride with <br /> Confidence</h1>
                        <p className="text-xl font-barlow">Safe and enjoyable horse riding for all</p>
                        <button className="mt-8 px-6 py-2 bg-white text-black font-semibold rounded">Get Started</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselComponent;
