/**
 * Created by littlestone on 2017/3/23.
 */
import React  from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()


import Home from './components/common/Home'
import About from './components/common/About'
import Book from './components/book/Book'
import App from './App'

export default (
  <Router history={customHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/about" component={About}></Route>
      <Route path="/books" component={Book}></Route>
    </Route>
  </Router>
);