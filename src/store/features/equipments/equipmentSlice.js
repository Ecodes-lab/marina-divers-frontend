import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dive from "../../../api/dive";

export const fetchAsyncEquipments = createAsyncThunk(
  "courses/fetchAsyncEquipments",
  async () => {
    const response = await dive.get("/wc/store/products");
    return response.data;
  }
);

const initialState = {
  equipments: []
};

const equipmentSlice = createSlice({
  name: "equipments",
  initialState,
  reducers: {
    addEquipments: (state, { payload }) => {
      state.equipments = payload;
    }
  },
  extraReducers: {
    [fetchAsyncEquipments.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncEquipments.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, equipments: payload };
    },
    [fetchAsyncEquipments.rejected]: () => {
      console.log("Rejected");
    }
  }
});

export const { addEquipments } = equipmentSlice.actions;

// export const getAllCourses = state => state.courses.courses;

export default equipmentSlice.reducer;
