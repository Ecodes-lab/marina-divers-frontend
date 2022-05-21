import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dive from "../../../api/dive";
import authInfo from "../../../helpers/helper";
import authHeader from "../../../services/auth-header";

// export const fetchAsyncDivers = createAsyncThunk(
//   "divers/fetchAsyncDivers",
//   async () => {
//     let headers = authHeader();
//     const authInfo = authInfo();
//     const response = await dive.get(`/jet-cct/divers`, { headers });
//     return response.data;
//   }
// );

export const createUpdateAsyncDiver = createAsyncThunk(
  "diver/createUpdateAsyncDiver",
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

    // console.log(values.type);
    // console.log(values._ID);
    if ((values._ID !== "0", values.type === "update")) {
      await dive
        .post(`/jet-cct/divers/${values._ID}`, formData, { headers })
        .then(function(resp) {
          console.log(resp);
          //   if (resp.data.success) {
          //     cb();
          //   }
          return resp.data;
          //   getItems(); //callback to parent's this.getItems(),
        });
    } else {
      await dive
        .post("/jet-cct/divers", formData, { headers })
        .then(function(resp) {
          console.log(resp);
          //   if (resp.data.success) {
          //     cb();
          //   }
          return resp.data;
          //   getItems(); //callback to parent's this.getItems(),
        });
    }

    // return response.data;
  }
);

export const fetchAsyncDiver = createAsyncThunk(
  "divers/fetchAsyncDiver",
  async () => {
    let headers = authHeader();
    const user = authInfo();
    const response = await dive.get(
      `/jet-cct/divers/?cct_author_id=${user.user_id}`,
      { headers }
    );
    return response.data[0] || {};
  }
);

const initialState = {
  //   divers: [],
  diver: {},
  response: {},
  status: "idle"
};

const diversSlice = createSlice({
  name: "divers",
  initialState: initialState,
  reducers: {
    addDivers: (state, { payload }) => {
      state.diver = payload;
    }
  },
  extraReducers: {
    // [fetchAsyncDivers.pending]: () => {
    //   console.log("Pending");
    // },
    // [fetchAsyncDivers.fulfilled]: (state, { payload }) => {
    //   //   console.log("Registration Successful");
    //   return { ...state, divers: payload };
    // },
    // [fetchAsyncDivers.rejected]: () => {
    //   console.log("Rejected");
    // },
    [createUpdateAsyncDiver.pending]: state => {
      console.log("Pending");
      return { ...state, diver: {}, response: {}, status: "loading" };
    },
    [createUpdateAsyncDiver.fulfilled]: (state, { payload }) => {
      console.log("Registration Successful");
      return { ...state, diver: {}, response: payload, status: "succeeded" };
    },
    [createUpdateAsyncDiver.rejected]: state => {
      console.log("Rejected");
      return { ...state, diver: {}, response: {}, status: "failed" };
    },
    [fetchAsyncDiver.pending]: state => {
      console.log("Pending");
      return { ...state, diver: {}, response: {}, status: "loading" };
    },
    [fetchAsyncDiver.fulfilled]: (state, { payload }) => {
      //   console.log("Registration Successful");
      return { ...state, diver: payload, response: {}, status: "succeeded" };
    },
    [fetchAsyncDiver.rejected]: state => {
      console.log("Rejected");
      return { ...state, diver: {}, response: {}, status: "failed" };
    }
  }
});

export const diverActions = diversSlice.actions;

export default diversSlice.reducer;
