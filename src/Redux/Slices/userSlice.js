import {createSlice} from "@reduxjs/toolkit";
import {reqresInstance} from "../../API/axiosConfig";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
    total_pages: null,
    user: null,
    loading: false,
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
      state.loading = false;
    },
    setTotalPages: (state, action) => {
      state.total_pages = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    // TODO Add Spinner
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export selectors,actions,reducer
export const userSelector = (state) => state.users;
export const {setUserList, setTotalPages, setUser, loading} = userSlice.actions;
export default userSlice.reducer;

// Thunks
export function getUserList(page) {
  return async (dispatch, getState) => {
    dispatch(loading(true));
    try {
      const response = await reqresInstance.get(`/users?page=${page}`);
      const {users} = getState();
      if (page === 1) {
        dispatch(setUserList(response.data.data));
        dispatch(setTotalPages(response.data.total_pages));
      } else if (page > 1 && page <= users.total_pages) {
        dispatch(setUserList([...users.userList, ...response.data.data]));
      }
      dispatch(loading(false));
    } catch (error) {
      dispatch(loading(false));
      alert(error);
    }
  };
}

export function createUser(user) {
  return async (dispatch) => {
    dispatch(loading(true));
    try {
      await reqresInstance.post("/users", user);
      dispatch(loading(false));
    } catch (error) {
      dispatch(loading(false));
      alert(error);
    }
  };
}

export function editUser(user, id) {
  return async (dispatch) => {
    dispatch(loading(true));
    try {
      await reqresInstance.patch(`/users/${id}`, user);
      dispatch(loading(false));
    } catch (error) {
      dispatch(loading(false));
      alert(error);
    }
  };
}
