import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/features/auth/authSlice";
import { fetchAsyncCourses } from "../store/features/courses/courseSlice";
import { fetchAsyncDiver } from "../store/features/divers/diversSlice";
import { fetchAsyncEquipments } from "../store/features/equipments/equipmentSlice";

const loadData = () => {
  const dispatch = useDispatch();
  dispatch(fetchAsyncDiver());
  dispatch(fetchAsyncCourses());
  dispatch(fetchAsyncEquipments());
  dispatch(authActions.authenticate());
};

export default loadData;
