import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux';
import todoApp from './reducer/reducers'

let store = createStore(todoApp);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
