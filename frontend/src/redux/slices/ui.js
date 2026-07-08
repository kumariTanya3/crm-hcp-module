
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  aiStatus: "Ready",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },

    setAIStatus(state, action) {
      state.aiStatus = action.payload;
    },
  },
});

export const { setLoading, setAIStatus } = uiSlice.actions;

export default uiSlice.reducer;