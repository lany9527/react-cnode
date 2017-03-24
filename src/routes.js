/**
 * Created by littlestone on 2017/3/23.
 */
import React  from 'react';
import {Router, Route, IndexRoute} from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Book from './components/book/Book'
import App from './App'

export default (
    <Route path="/" component={App}>
      {/*<IndexRoute component={Home}></IndexRoute>*/}
      {/*<Route path="/about" component={About}></Route>*/}
      {/*<Route path="/books" component={Book}></Route>*/}
    </Route>
);