import React from 'react';
import { BiSolidDashboard, BiBuildingHouse } from "react-icons/bi";
import Image1 from '../../Assets/images/Image1.png'; 
import profileImage from '../../Assets/images/profile.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-sidebar text-white p-0 m-0 bg-sidbar">
            <div className="p-3 d-flex">
            <img src={Image1} alt="" className='img-fluid' />
            <h4 className='m'>RED PRODUCT</h4>
            </div>
            <div className="mx-3 mt-2">
                <p>Principal</p>
            </div>
            <ul className="list-unstyled hover-liste mt-3 fs-5">
                <Link to="/dashboard" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='p-2'><BiSolidDashboard className="me-2" /> Dashboard</li>
                </Link>
                <Link to="hotels" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='p-2'><BiBuildingHouse className="me-2" /> Liste des hôtels</li>
                </Link>
            </ul>
            <div className="mt-auto p-3 footer-profile">
            <hr />
                <p className='this-profile'>
                    <img src={profileImage} alt="Profile" className="profile-image img-fluid" />
                    <span className='ms-3'>Oumar Ndongo</span>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
