import React from 'react';

const ConfirmationPopup = ({ horse, date, time, onClose, onViewDetail }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-[#fff3e6] rounded-xl w-96 p-8 relative">
                <button 
                    className="absolute top-2 right-2 text-[#000000] text-xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4 font-barlow">Confirmation Message</h2>
                <h3 className="text-xl font-semibold mb-2">Horse Ride Booking Confirmed!</h3>
                <p className="mb-4">Thank you for booking with Ride Mate! Your horse riding adventure is confirmed. We can't wait to see you.</p>
                <div className="mb-4">
                    <h4 className="font-bold">Detail:</h4>
                    <p>Horse: {horse}</p>
                    <p>Date: {date}</p>
                    <p>Time Slot: {time}</p>
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
                <div className="absolute bottom-4 right-4">
                    <img src="path_to_horse_image.png" alt="Horse" className="w-24 h-24 object-cover" />
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;
