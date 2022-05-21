import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import App from "./App";

import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router> */}
      <App />
      {/* <Routes>
          <Route path="/" element={<App />} />
        </Routes> */}
      {/* </Router> */}
    </Provider>
  </React.StrictMode>
);
