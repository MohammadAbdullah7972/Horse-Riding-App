import React from 'react';

const ConfirmationPopup = ({ name, horse, date, time, onClose, onViewDetail }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-[#fff3e6] rounded-3xl w-2/3 h-auto p-8 relative">
                <button
                    className="absolute top-2 right-4 text-[#000000] text-5xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <div className=' flex flex-col gap-10'>
                            <h2 className="text-2xl font-bold mb-4 font-barlow text-barlow text-[60px] leading-[70px] ">Confirmation Message</h2>
                            <div>
                            <h3 className="text-xl font-semibold mb-2 text-[35px]">Horse Ride Booking Confirmed!</h3>
                            <p className="mb-4">Thank you for booking with Ride Mate! Your horse riding adventure is confirmed. We can't wait to see you.</p>
                            </div>
                            
                            <div className="mb-4 relative z-10">
                                <h4 className="font-bold text-barlow text-[25px] mb-2">Detail:</h4>
                                <p className='font-barlow'><span className='text-[18px] font-medium'>Person Name:</span> {name}</p>
                                <p className='font-barlow'><span className='text-[18px] font-medium'>Horse:</span> {horse}</p>
                                <p className='font-barlow'><span className='text-[18px] font-medium'>Date:</span> {date}</p>
                                <p className='font-barlow'><span className='text-[18px] font-medium'>Time Slot:</span> {time}</p>
                            </div>
                        </div>
                        <div className=" z-0">
                            <img src="/src/assets/obj-horse.png" alt="Horse" className=" object-cover opacity-75" />
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            className="bg-[#000000] text-white rounded-full px-4 py-2 hover:bg-[#333333] transition ease-in-out duration-200"
                            onClick={onViewDetail}
                        >
                            VIEW DETAIL
                        </button>
                        <button
                            className="bg-[#000000] text-white rounded-full px-4 py-2 hover:bg-[#333333] transition ease-in-out duration-200"
                            onClick={onClose}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ConfirmationPopup;
