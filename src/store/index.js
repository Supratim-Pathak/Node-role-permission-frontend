import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./Slices/LayoutSlice";

export const store = configureStore({
  reducer: {
    sidebar: layoutReducer,
  },
});
