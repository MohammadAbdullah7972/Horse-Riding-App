const RidingCampaign = () => {
    return (
        <>
            <section className="mx-20 my-20">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col max-w-[47%] gap-24">
                        <div>
                            <h1 className="text-[50px] leading-tight font-bold mb-4 font-barlow">Your Ultimate Horse <br /> Riding Companion</h1>
                            <p className="text-[18px] font-barlow">Ride Mate is your ultimate companion for all things
                                horse riding. Whether you are an experienced equestrian or a
                                beginner, Ride Mate makes it easy to book horse rides, explore
                                stables, and embark on unforgettable adventures. With a user-friendly
                                interface and comprehensive features, Ride Mate ensures that every
                                ride is seamless, enjoyable, and memorable..</p>
                        </div>
                        <img src="/src/assets/two-horses.png" alt="" />
                    </div>
                    <div className="flex flex-col max-w-[47%] gap-12">
                        <img src="/src/assets/boy-w-horse.png" alt="" />
                        <div>
                            <p className="text-[18px] font-barlow">Experience the joy of horse riding with Ride Mate, your trusted partner for booking
                                and managing horse rides. Whether you're a seasoned rider or just starting, Ride
                                Mate is here to make your riding adventures easy and enjoyable.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RidingCampaign;