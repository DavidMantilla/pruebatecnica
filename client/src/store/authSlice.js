// store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

let tokenacc = localStorage.getItem("token")!== null? localStorage.getItem("token"): "";
let useracc = localStorage.getItem( "user") !== null?localStorage.getItem("user"):"";
let Authenticated = localStorage.getItem("isAuthenticated") !== null?localStorage.getItem("isAuthenticated"):"";
const initialState = {
  token: tokenacc,
  user: useracc,
  isAuthenticated: Authenticated,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
     
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, logout, setAuthError } = authSlice.actions;

export default authSlice.reducer;
