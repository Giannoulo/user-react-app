import { configureStore } from "@reduxjs/toolkit";
import securityReducer from "./Slices/securitySlice";
import userReducer from "./Slices/userSlice";

export default configureStore({
  reducer: { security: securityReducer, users: userReducer },
});
