import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  //   Button,
  Tooltip,
  MenuItem,
  Grid
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// import { makeStyles } from "@mui/material/styles";

import logo from "../assets/img/marina-logo.png";

// import "./styles/MenuAppBar.css";
import Navigation from "./Navigation";
import { width } from "@mui/system";
import EDButton from "./EDButton";
import Auth from "./Auth";
import { logout } from "../store/features/auth/authSlice";
import { uiActions } from "../store/features/ui/uiSlice";

// const useStyles = makeStyles((theme) => ({}));

// const pages = [
//   "הקורסים שלנו",
//   "צלילות למוסמכים",
//   "צלילת היכרות",
//   "מועדון צלילה",
//   "פורום צוללים",
//   "חנות",
//   "ביטוח צלילה",
//   "צור קשר"
// ]

const pages = [
  {
    page: "הקורסים שלנו",
    mega: [
      {
        link: "",
        title: "צולל מים פתוחים",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      },
      {
        link: "",
        title: "צולל הרפתקן מתקדם",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      }
    ]
  },
  {
    page: "צלילות למוסמכים",
    mega: [
      {
        link: "",
        title: "רענון",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      },
      {
        link: "",
        title: "מודרכות",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      },
      {
        link: "",
        title: "פרטית",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      }
    ]
  },
  {
    page: "צלילת היכרות",
    mega: [
      {
        link: "",
        title: "אתר הבית",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      },
      {
        link: "",
        title: "מערות",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      }
    ]
  },
  {
    page: "מועדון צלילה",
    mega: [
      {
        link: "",
        title: "השכרת ציוד",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      },
      {
        link: "",
        title: "מועדון לקוחות",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      },
      {
        link: "",
        title: "בלוג",
        desc:
          "הכאב עצמו הוא אהבת הכאב, הבעיות האקולוגיות העיקריות, אבל אני נותן את הזמן הזה ליפול למטה, כדי שיהיה כאב גדול וכאב. על מנת שלרוב כל אחד מאיתנו יגיע למימוש כל סוג של תעסוקה מלבד לנצל את היעדים ממנה. אבל את הכאב בסרט קשה לגנות, בהנאה הוא רוצה לברוח מהכאב של להיות cillum בכאב, ללא תוצאה. הם היוצאים מן הכלל שהעיוורים מייחלים להם, הם לא רואים, הם אלו שמוותרים את אחריותם לאשמה המרגיעה את תלאות הנשמה."
      }
    ]
  },
  {
    page: "פורום צוללים",
    mega: []
  },
  {
    page: "חנות",
    mega: []
  },
  {
    page: "ביטוח צלילה",
    mega: []
  },
  {
    page: "צור קשר",
    mega: []
  }
];

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MenuAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);

  const dispatch = useDispatch();

  const settings = [
    {
      page: "Profile",
      onClick: () => {}
    },
    {
      page: "Account",
      onClick: () => {}
    },
    {
      page: "Dashboard",
      onClick: () => {}
    },
    {
      page: "Logout",
      onClick: () => {
        dispatch(logout());
      }
    }
  ];

  // const isAuth = JSON.parse(localStorage.getItem("user")).isAuthenticated;
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickOpenAuthDialog = () => {
    dispatch(uiActions.toggleAuthDialogBox());
  };

  return (
    <AppBar elevation={0} position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <img className="header__logo" src={logo} alt="Logo" />
          </Box>
          {/* <Avatar
            src={logo}
            alt="Logo"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            variant="square"
          /> */}
          <Typography
            className="header__logo-title"
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "EzerBlock_OE-Inline"
            }}
            color="white"
          >
            MARINA DIVERS
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" }
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              //   color="white"
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            className="header__logo-title"
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "EzerBlock_OE-Inline"
            }}
            color="white"
          >
            MARINA DIVERS
          </Typography>
          <Box
            className="navigation__menu"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Navigation pages={pages} />
            {/* {pages.map((page) => (

                <Navigation key={page} />
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }} className="signin">
            <IconButton
              size="large"
              aria-controls="search-appbar"
              aria-haspopup="true"
              sx={{
                color: "white",
                display: { xs: "inline-block", md: "inline-block" }
              }}
              //   onClick={handleOpenNavMenu}
              //   color="white"
            >
              <SearchIcon
                sx={{
                  fontSize: "2rem"
                }}
              />
            </IconButton>
            {/* <Tooltip title="Open settings">
              <Button
                className="navigation__signin-button"
                onClick={handleOpenUserMenu}
                // sx={{ p: 0 }}
                sx={{
                  color: "white",
                  display: { xs: "none", md: "inline-block" },
                  borderRadius: "1.92rem",
                  border: "0.1rem solid white",
                  width: "13.7rem",
                  height: "3.7rem",
                }}
              >
                <span>התחברות</span>
                <IconButton
                  //   onClick={handleOpenUserMenu}
                  sx={{ p: 0, color: "white" }}
                >
                  <ChevronLeftIcon />
                </IconButton>
              </Button>
              <IconButton className="signin__button" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <EDButton
              hint="Open settings"
              title="התחברות"
              className="navigation__signin-button"
              onClick={isAuth ? handleOpenUserMenu : handleClickOpenAuthDialog}
            />
            {/* <Auth open={isAuthOpen} setOpen={setIsAuthOpen} /> */}
            <Menu
              sx={{ mt: "4.5rem" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={setting.onClick}>
                    {setting.page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuAppBar;
