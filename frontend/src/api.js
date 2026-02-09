import axios from 'axios';

const API_BASE = "http://localhost:5000/api";


export const getPrices = () => axios.get(`${API_BASE}/prices`);
export const getChangePoints = () => axios.get(`${API_BASE}/change-points`);
export const getEvents = () => axios.get(`${API_BASE}/events`);
