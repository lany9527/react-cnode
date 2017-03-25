/**
 * Created by littlestone on 2017/3/23.
 */
import React from 'react';
import { connect } from 'react-redux';
import {getTopics} from '../../redux/actions/index.action';
import TabContent from '../../components/tab-content/TabContent';
import Tabs from '../../components/tabs/Tabs';

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      isFreshing:false
    }
  }
  render(){
    const {topics} = this.props;
    return (
      <div>
        <Tabs />
        <TabContent topics={topics} />
      </div>
    );
  }
  componentWillReceiveProps(newProps){
    // const {topics,isFetching,selectedTab,dispatch} = newProps;
    // if(!isFetching && topics.length === 0){
    //   dispatch(getTopics(selectedTab));
    // }
    // console.log("newProps-->",newProps);

  }
  componentDidMount(){
    const {selectedTab,dispatch} = this.props;
    // if(page === 0){
      dispatch(getTopics(selectedTab));
    // }
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