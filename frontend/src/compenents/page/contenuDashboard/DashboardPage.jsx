import React from 'react';
import CardDashboard from './CardDashboard';
import cardData from '../Data';

function DashboardPage() {
  return (
    <div>
      <div className="row">
        {/* Première ligne de cartes */}
        {cardData.slice(0, 3).map((card) => (
          <div key={card.id} className="col-md-4">
            <CardDashboard {...card} />
          </div>
        ))}
      </div>

      <div className="row">
        {/* Deuxième ligne de cartes */}
        {cardData.slice(3, 6).map((card) => (
          <div key={card.id} className="col-md-4">
            <CardDashboard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
