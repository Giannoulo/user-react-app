import { configureStore } from "@reduxjs/toolkit";
import securityReducer from "./Slices/securitySlice";

export default configureStore({
  reducer: { security: securityReducer },
});
