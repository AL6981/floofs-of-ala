import './stylesheets/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import data from './constants/data';
import App from './containers/app'

ReactDOM.render(
  <App
    data={data}
  />,
  document.getElementById('app')
);
