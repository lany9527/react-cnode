/**
 * Created by littlestone on 2017/3/24.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import './Tabs.css';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    tabs: [
      {title: '全部', tag: 'all'},
      {title: '精华', tag: 'good'},
      {title: '分享', tag: 'share'},
      {title: '问答', tag: 'ask'},
      {title: '招聘', tag: 'job'},
    ]
  };
  render() {
    return (
      <nav
        className="tabs"
        data-flex="dir: left main:center cross:center">
        <ul className="tabs-list">
          {this.state.tabs.map((item,i)=>{
            return (
              <li key={item.tag} className="tabs-item"
                  data-flex="mean">
                <Link to="/" className="active">{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}