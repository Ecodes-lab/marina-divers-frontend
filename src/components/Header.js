import React from "react";

import {
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from "@mui/material";

// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import "@splidejs/react-splide/dist/css";

// import "./styles/Header.css"

import logo from "../assets/img/marina-logo.png";
import MenuAppBar from "./MenuAppBar";
import Slider from "./Slider";
import EDPaper from "./EDPaper";
import EDButton from "./EDButton";

const headerSliderContents = [
  {
    title: "לורם איפסום דולור",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק ",
    buttonText: "כניסה לעמוד",
    action: () => {}
  },
  {
    title: "לורם איפסום דולור",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק ",
    buttonText: "כניסה לעמוד",
    action: () => {}
  },
  {
    title: "לורם איפסום דולור",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק ",
    buttonText: "כניסה לעמוד",
    action: () => {}
  },
  {
    title: "לורם איפסום דולור",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק ",
    buttonText: "כניסה לעמוד",
    action: () => {}
  },
  {
    title: "לורם איפסום דולור",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק ",
    buttonText: "כניסה לעמוד",
    action: () => {}
  },
  {
    title: "לורם איפסום דולור",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק ",
    buttonText: "כניסה לעמוד",
    action: () => {}
  },
  {
    title: "לורם איפסום דולור",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק ",
    buttonText: "כניסה לעמוד",
    action: () => {}
  },
  {
    title: "לורם איפסום דולור",
    sub: "אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק ",
    buttonText: "כניסה לעמוד",
    action: () => {}
  }
];

const Header = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = headerSliderContents.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };
  return (
    <Box component="header" className="header">
      <MenuAppBar />
      {/* <div className="header__logo-box">
        <img className="header__logo" src={logo} alt="Logo" />
        <span className="header__logo-title">MARINA DIVERS</span>
      </div> */}

      {/* <div className="profile-search-box"></div> */}

      <Box
        className="header__text-box"
        sx={{
          flexFlow: 1,
          display: { xs: "block", md: "block" }
        }}
      >
        <Typography
          variant="h1"
          component="div"
          //   noWrap
          className="heading-primary"
          //   sx={{ typography: { sm: "body1", xs: "body2" } }}
        >
          <span className="heading-primary--main">MARINA DIVERS</span>
          <span className="heading-primary--sub">
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם סולגק.{" "}
          </span>
        </Typography>
      </Box>

      <Slider
        className="slider"
        activeStep={activeStep}
        handleStepChange={handleStepChange}
      >
        {headerSliderContents.map(
          (content, index) => (
            // Math.abs(activeStep - index) <= maxSteps ? (
            <EDPaper key={content} className="slider__paper" component="button">
              <Box className="slider__paper-content">
                <Typography
                  className="slider__paper-content--title heading-tertiary"
                  variant="h6"
                  component="p"
                >
                  {content.title}
                </Typography>
                <Typography
                  className="slider__paper-content--sub heading-tertiary"
                  variant="h6"
                  component="p"
                >
                  {content.sub}
                </Typography>
                <Box className="slider__paper-content-button">
                  <EDButton
                    className="slider__paper-content--button"
                    title={content.buttonText}
                    display={{ xs: "inline-block", md: "inline-block" }}
                  />
                </Box>
              </Box>
            </EDPaper>
          )
          // ) : null
        )}
      </Slider>

      <div className="header__bottom">
        {/* <Typography
          variant="h2"
          className="header__bottom-text heading-secondary"
        >
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם סולגק.{" "}
        </Typography> */}
      </div>
    </Box>
  );
};

export default Header;
