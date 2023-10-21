import { createSlice } from "@reduxjs/toolkit";

const initialDurationState = { isToday: false, isWeek: true };

const DurationSlice = createSlice({
  name: "duration",
  initialState: initialDurationState,
  reducers: {
    toggleTodayDuration(state) {
      if (!state.isToday) {
        state.isToday = !state.isToday;
        state.isWeek = !state.isWeek;
      }
    },
    toggleWeekDuration(state) {
      if (!state.isWeek) {
        state.isToday = !state.isToday;
        state.isWeek = !state.isWeek;
      }
    },
  },
});

export default DurationSlice;
