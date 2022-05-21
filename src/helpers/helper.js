import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/features/auth/authSlice";
import { fetchAsyncCourses } from "../store/features/courses/courseSlice";
import { fetchAsyncDiver } from "../store/features/divers/diversSlice";
import { fetchAsyncEquipments } from "../store/features/equipments/equipmentSlice";

export default function authInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    // console.log(user);
    return user;
  } else {
    return {};
  }
}

export const loadData = dispatch => {
  //   const dispatch = useDispatch();
  dispatch(fetchAsyncDiver());
  dispatch(fetchAsyncCourses());
  dispatch(fetchAsyncEquipments());
  dispatch(authActions.authenticate());
};

export const reloadData = dispatch => {
  //   const dispatch = useDispatch();
  dispatch(fetchAsyncDiver());
  //   dispatch(fetchAsyncCourses());
  //   dispatch(fetchAsyncEquipments());
  //   dispatch(authActions.authenticate());
};
