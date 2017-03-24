import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'flex.css/dist/data-flex.css';
import './index.css';
import './static/iconfont/style.css';

import App from './App';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Message from "./pages/message/Message";
import Setting from "./pages/setting/Setting";

render(
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/message" component={Message}></Route>
        <Route path="/setting" component={Setting}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);