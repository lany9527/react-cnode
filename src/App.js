import React  from 'react';
import {Link} from 'react-router-dom';

import Nav from './components/nav/Nav'

const App = (props) => {
  return (
    <div className="container">
      <Nav />
      {/* Each smaller components */}
      {props.children}
    </div>
  );
};

export default App
