import React  from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './App.css'

import Nav from './components/nav/Nav';
import Tabs from './components/tabs/Tabs';

const App = (props) => {
  return (
    <div className="app-container">
      <Tabs />
      <Nav />
      {/* Each smaller components */}
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {React.cloneElement(props.children)}
      </ReactCSSTransitionGroup>
    </div>
  );
};
function getSubstringUntilNth(str, pattern, n) {
  return  str.split(pattern, n).join(pattern);
}

export default App
