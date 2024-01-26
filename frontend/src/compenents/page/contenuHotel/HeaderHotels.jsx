import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import ModalHotel from './ModalHotel';
import HeaderSidebar from '../HeaderSidebar';

function HeaderHotels() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const title = 'Hôtels';

  return (
    <div className="">
      <HeaderSidebar title={title} button={
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
      } />
      {showModal && <ModalHotel closeModal={closeModal} />}
    </div>
  );
}

export default HeaderHotels;
