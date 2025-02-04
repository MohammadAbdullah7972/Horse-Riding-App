// src/pages/Home.jsx
import React from 'react';
import Hero from './Home/Hero';
import RidingCampaign from './Home/RidingCampaign';
import WhyUs from './Home/WhyUs';
import HorseDetails from './Home/HorseDetail';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="relative ">
            <Hero/>
            <RidingCampaign/>
            <HorseDetails/>
            <WhyUs/>
            <Footer/>
        </div>
    );
};

export default Home;
