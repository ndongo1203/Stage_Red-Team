import React from 'react'
import { useLocation } from 'react-router-dom'
import ModalHotel from './contenuHotel/ModalHotel';

function HeaderSidebar({ title, button, description, icon }) {
   

    const location = useLocation()
    const path = location.pathname
    const getTitle = () => {
        switch (path) {
            case "/dashboard":
                return [title = "Bienvenu sur RED product"];
            case "/dashboard/hotels":
                return title = 'Hotels';

            default:
                return 'Page introuvable';
        }
    }

    const getDescription = () => {
        switch (path) {
            case "/dashboard" : 
            return [description = "Lorem ipsum dolor sit amet consectetur"]
            
            default:
        }
    }

    return (
        <div className="hotels bg-white w-100 p-2">
            <div className="titleHotels  d-flex justify-content-between px-4 mt-2 align-items-center">
                <div className="">
                    <h5>{getTitle()}</h5>
                    
                    <p>{getDescription ()}</p>
                </div>
                <div className="pb-2">
                    {path !== "/dashboard" && <ModalHotel />}
                </div>
            </div>
        </div>
    )
}

export default HeaderSidebar
