/**
 * Created by littlestone on 2017/3/23.
 */
import React from 'react';
import { connect } from 'react-redux'
import TabContent from '../../components/tab-content/TabContent';

const Home = () => {
  return (
    <div>
      <TabContent />
    </div>
  );
};
function mapStateToProps(state) {
  const {index} = state;
}
export default connect(mapStateToProps)(Home);