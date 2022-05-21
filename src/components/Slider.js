import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Box, Typography, MobileStepper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import SwipeableViews from "react-swipeable-views";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";
// import { action } from "@storybook/addon-actions";
// import { Carousel } from "../src/index";

// import { withKnobs, boolean, number, text } from "@storybook/addon-knobs";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

// import "./styles/Slider.css"

import EDPaper from "./EDPaper";
import EDButton from "./EDButton";

// export const Slide = ({ children, className }) => {
//   return <SplideSlide className={className}>{children}</SplideSlide>;
// };

// const tooglesGroupId = "Toggles";
// const valuesGroupId = "Values";
// const mainGroupId = "Main";

// const getConfigurableProps = () => ({
//   showArrows: boolean("showArrows", true, tooglesGroupId),
//   showStatus: boolean("showStatus", true, tooglesGroupId),
//   showIndicators: boolean("showIndicators", true, tooglesGroupId),
//   infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
//   showThumbs: boolean("showThumbs", true, tooglesGroupId),
//   useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
//   autoPlay: boolean("autoPlay", true, tooglesGroupId),
//   stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
//   swipeable: boolean("swipeable", true, tooglesGroupId),
//   dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
//   emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
//   autoFocus: boolean("autoFocus", false, tooglesGroupId),
//   thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
//   selectedItem: number("selectedItem", 0, {}, valuesGroupId),
//   interval: number("interval", 2000, {}, valuesGroupId),
//   transitionTime: number("transitionTime", 500, {}, valuesGroupId),
//   swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
//   ariaLabel: text("ariaLabel", undefined)
// });

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 }
];

const Slider = ({
  children,
  className,
  isPagination = false,
  activeStep,
  maxSteps,
  handleNext,
  handleBack,
  handleStepChange,
  isStepper = false
}) => {
  const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleStepChange = (step) => {
  //   setActiveStep(step);
  // };

  return (
    <>
      <Box
        component="div"
        className={className}
        // breakPoints={breakPoints}
        // pagination={false}
        // itemPadding={[10, 50]}
      >
        <Carousel breakPoints={breakPoints} pagination={isPagination}>
          {children}
        </Carousel>
      </Box>
      {/* <Carousel
        // component={Carousel}
        className={className}
        breakPoints={breakPoints}
        pagination={false}
        // itemPadding={[10, 50]}
      >
        {children}
      </Carousel> */}
      {/* <Splide className={className} aria-label="My Favorite Images">
        {children}
      </Splide> */}
      {/* <Box
        component="div"
        className={className}
        // ref={attachScroller}
        // onMouseDown={onScroll}
        // onScroll={onMouseMove}
        sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
      >
        {children}
      </Box>
      {isStepper ? (
        <Box component="div" className="slider-stepper">
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            // nextButton={
            //   <Button
            //     size="small"
            //     onClick={this.handleNext}
            //     disabled={this.state.activeStep === this.state.maxSteps - 1}
            //   >
            //     Next
            //     {theme.direction === "rtl" ? (
            //       <KeyboardArrowLeft />
            //     ) : (
            //       <KeyboardArrowRight />
            //     )}
            //   </Button>
            // }
            // backButton={
            //   <Button
            //     size="small"
            //     onClick={this.handleBack}
            //     disabled={this.state.activeStep === 0}
            //   >
            //     {theme.direction === "rtl" ? (
            //       <KeyboardArrowRight />
            //     ) : (
            //       <KeyboardArrowLeft />
            //     )}
            //     Back
            //   </Button>
            // }
          />
        </Box>
      ) : null} */}

      {/* <Box
        component={Carousel}
        // infiniteLoop
        swipeable
        centerMode
        centerSlidePercentage={50}
        // centerSlidePercentage={number(
        //   "centerSlidePercentage",
        //   80,
        //   {}
        //   // mainGroupId
        // )}
        // {...getConfigurableProps()}
        className={className}
        style={{ display: "flex" }}
      >
        {children}
      </Box>*/}
    </>

    // <SwipeableViews
    //   slideClassName={className}
    //   animateTransitions={true}
    //   // resistance={false}
    //   containerStyle={
    //     {
    //       // justifyContent: "center",
    //       // maxWidth: "100rem",
    //       // padding: "5",
    //       // width: "100vw",
    //       // height: "100%",
    //       // overflow: "hid",
    //       // "& > :not(style)": {
    //       //   m: 1,
    //       //   width: "32.3rem",
    //       //   height: "21.8rem",
    //       // },
    //     }
    //   }
    //   slideStyle={{
    //     width: "32.3rem",
    //     marginRight: "1.8rem",
    //     borderRadius: "10px",
    //     // justifyContent: "center",
    //     // alignContent: "center",
    //     // transformOrigin: "center center",
    //     // scrollSnapAlign: "center",
    //     flexShrink: "0",
    //     overflow: "visible"
    //     // display: "block",
    //   }}
    //   // style={{ overflow: no }}
    //   axis={theme.direction === "ltr" ? "x-reverse" : "x"}
    //   index={activeStep}
    //   onChangeIndex={handleStepChange}
    //   enableMouseEvents
    // >
    //   {children}
    // </SwipeableViews>
  );
};

export default Slider;
