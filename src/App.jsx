// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import HorseBooking from './pages/Horsebooking';
import MainLayout from './layouts/MainLayout';
import ConfirmationPopup from './components/ConfirmationPopup';

const App = () => {
    // This is for implimenting popup
    // const [isPopupVisible, setIsPopupVisible] = useState(false);
    // const [formData, setFormData] = useState({
    //     horse: 'Horse A',
    //     date: '2024-07-15',
    //     time: '10:00 AM'
    // });
    // const handleOpenPopup = () => {
    //     setIsPopupVisible(true);
    // };

    // const handleClosePopup = () => {
    //     setIsPopupVisible(false);
    // };

    // const handleViewDetail = () => {
    // };

            //Hear I can Implement view detail functionality

    return (
        <>
            {/* <div className="App">
                <button onClick={handleOpenPopup}>Show Confirmation</button>
                {isPopupVisible && (
                    <ConfirmationPopup
                        horse={formData.horse}
                        date={formData.date}
                        time={formData.time}
                        onClose={handleClosePopup}
                        onViewDetail={handleViewDetail}
                    />
                )}
            </div> */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="booking" element={<HorseBooking />} />
                        <Route path="about" element={<AboutUs />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
