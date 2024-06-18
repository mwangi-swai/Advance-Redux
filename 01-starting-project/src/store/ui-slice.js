import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isOpen: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialCartState,
  reducers: {
    open(state) {
      state.isOpen = !state.isOpen;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions; // to be used when dispatching actions in the components;

export default uiSlice.reducer;
