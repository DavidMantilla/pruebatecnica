import axios from 'axios'


const API='http://localhost:4000/api';
export const register=(user)=>axios.post(`${API}/register`,user);

export const login=(user)=>axios.post(`${API}/login`,user);