/**
 * Created by littlestone on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';
class Counter extends Component {
  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <h1>点击： {counter} 次</h1>
        {' '}
        <button onClick={increment}> + </button>
        {' '}
        <button onClick={decrement}> - </button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={()=>incrementAsync()}>Increment async</button>
      </div>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter:  PropTypes.number.isRequired
};

export default Counter;