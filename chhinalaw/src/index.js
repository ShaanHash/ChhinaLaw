import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './componants/MainContainer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

