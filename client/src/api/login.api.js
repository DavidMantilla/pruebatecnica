import axios from 'axios'

import { API_URL } from "../config";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: { 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },

});

export const register=(user)=>instance.post(`/register`,user);

export const login=(user)=>instance.post(`/login`,user);
export const validate=()=>instance.post(`/validate`);