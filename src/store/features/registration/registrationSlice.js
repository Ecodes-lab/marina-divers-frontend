import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dive from "../../../api/dive";
import authInfo from "../../../helpers/helper";
import authHeader from "../../../services/auth-header";

export const createAsyncDiver = createAsyncThunk(
  "register/createAsyncDiver",
  async values => {
    var formData = new FormData();
    //   let up_cert = uploadCertificate.current.files[0];
    //   let up_insh = uploadInshurance.current.files[0];
    formData.append("full_name", values.full_name);
    formData.append("id", values.id);
    formData.append("phone", values.phone); //coming from props
    formData.append("city", values.city); //coming from props
    formData.append("street", values.street); //coming from props
    formData.append("home_number", values.home_number); //coming from props
    formData.append("appartment_number", values.appartment_number); //coming from props
    formData.append("gender", values.gender); //coming from props
    formData.append("birth_date", values.birth_date); //coming from props
    formData.append("parent_name", values.parent_name); //coming from props
    formData.append("parent_id", values.parent_id); //coming from props
    formData.append("parent_health_sign", values.parent_health_sign); //coming from props
    formData.append("health_agreement", values.health_agreement); //coming from props
    formData.append("covid19", values.covid19); //coming from props
    formData.append("height", values.height); //coming from props
    formData.append("weight", values.weight); //coming from props
    formData.append("shoe_size", values.shoe_size); //coming from props
    formData.append("certificate", values.certificate); //coming from props
    // formData.append("upload_certificate", up_cert); //coming from props
    formData.append("begin_date_inshurance", values.begin_date_inshurance); //coming from props
    formData.append("end_date_inshurance", values.end_date_inshurance); //coming from props
    // formData.append("upload_inshurance", up_insh); //coming from props
    let headers = authHeader();
    headers["Content-Type"] = "multipart/form-data";
    // headers['Content-Disposition'] = 'form-data; filename=\''+file.name+'\'';
    // headers['X-WP-Nonce'] = 'your nonce here...';
    // const authInfo = authInfo();
    // const response = await dive.get(
    //   `/jet-cct/divers/?cct_author_id=${authInfo.user_id}`,
    //   { headers }
    // );
    await dive
      .post("/jet-cct/divers", formData, { headers })
      .then(function(resp) {
        console.log(resp);
        //   getItems(); //callback to parent's this.getItems(),
      });

    // return response.data;
  }
);

const initialState = {
  diver: {},
  response: {}
};

const registrationSlice = createSlice({
  name: "registration",
  initialState: initialState,
  reducers: {
    tempStoreUserRegistration: (state, { payload }) => {
      state.diver = payload;
    }
  },
  extraReducers: {
    [createAsyncDiver.pending]: () => {
      console.log("Pending");
    },
    [createAsyncDiver.fulfilled]: (state, { payload }) => {
      console.log("Registration Successful");
      return { ...state, response: payload };
    },
    [createAsyncDiver.rejected]: () => {
      console.log("Rejected");
    }
  }
});

export const regActions = registrationSlice.actions;

export default registrationSlice.reducer;
