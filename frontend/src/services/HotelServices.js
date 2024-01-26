import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/api';

const addHotel = (data) => {
  return axios.post(`${SERVER_URL}/hotels`, data);
};

const getHotels = () => {
  return axios.get(`${SERVER_URL}/hotels`);
};

const getHotelById = (hotelId) => {
  return axios.get(`${SERVER_URL}/hotels/${hotelId}`);
};

const updateHotel = (hotelId, data) => {
  return axios.put(`${SERVER_URL}/hotels/${hotelId}`, data);
};

const deleteHotel = (hotelId) => {
  return axios.delete(`${SERVER_URL}/hotels/${hotelId}`);
};

const HotelServices = {
  addHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel
};

export default HotelServices;