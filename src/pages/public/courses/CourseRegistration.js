import React from "react";
import {
  Box,
  Container,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  TextField,
  RadioGroup,
  Radio
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/features/ui/uiSlice";
import { EquipmentPopupForm } from "../equipments";

const CourseRegistration = () => {
  const [values, setValues] = React.useState({
    course_calender: "",
    equipment: ""
  });

  const isEquipmentDialogBoxFormOpen = useSelector(
    state => state.ui.isEquipmentDialogBoxFormOpen
  );

  const dispatch = useDispatch();

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });

    // if (values.equipment === "yes") {
    //   dispatch(uiActions.toggleEquipmentDialogBox());
    // }
  };
  return (
    <>
      <EquipmentPopupForm open={isEquipmentDialogBoxFormOpen} />
      <Box sx={{ width: "100%" }} component={Container}>
        <Box
          component="form"
          // sx={{
          //   "& > :not(style)": { m: 1, width: "25ch" }
          // }}
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
            <InputLabel htmlFor="course_calender">Course Calender</InputLabel>
            <OutlinedInput
              margin="dense"
              id="course_calender"
              label="Course Calender"
              type="datetime-local"
              value={values.course_calender}
              onChange={handleChange("course_calender")}
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
            <InputLabel htmlFor="equipment">
              Do you need any equipment?
            </InputLabel>
            <RadioGroup
              row
              aria-labelledby="equipment"
              defaultValue="no"
              name="equipment"
              value={values.equipment}
              onChange={handleChange("equipment")}
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                onClick={() => {
                  dispatch(uiActions.toggleEquipmentDialogBox());
                }}
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

          <Button
            disabled={values.course_calender === "" || values.equipment === ""}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CourseRegistration;
