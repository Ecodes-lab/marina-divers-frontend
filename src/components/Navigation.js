import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
// import "./styles/Navigation.css";

const Navigation = ({ pages }) => {
  return (
    <Router>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {pages.map((page, index) => (
            <li key={index} className="navigation__item">
              <Link to="/" className="navigation__link heading-tertiary u-link">
                {page.page}
              </Link>
              {!page.mega.length == 0 ? (
                <Box
                  // component={Grid}
                  container
                  spacing={2}
                  className="navigation__link-megamenu"
                >
                  {page.mega.map(content => (
                    <Grid
                      key={content}
                      container
                      spacing={2}
                      className="navigation__link-megamenu-row"
                    >
                      <Grid
                        item
                        xs={4}
                        className="navigation__link-megamenu-col"
                      >
                        <Link
                          to="/"
                          className="navigation__link-megamenu-link heading-tertiary u-link"
                        >
                          {content.title}
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        className="navigation__link-megamenu-col"
                      >
                        <Typography className="navigation__link-megamenu-desc paragraph">
                          {content.desc}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              ) : null}
            </li>
          ))}

          {/* <li className="navigation__item">
            <Link to="/" className="navigation__link">
              אודות
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              בלוג
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              קורסים
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              מדריכים
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              חנות
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              דברו איתנו
            </Link>
          </li> */}
        </ul>
      </nav>
    </Router>
  );
};

export default Navigation;
