import React from 'react'
import { cardsHotels } from '../Data'
import HotelCard from './HotelCard'

export default function ListeHotelsPage() {
  return <div className="row">
  {cardsHotels.map((element, index) => (
    <div className="col-md-3">
      <HotelCard {...element} key={index} />
    </div>
    ))}
  </div>
}
