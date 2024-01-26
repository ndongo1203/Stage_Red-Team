import React from 'react';

const HotelCard = ({ img, title, address, price }) => {
    return (
    <div className="card p-0 mb-4 hotelsCard mt-4">
      <img src={img} className="card-img-top img-fluid" alt="Hotel" />
      <div className="card-body">
        <p className='address'>{address}</p>
        <h6 className="card-title fw-bold" style={{ color: "#222222" }}>
          {title}
        </h6>
        <p className="card-text">{price}</p>
      </div>
    </div>
  );
}

export default HotelCard;