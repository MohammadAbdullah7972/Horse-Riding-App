import BookingForm from "./BookingForm";

const RideBooking = () => {
    return (
        <>
            <section className="mx-20 my-20">
                <div className="flex justify-between items-center">
                    <img src="/src/assets/man-women-horse.png" alt="" className="max-w-[47%]" />
                    <div className="max-w-[47%]">
                        <h1 className="text-[50px] leading-tight font-bold mb-4 font-barlow">Book Your Ride</h1>
                        <p className="text-[18px] font-barlow">"At Ride Mate, we offer a variety of horse riding experiences tailored
                            to your preferences. Whether you're looking for a scenic trail ride, a personalized lesson, or a fun group outing,
                            we have something for everyone. Simply fill out the form below to secure your spot!"</p>
                    </div>
                </div>

                <div className="flex justify-between mt-10">
                    <div className="max-w-[47%]">
                        <h1 className="text-[50px] leading-tight font-bold mb-4 font-barlow">Secure Your Horse Riding
                            <br />  Adventure Today!</h1>
                        <p className="text-[18px] font-barlow">Ride Mate is your ultimate companion for all things
                            horse riding. Whether you are an experienced equestrian or a
                            beginner, Ride Mate makes it easy to book horse rides, explore
                            stables, and embark on unforgettable adventures. With a user-friendly
                            interface and comprehensive features, Ride Mate ensures that every
                            ride is seamless, enjoyable, and memorable.</p>

                        <BookingForm />

                        <p className="text-[18px] font-barlow">We look forward to providing you with an exceptional and memorable
                            riding experience. If you have any questions or need to make changes
                            to your booking, please contact us at.
                            <p className="text-[18px] font-barlow font-medium">Customer Support Email: example@mail.com
                                <br />
                                Phone Number: +91 00000.
                            </p>
                        </p>

                    </div>
                    <img src="/src/assets/female-equestrian.jpg" alt="" className="max-w-[47%]" />
                </div>
            </section>
        </>
    );
};

export default RideBooking