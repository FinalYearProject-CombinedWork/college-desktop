import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

// ====== SCSS =========
import "./SCSS/Admin.scss";
import "./SCSS/LoginPage.scss";
import "./SCSS/Faculty.scss";
import "./SCSS/Student.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
