import axios from "axios";

export default axios.create({
  baseURL: "https://dive.myinspire.co.il/wp-json"
  // baseURL: "http://localhost:8080/dive.myinspire.co.il/wp-json"
  //   headers: {
  //       "Authorization": "Bearer "
  //   }
});
