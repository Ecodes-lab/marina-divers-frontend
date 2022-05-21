import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { CourseDetails, CourseListing, HomePage } from "../pages";

const BaseRouter = () => {
  return (
    // <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/courses" element={<CourseListing />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
    </Routes>
    // </Router>
  );
};

export default BaseRouter;
