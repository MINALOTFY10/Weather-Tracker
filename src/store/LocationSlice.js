import { createSlice } from "@reduxjs/toolkit";

const initialLocationState = {
  Location: "london",
  LocationChosen: false,
};

const LocationSlice = createSlice({
  name: "location",
  initialState: initialLocationState,
  reducers: {
    chnageLocation(state, action) {
      console.log(action.payload);
      state.Location = action.payload;
      state.LocationChosen = true;
    },
    locationChosen(state) {
        state.LocationChosen = true;
    },
    searchLocation(state) {
        state.LocationChosen = false;
    }
  },
});

export default LocationSlice;
