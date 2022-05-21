import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dive from "../../../api/dive";
import authHeader from "../../../services/auth-header";

export const fetchAsyncCourses = createAsyncThunk(
  "courses/fetchAsyncCourses",
  async () => {
    const response = await dive.get(
      "/wc/store/products"
      // {
      //   headers: authHeader
      // }
    );
    return response.data;
  }
);

export const fetchAsyncCourse = createAsyncThunk(
  "courses/fetchAsyncCourse",
  async id => {
    const response = await dive.get(
      `/wc/store/products/${id}`
      // {
      //   headers: authHeader
      // }
    );
    return response.data;
  }
);

export const registerAsyncCourse = createAsyncThunk(
  "courses/registerAsyncCourse",
  async course => {
    const response = await dive.post(
      `/jet-cct/courses`,
      JSON.stringify(course),
      {
        headers: authHeader()
      }
    );
    return response.data;
  }
);

const initialState = {
  courses: [],
  course: {},
  registeredCourses: [],
  rentedEquipments: []
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourses: (state, { payload }) => {
      state.courses = payload;
    },
    tempRegCourses: (state, { payload }) => {
      state.registeredCourses = payload;
    }
  },
  extraReducers: {
    [fetchAsyncCourses.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncCourses.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, courses: payload };
    },
    [fetchAsyncCourses.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncCourse.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncCourse.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, course: payload };
    },
    [fetchAsyncCourse.rejected]: () => {
      console.log("Rejected");
    }
  }
});

export const courseActions = courseSlice.actions;

// export const getAllCourses = state => state.courses.courses;

export default courseSlice.reducer;
