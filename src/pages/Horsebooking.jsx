// src/pages/AboutUs.jsx
import React from 'react';
import Bradcrumb from './Horsebooking/Bradcrumb';
import RideBooking from './Horsebooking/RideBooking';
const HorseBooking = () => {
    return (
        <div className="relative -z-10 mt-[-80px]">
            <Bradcrumb />
            <RideBooking/>
        </div>
    );
};

export default HorseBooking;
