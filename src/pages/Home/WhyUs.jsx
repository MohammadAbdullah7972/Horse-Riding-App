const WhyUs = () => {
    return (
        <>
            <section className="mx-20 ">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col max-w-[47%] gap-14 mb-14">
                        <div>
                            <h1 className="text-[50px] leading-tight font-bold mb-4 font-barlow">Why Choose Ride Mate?</h1>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span>
                                <h3 className="text-[25px] font-barlow font-semibold">User-Friendly Interface</h3>
                                <p className="text-[16px] font-barlow">Our intuitive design makes booking a breeze. Navigate effortlessly 
                                through our app to find and book your perfect horse riding experience.</p>
                            </span>
                            <span>
                                <h3 className="text-[25px] font-barlow font-semibold">Comprehensive Information</h3>
                                <p className="text-[16px] font-barlow">Gain access to detailed profiles of horses and stables. Learn about 
                                each horse's temperament, age, and suitability, and explore stables with in-depth information about their 
                                facilities and services.</p>
                            </span>
                            <span>
                                <h3 className="text-[25px] font-barlow font-semibold">Instant Confirmation</h3>
                                <p className="text-[16px] font-barlow">Receive immediate booking confirmations and calendar invites. No more 
                                waiting or uncertainty—your ride details are promptly sent to your email and calendar, ensuring </p>
                            </span>
                            <span>
                                <h3 className="text-[25px] font-barlow font-semibold">Trusted Reviews</h3>
                                <p className="text-[16px] font-barlow">Read honest reviews from fellow riders. Get insights and recommendations 
                                from the Ride Mate community to help you make the best choice for your riding adventure.</p>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[47%] gap-12">
                        <img src="/src/assets/obj-horse.png" alt="" className="max-h-[650px]"/>
                    </div>
                </div>
            </section>
        </>
    );
};
export default WhyUs