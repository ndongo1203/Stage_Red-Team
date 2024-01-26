import React from 'react';

function CardDashboard({ icon, title, description, number, id }) {
    return (
        <div id={id} className="card-dashboard d-flex align-items-center bg-white my-3 py-3">
            <div className="icon">
                <span>{icon}</span>
            </div>
            <div className="content mx-3 mt-3">
                <p>
                    <span className="number">{number}</span>
                    <span className="title mx-2">{title}</span>
                </p>
                <p className="description"> {description} </p>
            </div>
        </div>
    );
}

export default CardDashboard;
