import React  from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './App.css'

import Nav from './components/nav/Nav';


const App = (props) => {
  return (
    <div className="app-container">
      <Nav />
        {props.children}
    </div>
  );
};

export default App
