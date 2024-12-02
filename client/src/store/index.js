import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer, // Clave 'auth' para acceder al estado de autenticación
  },
});