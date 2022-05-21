import * as React from "react";
import {
  Container,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import dive from "../../../api/dive";

import authHeader from "../../../services/auth-header";
import { createUpdateAsyncDiver } from "../../../store/features/divers/diversSlice";
import { useHistory } from "react-router-dom";

const steps = ["Form One", "Form Two"];

const Registration = () => {
  const uploadCertificate = React.useRef(null);
  const uploadInshurance = React.useRef(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const history = useHistory();

  const diver = useSelector(state => state.divers);
  const userInfo = useSelector(state => state.reg.diver);

  const [values, setValues] = React.useState({
    type: "create",
    _ID: "0",
    full_name: userInfo.full_name || "",
    id: userInfo.id || "",
    phone: userInfo.phone || "",
    city: userInfo.city || "",
    street: userInfo.street || "",
    home_number: userInfo.home_number || "",
    appartment_number: userInfo.appartment_number || "",
    gender: userInfo.gender || "",
    birth_date: userInfo.birth_date || "",
    parent_name: userInfo.parent_name || "",
    parent_id: userInfo.parent_id || "",
    parent_health_sign: userInfo.parent_health_sign || "",
    health_agreement: userInfo.health_agreement || "",
    covid19: userInfo.covid19 || "",
    height: userInfo.height || "",
    weight: userInfo.weight || "",
    shoe_size: userInfo.shoe_size || "",
    certificate: userInfo.certificate || "",
    upload_certificate: userInfo.upload_certificate || "",
    begin_date_inshurance: userInfo.begin_date_inshurance || "",
    end_date_inshurance: userInfo.end_date_inshurance || "",
    upload_inshurance: userInfo.upload_inshurance || ""
  });

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  //   const handleImageChange = () => {
  //     var oFReader = new FileReader();
  //     oFReader.readAsDataURL(uploadCertificate.current.files[0]);
  //     oFReader.onload = function(oFREvent) {
  //       setImg(oFREvent.target.result);
  //     };
  //   };

  const handleNext = async () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }
    if (activeStep === steps.length - 1) {
      //   if (
      //     uploadCertificate.current.files.length > 0 &&
      //     uploadInshurance.current.files.length > 0
      //   ) {
      if (Object.keys(diver.diver).length !== 0) {
        dispatch(createUpdateAsyncDiver(values));
      } else {
        dispatch(createUpdateAsyncDiver(values));
        if (diver.status === "succeeded") {
          history.push("/course/registration");
        }
      }

      //   dispatch(regActions.tempStoreUserRegistration(values));
      //   }
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(() => {
    if (Object.keys(diver.diver).length !== 0) {
      setValues({ ...values, type: "update", _ID: diver._ID });
    }
  }, [diver.diver]);

  return (
    <Box sx={{ width: "100%" }} component={Container}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          //   if (isStepOptional(index)) {
          //     labelProps.optional = (
          //       <Typography variant="caption">Optional</Typography>
          //     );
          //   }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          {activeStep === 0 && (
            <Box>
              {/* <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="user_id">User ID</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="user_id"
                  label="User ID"
                  type="text"
                  hidden={true}
                  value={values.user_id}
                  onChange={handleChange("user_id")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="date">Date</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="date"
                  label="Date"
                  type="datetime-local"
                  hidden={true}
                  value={values.date}
                  onChange={handleChange("date")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl> */}
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="full_name">Full Name</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="full_name"
                  label="Full Name"
                  type="text"
                  value={values.full_name}
                  onChange={handleChange("full_name")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="id">ID</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="id"
                  label="ID"
                  type="number"
                  value={values.id}
                  onChange={handleChange("id")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="phone">Phone</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="phone"
                  label="Phone Number"
                  type="text"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="city">City</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="city"
                  label="City"
                  type="text"
                  value={values.city}
                  onChange={handleChange("city")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="street">Street</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="street"
                  label="Street"
                  type="text"
                  value={values.street}
                  onChange={handleChange("street")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="home_number">Home Number</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="home_number"
                  label="Home Number"
                  type="text"
                  value={values.home_number}
                  onChange={handleChange("home_number")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="appartment_number">
                  Appartment Number
                </InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="appartment_number"
                  label="Appartment Number"
                  type="text"
                  value={values.appartment_number}
                  onChange={handleChange("appartment_number")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="gender">Gender</InputLabel>
                <Select
                  //   labelId="demo-simple-select-label"

                  margin="dense"
                  id="gender"
                  label="Gender"
                  value={values.gender}
                  onChange={handleChange("gender")}
                >
                  <MenuItem value="">Select Gender</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
                {/* <OutlinedInput
                  
                  margin="dense"
                  id="gender"
                  label="Gender"
                  type="text"
                  value={values.gender}
                  onChange={handleChange("gender")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                /> */}
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="birth_date">Birth Date</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="birth_date"
                  label="Birth Date"
                  type="date"
                  value={values.birth_date}
                  onChange={handleChange("birth_date")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="parent_name">Parent Name</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="parent_name"
                  label="Parent Name"
                  type="text"
                  value={values.parent_name}
                  onChange={handleChange("parent_name")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="parent_id">Parent ID</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="parent_id"
                  label="Parent ID"
                  type="text"
                  value={values.parent_id}
                  onChange={handleChange("parent_id")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="parent_health_sign">
                  Parent Health Sign
                </InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="parent_health_sign"
                  label="Parent Health Sign"
                  multiline
                  rows={4}
                  variant="filled"
                  value={values.parent_health_sign}
                  onChange={handleChange("parent_health_sign")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="health_agreement">
                  Health Agreement
                </InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="health_agreement"
                  label="Health Agreement"
                  type="text"
                  value={values.health_agreement}
                  onChange={handleChange("health_agreement")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="covid19">Covid19</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="covid19"
                  label="Covid19"
                  multiline
                  rows={4}
                  variant="filled"
                  value={values.covid19}
                  onChange={handleChange("covid19")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
            </Box>
          )}
          {activeStep === 1 && (
            <Box>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="height">Height</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="height"
                  label="Height"
                  type="text"
                  value={values.height}
                  onChange={handleChange("height")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="weight">Weight</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="weight"
                  label="Weight"
                  type="text"
                  value={values.weight}
                  onChange={handleChange("weight")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="shoe_size">Shoe Size</InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="shoe_size"
                  label="Shoe Size"
                  type="text"
                  value={values.shoe_size}
                  onChange={handleChange("shoe_size")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="certificate">
                  Do you have any certificate?
                </InputLabel>
                <RadioGroup
                  row
                  aria-labelledby="certificate"
                  defaultValue="no"
                  name="certificate"
                  value={values.certificate}
                  onChange={handleChange("certificate")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {/* <OutlinedInput
                  
                  margin="dense"
                  id="email"
                  label="Do you have any certificate?"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                /> */}
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="upload_certificate">
                  Upload Certificate
                </InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="upload_certificate"
                  label="Upload Certificate"
                  type="file"
                  accept="image/png, image/jpeg, .pdf"
                  ref={uploadCertificate}
                  //   value={values.upload_certificate}
                  //   onChange={() => {
                  //     var oFReader = new FileReader();
                  //     if ((file = uploadCertificate.current.files.files[0])) {
                  //       if (
                  //         uploadCertificate.current.files.width <= 200 &&
                  //         uploadCertificate.current.files.height <= 200
                  //       ) {
                  //         oFReader.readAsDataURL(file);
                  //         oFReader.onload = function(oFREvent) {
                  //           //   setImg(oFREvent.target.result);
                  //           setValues(
                  //             values =>
                  //               (values.upload_certificate =
                  //                 oFREvent.target.result)
                  //           );
                  //         };
                  //       }
                  //     }
                  //   }}
                  //   onChange={handleChange("upload_certificate")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="begin_date_inshurance">
                  Begin Date Inshurance
                </InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="begin_date_inshurance"
                  label="Begin Date Inshurance"
                  type="date"
                  value={values.begin_date_inshurance}
                  onChange={handleChange("begin_date_inshurance")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="end_date_inshurance">
                  End Date Inshurance
                </InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="end_date_inshurance"
                  label="End Date Inshurance"
                  type="date"
                  value={values.end_date_inshurance}
                  onChange={handleChange("end_date_inshurance")}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="upload_inshurance">
                  Upload Inshurance
                </InputLabel>
                <OutlinedInput
                  margin="dense"
                  id="upload_inshurance"
                  label="Upload Inshurance"
                  type="file"
                  accept="image/png, image/jpeg, .pdf"
                  ref={uploadInshurance}
                  //   value={values.upload_inshurance}
                  //   onChange={handleChange("upload_inshurance")}
                  //   onChange={() => {
                  //     var oFReader = new FileReader();
                  //     oFReader.readAsDataURL(uploadInshurance.current.files[0]);
                  //     oFReader.onload = function(oFREvent) {
                  //       //   setImg(oFREvent.target.result);
                  //       //   handleChange("upload_inshurance")
                  //       setValues(
                  //         values =>
                  //           (values.upload_inshurance = oFREvent.target.result)
                  //       );
                  //     };
                  //   }}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //     //   onClick={handleClickShowPassword}
                  //     //   onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <Mail />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
            </Box>
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Save & Continue" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Registration;
