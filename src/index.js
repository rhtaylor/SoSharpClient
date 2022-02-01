import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css'; 
import './scss/shop.scss';
import {v1 as uuid} from 'uuid'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; 
import {store} from './store/store'

import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopPendingCuts from './components/ShopPendingCuts'; 
import Index from './components/Index.js'


ReactDOM.render( 
  <Provider store={store}>
   <Router>
    <Routes>
      <Route path="/CheckIn" element={<App />} /> 
      <Route exact path="CheckedIn"  element={ <ShopPendingCuts key={uuid()} /> } />
      <Route exact path="/"  element={ <Index key={uuid()} /> } />
      </Routes> 
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
