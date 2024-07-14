// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="container ">
            <Outlet />
        </div>
    );
};

export default MainLayout;
