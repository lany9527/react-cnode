/**
 * Created by littlestone on 2017/3/24.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import './TabContent.css';

export default class TabContent extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    list: [
      {
        image: 'http://p4.so.qhimgs1.com/t0185c7d1794e828bda.jpg',
        title: 'Egg.js 1.0.0 正式发布 - 企业级 Node.js 框架',
        name: "ljhkj",
        read: 34641,
        share: 123,
        tag: '置顶',
        time: '2017-08-08 08:08:08'
      },
      {
        image: 'http://p1.so.qhimgs1.com/t01f66d799d3ffdd8cd.jpg',
        title: '饿了么大前端 Node.js 进阶教程',
        name: "ljhkj",
        read: 34641,
        share: 123,
        tag: '置顶',
        time: '2017-08-08 08:08:08'
      },
      {
        image: 'http://p4.so.qhimgs1.com/t01d9715dcfa0227e9a.jpg',
        title: 'Node.js 2016 回顾以及2017展望',
        name: "ljhkj",
        read: 34641,
        share: 123,
        tag: '置顶',
        time: '2017-08-08 08:08:08'
      }
    ]
  };
  render() {
    return (
      <div className="tab-content">
        <ul className="content-list">
          {this.state.list.map((item, i)=>{
            return (
              <li key={i} className="content-item">
                <Link data-flex="main:left cross:top box:first" to="/">
                  <div className="content-img">
                    <img src={item.image} alt=""/>
                  </div>
                  <div className="content-text">
                    <h3 className="content-title">{item.title}</h3>
                    <div className="content-desc" data-flex="main:left cross:top box:mean">
                      <div>
                        <p>{item.tag}</p>
                        <p>{item.share}/{item.read}</p>
                      </div>
                      <div>
                        <p>{item.name}</p>
                        <p>{item.time}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  componentDidMount(){
    console.log("tab-content==>",this.props);
  }
}