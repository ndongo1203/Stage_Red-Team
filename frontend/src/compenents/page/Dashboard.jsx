import React from 'react';
import Sidebar from './Sidebar';
import AppNavbar from './AppNavbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-2 m-0 p-0">
                    {/* Sidebar */}
                    <Sidebar />
                </div>
                <div className="col-md-10 m-0 p-0">
                    {/* Navbar */}
                    <AppNavbar />
                    {/* Content */}
                    <div className="container-fluid p-4">
                        {/* Contenu */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;