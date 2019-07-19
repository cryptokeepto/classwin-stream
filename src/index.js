import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from "./components/app";
import { Router } from "react-router-dom";
import { history } from "./history";

ReactDOM.render(
  <Router history={history}>
    <App />
   </Router>,
  document.getElementById('root')
);
