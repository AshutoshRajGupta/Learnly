import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer, userReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    users: userReducer,
  },
});
