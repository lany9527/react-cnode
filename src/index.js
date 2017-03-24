import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute,Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'flex.css/dist/data-flex.css';
import './index.css';
import App from './App';
import Home from './components/common/Home'
import About from './components/common/About'
import Book from './components/book/Book'

render(
  <Router history={history}>
    <App>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/books" component={Book}></Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);