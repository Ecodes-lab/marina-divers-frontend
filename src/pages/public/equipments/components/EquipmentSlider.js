import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { EDCard, Slider } from "../../../../components";

const EquipmentSlider = () => {
  const equipments = useSelector(state => state.equipments.equipments);
  return (
    <Slider
      className="slider"
      // activeStep={activeStep}
      // handleStepChange={handleStepChange}
      // maxSteps={maxSteps}
      isStepper={true}
    >
      {equipments.map(
        (content, index) => (
          // Math.abs(activeStep - index) <= maxSteps ? (
          <Box key={index} component="div">
            <EDCard className="slider__paper">
              <Box
                component="img"
                sx={{
                  height: "17.7rem",
                  // display: "flex",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "15.1rem"
                }}
                src={!content.images.isEmpty ? content.images : ""}
                alt={content.name}
              />
            </EDCard>
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
          </Box>
        )
        // ) : null
      )}
    </Slider>
  );
};

export default EquipmentSlider;
