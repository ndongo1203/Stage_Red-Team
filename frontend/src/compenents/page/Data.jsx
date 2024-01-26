import React from 'react';
import { FaEnvelope  } from 'react-icons/fa';
import { MdLocalParking } from 'react-icons/md';
import { FaPeopleCarry } from 'react-icons/fa';

import hotelImage1 from '../../Assets/images/hotels1.png';
import hotelImage2 from '../../Assets/images/hotels2.png';
import hotelImage3 from '../../Assets/images/hotels3.png';
import hotelImage4 from '../../Assets/images/hotels4.png';

const cardData = [
  { 
    id: 'icon1', 
    icon: <FaEnvelope  />, 
    title: 'Formulaire', 
    description: 'Je ne sais pas quoi mettre', 
    number: 125 
},
  { id: 'icon2', 
    icon: <MdLocalParking />, 
    title: 'Messages', 
    description: 'Je ne sais pas quoi mettre', 
    number: 40 
},
  { id: 'icon3', icon: <FaPeopleCarry  />, 
  title: 'Utilisateurss', description: 'Je ne sais pas quoi mettre', number: 600 },
  { id: 'icon4', 
  icon: <FaEnvelope  />, 
  title: 'E-mail', 
  description: 'Je ne sais pas quoi mettre', 
  number: 25 
},
  { id: 'icon5', 
  icon: <MdLocalParking />, 
  title: 'Hotels', 
  description: 'Je ne sais pas quoi mettre', 
  number: 56 
},
  { id: 'icon6', 
  icon: <FaPeopleCarry  />, 
  title: 'Entités', 
  description: 'DJe ne sais pas quoi mettre', 
  number: 2 },
];

export default cardData;

export const cardsHotels = [
    {
      img: hotelImage2,
      title: "Hôtel Terrou-Bi",
      address: "Boulevard Martin Luther King Dakar, 11500",
      price: "25.000 XOF par nuit",
    },
    {
      img: hotelImage1,
      title: "King Fahd Palace",
      address: "Rte des Almadies, Dakar",
      price: "20.000 XOF par nuit",
    },
    {
      img: hotelImage3,
      title: "Radisson Blu Hotel",
      address: "Rte de la Corniche O, Dakar 16868",
      price: "22.000 XOF par nuit",
    },
    {
      img: hotelImage4,
      title: "Pullman Dakar Teranga",
      address: "Place de l'Independance, 10 Rue PL 29, Dakar",
      price: "30.000 XOF par nuit",
    },
  ]
