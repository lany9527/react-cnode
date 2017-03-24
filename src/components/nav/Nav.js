/**
 * Created by littlestone on 2017/3/24.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list" data-flex="dir:left main:center box: mean">
        <li className="nav-item"
            data-flex="mean">
          <NavLink exact to="/" activeClassName="active">
            <i className="icon-home"></i>
            <span>首页</span>
          </NavLink>
        </li>
        <li className="nav-item"
            data-flex="mean">
          <NavLink to="/message" activeClassName="active">
            <i className="icon-bubble"></i>
            <span>消息</span>
          </NavLink>
        </li>
        <li className="nav-item"
            data-flex="mean">
          <NavLink to="/setting" activeClassName="active">
            <i className="icon-setting"></i>
            <span>设置</span>
          </NavLink>
        </li>
        <li className="nav-item"
            data-flex="mean">
          <NavLink to="/about" activeClassName="active">
            <i className="icon-user"></i>
            <span>关于</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};
export default Nav;