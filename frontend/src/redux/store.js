
import { configureStore } from "@reduxjs/toolkit";
import interactionReducer from "./slices/interaction";
import chatReducer from "./slices/chatSlice";
import uiReducer from "./slices/ui";

export const store = configureStore({
  reducer: {
    interaction: interactionReducer,
    chat: chatReducer,
    ui: uiReducer,
  },
});