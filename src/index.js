import React from 'react';
import ReactDom from 'react-dom';
import './assets/css/base.css';
import './library/font.js'


import App from './layouts/App';

//1. 引入路由依赖
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

