import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  courseActions,
  fetchAsyncCourse
} from "../../../store/features/courses/courseSlice";
import { uiActions } from "../../../store/features/ui/uiSlice";

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const history = useHistory();

  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const diver = useSelector(state => state.divers.diver);
  const course = useSelector(state => state.courses.course);
  //   console.log(course);

  useEffect(() => {
    dispatch(fetchAsyncCourse(id));
  }, [dispatch, id, course]);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {Object.keys(course).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Box>
          <Box
            component="img"
            sx={{
              height: 255,
              display: "block",
              maxWidth: 400,
              overflow: "hidden",
              width: "100%"
            }}
            src={course.images.isEmpty ? "" : ""}
            alt={course.name}
          />
          <Box className="slider__paper-content">
            <Typography className="heading-tertiary" variant="h6" component="p">
              {course.name}
            </Typography>
            <Typography
              className="heading-tertiary"
              variant="h6"
              component="p"
              dangerouslySetInnerHTML={{ __html: course.description }}
            />
            <Button
              variant="contained"
              onClick={
                isAuth
                  ? () => {
                      // dispatch(courseActions.tempRegCourses(course));
                      Object.keys(diver).length !== 0
                        ? history.push("/course/registration")
                        : history.push("/profile/registration");
                    }
                  : () => {
                      dispatch(uiActions.toggleAuthDialogBox());
                    }
              }
            >
              Go to Course
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CourseDetails;
