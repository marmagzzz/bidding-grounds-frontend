import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";

const options = {
  position: positions.MIDDLE
};

ReactDOM.render(
  <React.StrictMode>
    <Provider template={AlertMUITemplate} {...options}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
