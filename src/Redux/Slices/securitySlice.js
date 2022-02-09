import { createSlice } from "@reduxjs/toolkit";
import { reqresInstance } from "../../API/axiosConfig";

export const securitySlice = createSlice({
  name: "security",
  initialState: {
    token: null,
    loading: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.token = null;
      state.loading = false;
    },
    loading: (state) => {
      state.loading = true;
    },
  },
});

// Export selectors,actions,reducer
export const securitySelector = (state) => state.security;
export const { login, logout, loading } = securitySlice.actions;
export default securitySlice.reducer;

// Thunks
export function userLogin(email, password) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await reqresInstance.post("/login", { email: email, password: password });
      dispatch(login(response.data.token));
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert(error);
    }
  };
}

export function userLogout() {
  return (dispatch) => {
    dispatch(loading());
    localStorage.removeItem("token");
    dispatch(logout());
  };
}
