import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import dive from "../../../api/dive";
import { uiActions } from "../ui/uiSlice";

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const json = JSON.stringify({
      username: username,
      password: password
    });

    const response = await dive.post("/jwt-auth/v1/token", json, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.data;

    // return axios.post(
    //   "http://localhost:8080/dive.myinspire.co.il/wp-json/jwt-auth/v1/token",
    //   json,
    //   {
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }
    // );
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.setItem(
    "user",
    JSON.stringify({ ...{}, isAuthenticated: false })
  );
});

const initialState = {
  user: {},
  error: {},
  isAuthenticated: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate(state) {
      const user = JSON.parse(localStorage.getItem("user"));
      state.isAuthenticated =
        user && user.isAuthenticated ? user.isAuthenticated : false;
    },
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  },
  extraReducers: {
    [login.pending]: () => {
      console.log("Pending");
    },
    [login.fulfilled]: (state, { payload }) => {
      console.log("Logged in Successfully");
      // if (response.data.token) {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...payload, isAuthenticated: true })
      );

      // uiActions.toggleAuthDialogBox();
      // }
      return { ...state, user: payload, isAuthenticated: true };
    },
    [login.rejected]: (state, { payload }) => {
      console.log("Login Failed");
      return { ...state, error: payload, isAuthenticated: false };
    },
    [logout.fulfilled]: (state, { payload }) => {
      console.log("Logged out");

      return { ...state, user: {}, isAuthenticated: false };
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
