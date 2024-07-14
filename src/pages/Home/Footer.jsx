import React from 'react';

const Footer = () => {
    return (
        <section className="relative h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/src/assets/bgfoot.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 text-white text-center px-8 md:px-56 flex items-center h-full">
                <div>
                    <h1 className="text-4xl md:text-[110px] leading-tight font-bold mb-4 font-barlow">Our Club Welcomes
                        <br />  Happy Riders!</h1>
                    <p className="text-xl font-barlow">Read honest reviews from fellow riders. Get insights and recommendations from the Ride Mate
                        community to help you make the best choice for your riding adventure.</p>
                    <button className="mt-8 px-8 py-3 bg-white text-black font-light font-barlow">Book Now</button>
                </div>
            </div>
        </section>
    );
};

export default Footer;
