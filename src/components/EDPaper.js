import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const papers = ["a", "b", "c", "d", "e", "f", "g"];

const EDPaper = ({ children, className, paperStyle, component }) => {
  return (
    // <Box
    //   className={className}
    //   sx={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     flexShrink: 0,
    //     "& > :not(style)": {
    //       m: 1,
    //       width: "32.3rem",
    //       height: "21.8rem",
    //     },
    //   }}
    // >
    // {/* <Paper className={paperStyle}>{children}</Paper> */}

    <Paper
      component={component}
      className={className}
      // sx={{
      //   // backgroundColor: "transparent",
      //   // display: "flex",
      //   flexWrap: "wrap",
      //   // flexShrink: 0,
      //   "& > :not(style)": {
      //     m: 1,
      //     // width: "32.3rem",
      //     // height: "21.8rem",
      //   },
      // }}
    >
      {children}
    </Paper>

    // </Box>
    // <Grid container spacing={2}>
    //   <Grid item xs={4} md={4}>
    //     <Box
    //       className={boxStyle}
    //       sx={{
    //         display: "flex",
    //         flexWrap: "wrap",
    //         "& > :not(style)": {
    //           m: 1,
    //           width: "32.3rem",
    //           height: "21.8rem",
    //         },
    //       }}
    //     >
    //       {/* <Paper className={paperStyle}>{children}</Paper> */}

    //       <Paper className={paperStyle}></Paper>
    //     </Box>
    //   </Grid>
    // </Grid>
  );
};

export default EDPaper;
