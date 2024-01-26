import React, { useEffect, useState } from 'react';
import profileImage from '../../Assets/images/profile.png'; 
import { IoIosNotifications } from "react-icons/io";
import { MdLogout } from "react-icons/md";
// import HeaderHotels from './contenuHotel/HeaderHotels';
import { useLocation, useNavigate } from 'react-router-dom'
import HeaderSidebar from './HeaderSidebar';
import { getUserDetails } from '../../Utils/GetUserDetails';


const AppNavbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
  
    if(!user){
      navigate('/');
    }
  
    useEffect(() => {
      const userDetails = getUserDetails();
         setUser(userDetails);
    }, [])
    
  
  
  
    const handleLogout = () => {
      localStorage.removeItem('todoAppUser');
      navigate('/');
    };
  

    const location = useLocation() 
    const path= location.pathname
    const getTitle = () => {
        switch (path) {
            case "/dashboard" :
            return "Dashboard"
            case  "/dashboard/hotels":
            return 'Liste des hotels';

            default: 
                return 'Page introuvable';
        }
    }

    return (
        <div className="">
        <nav className="navbar navbar-expand-lg navbar-light p-2 shadow-sm">
        <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#dashboard">{getTitle()}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                <form className="d-flex me-2 reduis-input">
                    <input className="form-control" type="search" placeholder="Rechercher" aria-label="Search" />
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#notification">
                            <IoIosNotifications className='fs-3 mt-2' />
                        </a>
                    </li>
                    <li>
                        <a className="nav-link this-profile" href="#Profil"  role="button">
                            <img src={profileImage} alt="Profile" className="profile-image img-fluid" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#deconnectio">
                            <MdLogout onClick={handleLogout} className='fs-3 mt-2' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        <div className="">
            {/*<HeaderDashboard />*/}
            <HeaderSidebar />
        </div>
        </div>
    );
};

export default AppNavbar;