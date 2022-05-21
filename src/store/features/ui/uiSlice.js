import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthDialogBoxOpen: false,
  isEquipmentDialogBoxFormOpen: false,
  isLoading: false
  // status: 'idle'
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAuthDialogBox: (state, action) => {
      state.isAuthDialogBoxOpen = !state.isAuthDialogBoxOpen;
    },
    toggleEquipmentDialogBox: (state, action) => {
      state.isEquipmentDialogBoxFormOpen = !state.isEquipmentDialogBoxFormOpen;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
