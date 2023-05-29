import { configureStore } from "@reduxjs/toolkit";
import templeReducer from "../features/Temple"

const store = configureStore({
    reducer: {
      temple: templeReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  });
  export default store;