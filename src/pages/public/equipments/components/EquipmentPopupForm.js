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
  TextField,
  Switch,
  FormControlLabel,
  FormGroup
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Mail } from "@mui/icons-material";
import EDButton from "../../../../components/EDButton";

import { uiActions } from "../../../../store/features/ui/uiSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const IOSSwitch = styled(props => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5
      }
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff"
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600]
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3
    }
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500
    })
  }
}));

const EquipmentPopupForm = ({ setOpen, open }) => {
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
    dispatch(uiActions.toggleEquipmentDialogBox());
  };

  //   const loginHandler = event => {
  //     event.preventDefault();

  //     // dispatch(login({ username: values.email, password: values.password }));

  //     dispatch(uiActions.toggleAuthDialogBox());
  //   };

  return (
    <Box
      component={Dialog}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Select equipments you want to rent"}</DialogTitle>
      <DialogContent>
        {/* <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText> */}

        {/* <form onSubmit={loginHandler}> */}
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} />}
            label="Weights"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} />}
            label="Divers Suit"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} />}
            label="Divers Shoes"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} />}
            label="Weights Belt"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} />}
            label="Fins"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} />}
            label="Divers Ballance"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} />}
            label="Respiratory System"
          />
        </FormGroup>

        <EDButton
          hint="Login"
          title="התחברות"
          className="signin-button"
          //   onClick={loginHandler}
        />
        {/* </form> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Box>
  );
};

export default EquipmentPopupForm;
