import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

import "./App.css";

import {
  CourseDetails,
  CourseListing,
  CourseRegistration,
  HomePage,
  Registration
} from "./pages";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "./store/features/auth/authSlice";
import { fetchAsyncDiver } from "./store/features/divers/diversSlice";
import { fetchAsyncCourses } from "./store/features/courses/courseSlice";
import { fetchAsyncEquipments } from "./store/features/equipments/equipmentSlice";
import { Auth } from "./components";
import { loadData } from "./helpers/helper";
import { useHistory } from "react-router-dom";
// import BaseRouter from "./routes/BaseRouter";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  }
});

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuthDialogBoxOpen = useSelector(
    state => state.ui.isAuthDialogBoxOpen
  );

  useEffect(() => {
    dispatch(fetchAsyncDiver());
    dispatch(fetchAsyncCourses());
    dispatch(fetchAsyncEquipments());
    dispatch(authActions.authenticate());
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Router> */}
        {/* <BaseRouter /> */}
        {/* </Router> */}
        {/* <HomePage /> */}
        <Auth open={isAuthDialogBoxOpen} history={history} />
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/courses">
              <CourseListing />
            </Route>
            <Route path="/course/registration">
              <CourseRegistration />
            </Route>
            <Route path="/course/:id">
              <CourseDetails />
            </Route>
            <Route path="/profile/registration">
              <Registration />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
