import React  from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './App.css'

import Nav from './components/nav/Nav';
import Tabs from './components/tabs/Tabs';

const App = (props) => {
  return (
    <div className="app-container">
      <Tabs />
      <Nav />
        {props.children}
    </div>
  );
};

export default App
