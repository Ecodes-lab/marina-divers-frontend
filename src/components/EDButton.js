import React from "react";
// import "./styles/Button.css";

import { Tooltip, Button, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const EDButton = ({
  title,
  hint,
  className,
  onClick,
  display = { xs: "none", md: "inline-block" }
}) => {
  return (
    // <a href="#move-down" className="btn btn--white btn--animated">
    //   {title}
    // </a>
    <Tooltip title={hint}>
      <Button
        className={`${className} btn btn--white btn--animated`}
        onClick={onClick}
        // sx={{ p: 0 }}
        sx={{
          color: "white",
          display: display,
          borderRadius: "1.92rem",
          border: "0.1rem solid white",
          width: "13.7rem",
          height: "3.7rem"
        }}
      >
        <span className="btn-text">{title}</span>
        <IconButton
          //   onClick={handleOpenUserMenu}
          sx={{ p: 0, color: "white" }}
        >
          <ChevronLeftIcon />
          {/* <ChevronLeftIcon /> */}
        </IconButton>
      </Button>
      {/* <IconButton className="signin__button" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton> */}
    </Tooltip>
  );
};

export default EDButton;
