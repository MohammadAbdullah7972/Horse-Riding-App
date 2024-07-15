// src/pages/AboutUs.jsx
import React from 'react';
import Bradcrumb from './Horsebooking/Bradcrumb';
import RideBooking from './Horsebooking/RideBooking';
import Footer from '../components/Footer';
const HorseBooking = () => {
    return (
        <div className="relative">
            <Bradcrumb className=""/>
            <RideBooking/>
            <Footer/>
        </div>
    );
};

export default HorseBooking;
