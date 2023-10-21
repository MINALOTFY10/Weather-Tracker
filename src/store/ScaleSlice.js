import { createSlice } from "@reduxjs/toolkit";

const initialScaleState = { isCelsius: true, isFahrenheit: false };

const ScaleSlice = createSlice({
  name: "scale",
  initialState: initialScaleState,
  reducers: {
    toggleCelsiusScale(state) {
      if (!state.isCelsius) {
        state.isCelsius = !state.isCelsius;
        state.isFahrenheit = !state.isFahrenheit;
      }
    },
    toggleFahrenheitScale(state) {
      if (!state.isFahrenheit) {
        state.isCelsius = !state.isCelsius;
        state.isFahrenheit = !state.isFahrenheit;
      }
    },
  },
});

export default ScaleSlice;
