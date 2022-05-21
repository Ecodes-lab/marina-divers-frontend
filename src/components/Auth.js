import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Mail } from "@mui/icons-material";
import EDButton from "./EDButton";

import { authActions, login } from "../store/features/auth/authSlice";
import { uiActions } from "../store/features/ui/uiSlice";
import { useHistory } from "react-router-dom";
import { reloadData } from "../helpers/helper";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Auth = ({ history, open }) => {
  const [values, setValues] = React.useState({
    email: "max@divine-media.net",
    password: "P@nter292408",
    confirmPassword: "",
    // weightRange: "",
    showPassword: false
  });

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClose = () => {
    dispatch(uiActions.toggleAuthDialogBox());
  };

  const loginHandler = event => {
    event.preventDefault();

    dispatch(login({ username: values.email, password: values.password }));

    dispatch(uiActions.toggleAuthDialogBox());

    // reloadData(dispatch);

    // history.push("/profile/registration");
  };

  return (
    <Box
      component={Dialog}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Login"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Login or Signup with an active email address.
        </DialogContentText>

        {/* <form onSubmit={loginHandler}> */}
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <Mail />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="confirm-password"
            type={values.showPassword ? "text" : "password"}
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <EDButton
          hint="Login"
          title="התחברות"
          className="signin-button"
          onClick={loginHandler}
        />
        {/* </form> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Box>
  );
};

export default Auth;
