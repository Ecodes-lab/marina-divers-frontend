import React, { Component, useEffect, useState } from "react";
// import "./styles/HomePage.css"

// import style from "./styles/HomePage.module.css";

import {
  EDButton,
  EDCard,
  EDPaper,
  Footer,
  Header,
  Navigation,
  Slider
} from "../../../components";
import {
  Box,
  Typography,
  MobileStepper,
  Button,
  Grid,
  Icon
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CourseSlider } from "../courses";
import { fetchAsyncCourses } from "../../../store/features/courses/courseSlice";
import { EquipmentSlider } from "../equipments";
import { fetchAsyncEquipments } from "../../../store/features/equipments/equipmentSlice";

import { authActions } from "../../../store/features/auth/authSlice";

const shops = [
  {
    src: require("../../../assets/img/shop2.webp"),
    link: "",
    title: "לורם איפסום דולור ",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
  },
  {
    src: require("../../../assets/img/shop4.webp"),
    link: "",
    title: "לורם איפסום דולור ",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
  },
  {
    src: require("../../../assets/img/shop2.webp"),
    link: "",
    title: "לורם איפסום דולור ",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
  },
  {
    src: require("../../../assets/img/shop3.webp"),
    link: "",
    title: "לורם איפסום דולור ",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
  }
];

// const courses = [
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   },
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   },
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   },
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   },
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   },
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   },
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   },
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   },
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   },
//   {
//     src: require("../../../assets/img/marina-dive.png"),
//     link: "",
//     title: "לורם איפסום דולור ",
//     sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק "
//   }
// ];

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  // const maxSteps = courses.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAsyncCourses());
  //   dispatch(fetchAsyncEquipments());
  //   dispatch(authActions.authenticate());
  // }, []);

  return (
    <div style={{ position: "relative" }}>
      <Header />

      <Box component="main">
        {/* Courses Section */}
        <Box component="section" className="section-courses">
          <Box component="div" className="courses-box">
            <Typography
              variant="h2"
              className="courses-heading heading-secondary"
            >
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם סולגק.{" "}
            </Typography>
            <CourseSlider />

            {/* <Box component="div">
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                />
              </Box> */}
          </Box>
        </Box>
        {/* About Section */}
        <Box component="section" className="section-about">
          <EDCard className="about-box">
            <Box component="div" className="about-content">
              <Typography
                variant="h6"
                component="p"
                className="about-link heading-tertiary"
              >
                מי אנחנו?{" "}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className="about-heading heading-secondary"
              >
                בואו לצלול איתנו!{" "}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className="about-paragraph paragraph"
              >
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם סולגק.
                בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה -
                לתכי מורגם בורק? לתיג ישבעס.
              </Typography>
              <Grid container spacing={10}>
                {[
                  {
                    icon: require("../../../assets/img/marina-about-icon1.svg"),
                    title: "לורם איפסום דולור",
                    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק"
                  },
                  {
                    icon: require("../../../assets/img/marina-about-icon1.svg"),
                    title: "לורם איפסום דולור",
                    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק"
                  },
                  {
                    icon: require("../../../assets/img/marina-about-icon1.svg"),
                    title: "לורם איפסום דולור",
                    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק"
                  }
                ].map(about => (
                  <Grid key={about} item xs={4} md={4}>
                    <Box
                      component="img"
                      sx={{
                        height: "6.9rem",
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%"
                      }}
                      src={about.icon}
                      alt="Divers"
                    />
                    <Typography
                      variant="h6"
                      component="p"
                      className="heading-tertiary"
                    >
                      {about.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="p"
                      className="paragraph"
                    >
                      {about.sub}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </EDCard>
        </Box>
        {/* Info Section */}
        <Box component="section" className="section-info">
          <Box component="div" className="info-box">
            <Typography
              variant="h3"
              component="p"
              className="info-heading heading-tertiary"
            >
              חוויה שאפשר לראות רק מתחת למים!
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className="info-paragraph paragraph"
            >
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם סולגק.
              בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה -
              לתכי מורגם בורק? לתיג ישבעס.
            </Typography>
            <EDButton
              className="info-button"
              title="להרשמה"
              display={{ xs: "inline-block", md: "inline-block" }}
            />
          </Box>
        </Box>
        {/* Shop Section */}
        <Box component="section" className="section-shop">
          <Box className="shop-box">
            <Typography
              variant="h6"
              component="p"
              className="shop-link heading-tertiary"
            >
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם סולגק.{" "}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className="shop-heading heading-secondary"
            >
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם סולגק.{" "}
            </Typography>

            <EquipmentSlider />
          </Box>
        </Box>
        <Box component="section" className="section-review">
          <Box className="review-box">
            <Box component="div" className="review-content">
              <Typography
                variant="h6"
                component="p"
                className="review-link heading-tertiary"
              >
                הצוללנים מספרים עלינו
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className="review-heading heading-secondary"
              >
                חוויות של הלקוחות שלנו
              </Typography>
              <Grid className="reviews" container spacing={10}>
                {[
                  {
                    icon: require("../../../assets/img/shop1.webp"),
                    title: "איך לוקחים את החוויה הזו הבייתה?",
                    sub:
                      "התהליך קצר האנשים נפלאים, לקחו אותנו יד ביד ונתנו לנו תחושה של ביטחון וחוסר פחד, הציוד היה במצב מעולה והמדריכים היו אדיבים.חוויה שדלא אשכח כל החיים!",
                    rate: 5,
                    name: "מאיה, ראשלצ"
                  },
                  {
                    icon: require("../../../assets/img/marina-info.webp"),
                    title: "איך לוקחים את החוויה הזו הבייתה?",
                    sub:
                      "התהליך קצר האנשים נפלאים, לקחו אותנו יד ביד ונתנו לנו תחושה של ביטחון וחוסר פחד, הציוד היה במצב מעולה והמדריכים היו אדיבים.חוויה שדלא אשכח כל החיים!",
                    rate: 5,
                    name: "מאיה, ראשלצ"
                  },
                  {
                    icon: require("../../../assets/img/shop1.webp"),
                    title: "איך לוקחים את החוויה הזו הבייתה?",
                    sub:
                      "התהליך קצר האנשים נפלאים, לקחו אותנו יד ביד ונתנו לנו תחושה של ביטחון וחוסר פחד, הציוד היה במצב מעולה והמדריכים היו אדיבים.חוויה שדלא אשכח כל החיים!",
                    rate: 5,
                    name: "מאיה, ראשלצ"
                  }
                ].map(about => (
                  <Grid key={about} item xs={4} md={4}>
                    <Box
                      component="img"
                      sx={{
                        height: "23rem",
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                        borderRadius: 3,
                        border: "1px solid white"
                      }}
                      src={about.icon}
                      alt="Divers"
                    />
                    <Typography
                      variant="h5"
                      component="p"
                      className="heading-tertiary"
                    >
                      {about.title}
                    </Typography>
                    <Typography
                      // variant="h6"
                      component="p"
                      className="paragraph"
                    >
                      {about.sub}
                    </Typography>
                    <Typography
                      // variant="h6"
                      component="p"
                      className="paragraph"
                    >
                      {about.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default HomePage;
