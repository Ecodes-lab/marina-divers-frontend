import { configureStore, createSlice } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import coursesReducer from "./features/courses/courseSlice";
import diversSlice from "./features/divers/diversSlice";
import equipmentsReducer from "./features/equipments/equipmentSlice";
import registrationSlice from "./features/registration/registrationSlice";
import uiSlice from "./features/ui/uiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    equipments: equipmentsReducer,
    ui: uiSlice,
    reg: registrationSlice,
    divers: diversSlice
  }
});

export default store;
