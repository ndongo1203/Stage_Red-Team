import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import MenuModal from './MenuModal';

function ModalHotel() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        closeModal();
    };

    return (
        <div>
            <button
                className="btn p-2"
                id="createHotelButton"
                data-bs-toggle="modal"
                data-bs-target="#createHotelModal"
                onClick={openModal}
            >
                <BiPlus className="fs-4" />
                Créer un nouveau hôtel
            </button>
            {showModal && (
                <div className="modal fade ModalCard fixed w-100 h-100" id="createHotelModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content p-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <button type="button" className="btn p-2 mx-3" data-bs-dismiss="modal">
                                        <BiPlus className="fs-4" />
                                        Créer un nouveau hôte
                                    </button>
                                </div>
                                <div>
                                    <button className="btn-close me-4" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                                </div>
                            </div>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    {/* MenuModal */}
                                    <MenuModal />
                                </div>
                                <div className=" border-none">
                                    <div className="d-flex justify-content-end">
                                        <button id="footerbutton" type="submit" className="btn text-white border-0 me-4" text={"Enrégistré"}>
                                            Enrégistré
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default ModalHotel;
