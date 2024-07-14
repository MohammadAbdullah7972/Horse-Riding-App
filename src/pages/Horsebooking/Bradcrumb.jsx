import React from 'react';

const Bradcrumb = () => {
    return (
        <section className="relative h-full bg-cover bg-bottom bg-fixed" style={{ backgroundImage: "url('/src/assets/brad1-girl-rides-horse.jpg')" }}>
            <div className="absolute inset-0 bg-[#0f102c] opacity-60"></div>
            <div className="relative z-10 text-white text-left px-8 md:px-56 md:pt-44 md:pb-28 flex items-center h-full">
                <div>
                    <h1 className="text-4xl md:text-[70px] leading-tight font-bold mb-4 font-barlow">Secure Your Horse Riding
                        <br />    Adventure Today!</h1>
                    <p className="text-xl font-barlow">Read honest reviews from fellow riders. Get insights and recommendations from the Ride Mate
                        community to help you make the best choice for your riding adventure.</p>
                </div>
            </div>
        </section>
    );
};

export default Bradcrumb;
