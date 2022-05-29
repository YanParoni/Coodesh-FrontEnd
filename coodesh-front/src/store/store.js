import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { patientApi } from "../services/api";
import pageReducer  from '../services/pagination'
export const store = configureStore({
  reducer: {
    pagination:pageReducer,
    [patientApi.reducerPath]: patientApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patientApi.middleware),
});
