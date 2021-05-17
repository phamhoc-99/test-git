import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, compose, applyMiddleware } from 'redux';
import myReducer from './redux/reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  myReducer,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  , () => { AOS.init() });
   
  

