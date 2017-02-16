/**
 * Created by littlestone on 2017/2/16.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

/**
 * 把state.counter绑定到props的counter
 * @param state
 * @returns {{counter: *}}
 */
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

/**
 * 把action的所有方法绑定到props上面
 * @param dispatch
 * @returns {A|B|M|N}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}


/**
 * 通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
 */
export default connect(mapStateToProps,mapDispatchToProps)(Counter)

