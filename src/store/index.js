import { createSlice, configureStore } from "@reduxjs/toolkit";
import StoreSlice from "./StoreSlice";
import ScaleSlice from "./ScaleSlice";
import LocationSlice from "./LocationSlice";
import DurationSlice from "./DurationSlice";

const store = configureStore({
  reducer: {
    store: StoreSlice.reducer,
    scale: ScaleSlice.reducer,
    location: LocationSlice.reducer,
    duration: DurationSlice.reducer
  },
});

export const storeActions = StoreSlice.actions;
export const scaleActions = ScaleSlice.actions;
export const locationActions = LocationSlice.actions;
export const durationActions = DurationSlice.actions;

export default store;
