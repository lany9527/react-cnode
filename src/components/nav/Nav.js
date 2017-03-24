/**
 * Created by littlestone on 2017/3/24.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <nav
      className="nav"
      data-flex="dir: left main:center cross:center">
      <ul className="nav-list">
        <li className="nav-item"
            data-flex="mean">
          <Link to="/" className="active">首页</Link>
        </li>
        <li className="nav-item"
            data-flex="mean">
          <Link to="/about">消息</Link>
        </li>
        <li className="nav-item"
            data-flex="mean">
          <Link to="/books">设置</Link>
        </li>
        <li className="nav-item"
            data-flex="mean">
          <Link to="/cart">关于</Link>
        </li>
      </ul>
    </nav>
  )
};
export default Nav;