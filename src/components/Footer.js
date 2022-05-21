import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Grid className="reviews" container spacing={10}>
        <Grid item xs={4} md={4}>
          {/* <Box
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
            // src={about.icon}
            alt="Divers"
          />
          <Typography variant="h5" component="p" className="heading-tertiary">
           
          </Typography> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
