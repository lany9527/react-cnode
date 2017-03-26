/**
 * Created by littlestone on 2017/3/23.
 */
import React from 'react';
import { connect } from 'react-redux';
import {selectTab, getTopics} from '../../redux/actions/index.action';
import TabContent from '../../components/tab-content/TabContent';
import Tabs from '../../components/tabs/Tabs';

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      isFreshing:false
    }
  }
  changeTab(tab){
    const {dispatch} = this.props;
    console.log("组件外部tab===>",tab);
    dispatch(selectTab(tab))
  }
  render(){
    const {topics} = this.props;
    return (
      <div>
        <Tabs onChangeTabs={(tab)=>{
          this.changeTab(tab)
        }} />
        <TabContent topics={topics} />
      </div>
    );
  }
  componentWillReceiveProps(newProps){
    console.log('componentWillReceiveProps',newProps)
    const {topics,isFetching,selectedTab,dispatch} = newProps;
    // getTopics开始后会先发送一个request的action,这个ation也会改变state从而触发该方法。如果不对isFetching进行判断，会再次进行fetchTopics从而进行了不必要的重复数据请求

    if(!isFetching && topics.data.length === 0){
      dispatch(getTopics(selectedTab));
    }
  }
  componentDidMount(){
    const {selectedTab,page,dispatch} = this.props;
    if(page === 0){
      console.log("page===0");
      dispatch(getTopics(selectedTab));
    }
    // console.log("Home===>",this.props);
  }

};
function mapStateToProps(state) {
  const {homePage} = state;
  const {selectedTab,tabData} = homePage;
  const {isFetching,page,topics} = tabData[selectedTab] || {isFetching:false,page:0};
  return {
    selectedTab,
    tabData,
    topics,
    isFetching,
    page
  }
}
export default connect(mapStateToProps)(Home);