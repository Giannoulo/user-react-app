import { createSlice } from "@reduxjs/toolkit";
import { reqresInstance } from "../../API/axiosConfig";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
    user: null,
    loading: false,
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
      state.loading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    loading: (state) => {
      state.loading = true;
    },
  },
});

// Export selectors,actions,reducer
export const userSelector = (state) => state.users;
export const { setUserList, setUser, loading } = userSlice.actions;
export default userSlice.reducer;

export function getUserList() {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await reqresInstance.get("/users");
      dispatch(setUserList(response.data.data));
    } catch (error) {
      alert(error);
    }
  };
}

// export function userLogout() {
//   return (dispatch) => {
//     dispatch(loading());
//     localStorage.removeItem("token");
//     dispatch(logout());
//   };
// }
