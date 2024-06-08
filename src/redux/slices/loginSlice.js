import { createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: localStorage.getItem("isLogin") === "true" ? true : false,
    username: "admin",
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("isLogin", "true");
      state.isLogin = true;
    },
    logout: (state, action) => {
      // localStorage.setItem("isLogin", "false");
      localStorage.removeItem("isLogin");
      state.isLogin = false;
    },
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
