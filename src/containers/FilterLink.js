/**
 * Created by littlestone on 2017/2/15.
 */
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/actions';

import Link from '../components/Link';
// mapStateToProps 这个函数来指定如何把当前 Redux store中的state 映射到展示组件的 props 中
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});
/*
 * 除了读取 state，容器组件还能分发 actions。类似的方式，可以定义 mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
 * */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
});
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink