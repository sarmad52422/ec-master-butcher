import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      Cookies.remove("jwt");
    },
    checkAuth: (state) => {
      const token = Cookies.get("jwt");
      state.isLoggedIn = !!token;
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;
export const AuthActionReducer = authSlice.reducer;
