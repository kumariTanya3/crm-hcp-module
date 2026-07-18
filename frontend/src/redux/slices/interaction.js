
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  hcpName: "",
  interactionType: "Meeting",
  date: "",
  time: "",
  attendees: [],
  topics: "",
  materials: [],
  samples: [],
  sentiment: "Neutral",
  outcomes: "",
  followUp: "",
};

/*
const initialState = {
  hcpName: "Dr. Smith",
  interactionType: "Meeting",
  date: "2025-11-29",
  time: "19:36",
  attendees: "",
  topics: "Product X efficacy.",
  materials: "Brochures",
  samples: "",
  sentiment: "Neutral",
  outcomes: "",
  followUp: "",
};
*/

const interactionSlice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    updateInteraction(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },

    resetInteraction() {
      return initialState;
    },
  },
});

export const { 
  updateInteraction, 
  resetInteraction 
} = interactionSlice.actions;

export default interactionSlice.reducer;