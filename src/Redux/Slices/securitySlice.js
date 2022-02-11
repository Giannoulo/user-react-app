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
    },
    // TODO Add Spinner
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export selector,actions,reducer
export const securitySelector = (state) => state.security;
export const { login, logout, loading } = securitySlice.actions;
export default securitySlice.reducer;

// Thunks
export function userLogin(userEmail, userPassword) {
  return async (dispatch) => {
    dispatch(loading(true));
    try {
      const response = await reqresInstance.post("/login", {
        email: userEmail,
        password: userPassword,
      });
      dispatch(login(response.data.token));
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      dispatch(loading(false));
      alert(error);
    }
  };
}

export function userLogout() {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
}
