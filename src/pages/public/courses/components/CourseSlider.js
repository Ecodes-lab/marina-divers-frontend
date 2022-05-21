import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { EDCard, Slider } from "../../../../components";
import { Link, useHistory } from "react-router-dom";
// import { getAllCourses } from "../../../../store/features/courses/courseSlice";

const CourseSlider = () => {
  const courses = useSelector(state => state.courses.courses);

  let history = useHistory();
  // console.log(courses);
  return (
    <Slider
      className="slider"
      // activeStep={activeStep}
      // handleStepChange={handleStepChange}
      // maxSteps={maxSteps}
      isStepper={true}
    >
      {courses.map(
        (content, index) => (
          // Math.abs(activeStep - index) <= maxSteps ? (

          <EDCard
            key={content}
            onClick={() => {
              history.push(`/course/${content.id}`);
              // <Link to={`/courses/${content.id}`} />;
            }}
            className="slider__paper"
          >
            {/* <Link className="u-link"> */}
            <Box
              component="img"
              sx={{
                height: 255,
                display: "block",
                maxWidth: 400,
                overflow: "hidden",
                width: "100%"
              }}
              src={!content.images.isEmpty ? "" : ""}
              alt={content.name}
            />
            <Box className="slider__paper-content">
              <Typography
                className="heading-tertiary"
                variant="h6"
                component="p"
              >
                {content.name}
              </Typography>
              <Typography
                className="heading-tertiary"
                variant="h6"
                component="p"
                dangerouslySetInnerHTML={{ __html: content.description }}
              />
            </Box>
            {/* </Link> */}
          </EDCard>
        )
        // ) : null
      )}
    </Slider>
  );
};

export default CourseSlider;
